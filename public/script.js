document.addEventListener('DOMContentLoaded', () => {
    // --- Existing Functionality ---

    // Cursor Glow Effect
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // Intersection Observer for Reveal Animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.vision-card, .about-text, .about-image, .vision h2');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Dynamic Style for Active State
    const style = document.createElement('style');
    style.innerHTML = `
        .vision-card.active, .about-text.active, .about-image.active, .vision h2.active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- New Features Implementation ---

    // 2. Spinning Globe
    if (window.initGlobe) window.initGlobe();

    // 3. Toggle logic
    document.querySelectorAll('.switch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            // currentPersona removed as it was part of the broken dashboard logic
        });
    });

    // 4. Initialize Waitlist Form
    initForm();
});

function initForm() {
    const form = document.getElementById('waitlist-form');
    const msg = document.querySelector('.form-message');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const emailInput = form.querySelector('input[type="email"]');
            const originalHTML = btn.innerHTML;

            // Loading state
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            try {
                const res = await fetch('/api/join', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailInput.value })
                });

                const data = await res.json();

                if (res.ok) {
                    // Success state
                    btn.innerHTML = '<i class="fas fa-check"></i>';
                    btn.style.background = '#ffffff';
                    btn.style.color = '#000000';
                    msg.classList.remove('error');
                    msg.classList.add('success');
                    msg.innerText = data.message;
                    form.reset();
                } else {
                    throw new Error(data.error || 'Something went wrong');
                }
            } catch (err) {
                btn.innerHTML = '<i class="fas fa-times"></i>';
                btn.style.background = '#888888';
                msg.classList.remove('success');
                msg.classList.add('error');
                msg.innerText = err.message;
            } finally {
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.disabled = false;
                    btn.style.background = ''; // reset
                    btn.style.color = ''; // reset
                }, 3000);
            }
        });
    }
}
