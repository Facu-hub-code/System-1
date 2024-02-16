const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3002;
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

app.use(bodyParser.json());

// Configuración de CORS
const allowedOrigins = ['http://localhost', 'http://127.0.0.1', 'http://vsq.marveladvisors.com'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.use(cors(corsOptions));

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
    return;
  }
  console.log('Successfully connected to the database');
});


app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

app.listen(PORT, () => {
  console.log(`Express server running on port http://localhost:${PORT}`);
});

app.post('/api/submit', (req, res) => {
  const formData = req.body;
  console.log('Data received on the backend:', formData);

  // Check if the email already exists in the database
  const query = 'SELECT * FROM Users WHERE email = ?';
  connection.query(query, [formData.email], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length > 0) {
      // The email already exists, send existing user message
      return res.status(400).json({ message: 'User already exists' });
    }

    // The email does not exist, save to the database
    const insertQuery = 'INSERT INTO Users (company_name, email) VALUES (?, ?)';
    connection.query(insertQuery, [formData.company_name, formData.email], (insertErr) => {
      if (insertErr) {
        console.error('Error inserting into database:', insertErr);
        return res.status(500).json({ error: 'Internal server error' });
      }

      return res.json({
        message: 'User registered successfully',
        redirectURL: '/confirmation', // Route to which the frontend will be redirected
      });
    });
  });
});

