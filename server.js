// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port
const port = 9000;

// Define a simple route for the homepage
app.get('/api/get', (req, res) => {
  res.send({message: 'Deployment of applictaion using GITHUB Actions'});
});



// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
