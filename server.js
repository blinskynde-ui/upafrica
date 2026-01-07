const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

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

// Configure Nodemailer
// NOTE: For production, replace these with real SMTP credentials.
// We default to Ethereal (fake SMTP) for demonstration if env vars are missing.
const createTransporter = async () => {
    if (process.env.SMTP_HOST) {
        return nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    } else {
        // Create a test account on Ethereal
        const testAccount = await nodemailer.createTestAccount();
        console.log('Ethereal Email Test Account Created:', testAccount.user);
        return nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
    }
};

let transporterPromise = createTransporter();


// --- API Endpoints ---

// 3. Join Waitlist
app.post('/api/join', async (req, res) => {
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
            return res.status(500).json({ error: 'Internal server error: Database corruption' });
        }

        if (!Array.isArray(list)) {
             console.warn("Waitlist file is not an array, resetting in memory.");
             list = [];
        }

        if (list.includes(email)) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        list.push(email);
        fs.writeFileSync(WAITLIST_FILE, JSON.stringify(list, null, 2));

        // Send Welcome Email
        try {
            const transporter = await transporterPromise;
            const info = await transporter.sendMail({
                from: '"Unifrix Info" <info@unifrix.online>', // sender address
                to: email, // list of receivers
                subject: "Welcome to the Unifrix Revolution", // Subject line
                text: "Thank you for joining the Unifrix waitlist. We are excited to have you on board. We will verify your credentials and get back to you shortly.", // plain text body
                html: "<b>Thank you for joining the Unifrix waitlist.</b><br>We are excited to have you on board. We will verify your credentials and get back to you shortly.", // html body
            });

            console.log("Message sent: %s", info.messageId);
            // If using Ethereal, log the preview URL
            if (nodemailer.getTestMessageUrl(info)) {
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            }

        } catch (emailErr) {
            console.error("Failed to send email:", emailErr);
            // We do NOT fail the request if email fails, but we log it.
        }

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
