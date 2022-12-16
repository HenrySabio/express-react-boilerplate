const express = require("express");
const app = express();
const port = 5001;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/api/*", (req, res) => {
  res.send("Hello World!");
  console.log('Log from server.js');
});
