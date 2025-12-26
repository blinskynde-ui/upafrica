const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;
const WAITLIST_FILE = path.join(__dirname, 'waitlist.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Initialize persistence
if (!fs.existsSync(WAITLIST_FILE)) {
    fs.writeFileSync(WAITLIST_FILE, '[]');
}

// --- API Endpoints ---

// 3. Join Waitlist
app.post('/api/join', (req, res) => {
    try {
        const { email } = req.body;

        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        let list = [];
        try {
            if (fs.existsSync(WAITLIST_FILE)) {
                const fileContent = fs.readFileSync(WAITLIST_FILE, 'utf8');
                list = JSON.parse(fileContent);
            }
        } catch (err) {
            console.error("Error reading waitlist:", err);
            // If the file is corrupted, we log it and return error
            // Alternatively, we could reset the file, but that might lose data.
            // Safer to just error out.
            return res.status(500).json({ error: 'Internal server error: Database corruption' });
        }

        if (!Array.isArray(list)) {
             // If valid JSON but not array, treat as empty or error?
             // Treat as empty but log warning
             console.warn("Waitlist file is not an array, resetting in memory.");
             list = [];
        }

        if (list.includes(email)) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        list.push(email);
        fs.writeFileSync(WAITLIST_FILE, JSON.stringify(list, null, 2));

        // Simulate network delay
        setTimeout(() => {
            res.json({ success: true, message: "You're on the list! We'll be in touch." });
        }, 1000);

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Unifrix Server running on http://localhost:${PORT}`);
});
