// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3002;
const cors = require('cors'); // middleware cors
const mysql = require('mysql');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Handle SIGINT signals
process.on('SIGINT', () => {
  console.log('\nClosing the server...');
  // Close the database connection
  connection.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    // Close the Express server
    process.exit();
  });
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Successfully connected to the database');
  }
});


app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

app.post('/api/submit', (req, res) => {
  const formData = req.body;
  console.log('Data received on the backend:', formData);

  // Check if the email already exists in the database
  const query = 'SELECT * FROM Users WHERE email = ?';
  connection.query(query, [formData.email], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      if (results.length > 0) {
        // The email already exists, send existing user message
        res.json({ message: 'User already exists' });
      } else {
        // The email does not exist, save to the database
        const insertQuery = 'INSERT INTO Users (company_name, email) VALUES (?, ?)';
        connection.query(insertQuery, [formData.company_name, formData.email], (insertErr) => {
          if (insertErr) {
            console.error('Error inserting into database:', insertErr);
            res.status(500).json({ error: 'Internal server error' });
          } else {
            res.json({ message: 'User registered successfully' });
          }
        });
      }
    }
  });
});
