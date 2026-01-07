function initGlobe() {
    const canvas = document.getElementById('globe-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    // Resize logic
    function resize() {
        const container = canvas.parentElement;
        width = container.offsetWidth;
        height = container.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

    // Globe Config
    const GLOBE_RADIUS = 220;
    const DOT_RADIUS = 1.6;
    const ROTATION_SPEED = 0.003;
    let rotation = 0;
    let dots = [];

    // Load World Map Texture
    const img = new Image();
    img.src = 'world_map.png';
    img.onload = () => {
        // Create offscreen canvas to read pixel data
        const offCanvas = document.createElement('canvas');
        const offCtx = offCanvas.getContext('2d');
        offCanvas.width = 200; // Low resolution for dot sampling
        offCanvas.height = 100;

        // Draw image to offscreen canvas
        offCtx.drawImage(img, 0, 0, offCanvas.width, offCanvas.height);
        const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height).data;

        // Generate dots based on landmass (white pixels)
        for (let y = 0; y < offCanvas.height; y++) {
            // Map Y (0..height) to Latitude (PI/2 .. -PI/2)
            // But texture is usually Equirectangular: Top is 90N, Bottom is 90S.
            const lat = (1 - y / offCanvas.height) * Math.PI - Math.PI / 2;

            for (let x = 0; x < offCanvas.width; x++) {
                const i = (y * offCanvas.width + x) * 4;
                const brightness = imgData[i]; // R channel

                // If pixel is bright (Land), add a dot
                if (brightness > 100) {
                    // Map X (0..width) to Longitude (0 .. 2*PI)
                    const lon = (x / offCanvas.width) * Math.PI * 2;

                    // Convert Spherical to Cartesian
                    // x = r * cos(lat) * cos(lon)
                    // y = r * sin(lat)
                    // z = r * cos(lat) * sin(lon)
                    // (Adjusted for our coordinate system)

                    dots.push({
                        x: GLOBE_RADIUS * Math.cos(lat) * Math.cos(lon),
                        y: GLOBE_RADIUS * Math.sin(lat), // Y is Up/Down
                        z: GLOBE_RADIUS * Math.cos(lat) * Math.sin(lon)
                    });
                }
            }
        }

        // Random "Atmosphere" dots for volume
        for (let i = 0; i < 200; i++) {
            const phi = Math.acos(-1 + (2 * i) / 200);
            const theta = Math.sqrt(200 * Math.PI) * phi;
            // Slightly larger radius for atmosphere
            const r = GLOBE_RADIUS * 1.05;

            // Keep these separate or mark them?
            // For now just add few random ones for style if needed, or skip for cleaner look.
            // Skipping to keep it strictly "World Map".
        }

        animate();
    };

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const centerX = width / 2;
        const centerY = height / 2;

        rotation += ROTATION_SPEED;

        // Sort dots by Z-depth so front dots draw on top
        const projectedDots = dots.map(dot => {
            // Rotate around Y axis (which is vertical here)
            // But wait, in our generation:
            // y is sin(lat) -> Up/Down. So we rotate around Y-axis.

            const x = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
            const z = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);
            const y = dot.y;

            // Simple perspective projection
            const scale = 350 / (350 - z); // Camera is at +z? No, usually -z or dots at z
            // Let's assume standard view. If z is positive (front), scale > 1?
            // Let's use generic: scale = d / (d + z) or similar.
            // If we generated z with sin(lon), it ranges -R to +R.

            // Let's standardise:
            // Viewer is at z = -Distance.
            // Point is at z.
            // scale = Distance / (Distance + z)
            const scaleFactor = 400 / (400 - z);

            const px = x * scaleFactor + centerX;
            const py = y * scaleFactor + centerY;

            return { x: px, y: py, z: z, scale: scaleFactor };
        }).sort((a, b) => b.z - a.z); // Draw back to front (depending on coordinate system)

        // Actually, if z positive is "back", we sort by z descending (far to near)?
        // Or if z positive is "front", we sort ascending.
        // Let's try drawing and see. Standard: Z+ is usually towards viewer in OpenGL, but here typical math:
        // x=cos*sin is a circle.
        // Let's just sort by z. If artifacts, flip.

        projectedDots.forEach(p => {
            // Visibility check: only draw front-facing dots?
            // Hemisphere check: if z > 0 (or < 0 depending on rotation).
            // But with dots, we want transparency.

            // Fading back dots
            const alpha = Math.max(0.1, (p.z + GLOBE_RADIUS) / (2 * GLOBE_RADIUS));
            // If z is "front" (say +R), alpha is 1. If z is back (-R), alpha is 0.

            // Let's tune alpha logic:
            // If z is high (towards camera), alpha high.
            // My rotation logic: z = x*sin + z*cos.

            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.arc(p.x, p.y, DOT_RADIUS * p.scale, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
}

// Export initialization if running in a module system, else attach global
if (typeof window !== 'undefined') {
    window.initGlobe = initGlobe;
}
