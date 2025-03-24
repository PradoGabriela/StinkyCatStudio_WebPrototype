var express = require('express');

var router = express.Router();
var bodyParser = require("body-parser") // call body parser module and make use of it
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
var db = require('../db');
const cors = require('cors');
router.use(cors());
const path = require('path');

// Handle contactform submission
router.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
   

    if (!name || !email || !message ) {
         res.status(400).json({ error: 'All fields are required' });
        return;
    }

    const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting message:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'Message saved successfully!' });
        
    });
});
module.exports = router;