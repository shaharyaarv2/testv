const express = require('express');
const router = express.Router();
const members = require('../userModel.js');
// Login page route
router.get('/', (req, res) => {
    res.render('login');
});

// Login form submission
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Login attempt with username:', username);
        const member = await members.findOne({ username, password });
        console.log('member found:', member);
        
        if (member) {
            res.render('credentials', { member });
        } else {
            res.redirect('/?error=true');
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;