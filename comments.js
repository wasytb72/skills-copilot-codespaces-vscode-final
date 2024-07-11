// Create a web server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}...`);
});

// Run the server with node comments.js
// Access the server at http://localhost:3000
// The server will respond with "Hello from Express!" in the browser
// You can also access the server using curl or Postman
// curl http://localhost:3000
// You can stop the server by pressing Ctrl + C in the terminal