const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory database
let users = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (like your HTML)
app.use(express.static('public'));

// Handle POST request
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    
    // Save to in-memory database
    users.push({ name, email });
    
    console.log('Received form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Current users:', users);

    res.json({ message: 'Form submitted successfully' });
});

// Optional: GET route to retrieve all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});