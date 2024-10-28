const express = require('express');
const mysql = require('mysql2');

const cors = require('cors'); // Import the cors package


const app = express();

// Use CORS middleware
app.use(cors());
const port = 3000; // You can change this port

// Create a connection to your MySQL database
const connection = mysql.createConnection({
  host: 'sql8.freesqldatabase.com',   // Replace with your MySQL host
  user: 'sql8734902',        // Replace with your MySQL username
  password: 'e71Qjcw81X',    // Replace with your MySQL password
  database: 'sql8734902'// Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database.');
});

// API or Rest API
app.get('/celebritie', (req, res) => {

  const query = 'SELECT * FROM celebrities';   // get Data from db
  
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query error' });
      return;
    }
    res.json(results); //  response--->Send the celebrities data from the frontend (client) HTML.
  });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});
