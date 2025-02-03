const express = require("express");
require("dotenv").config(); 
const connectDB = require("./config/db");
const applyMiddleware = require("./middleware");

const app = express();

// Apply middleware
applyMiddleware(app);

// Use routes
// app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server lmao");
});

// Connect to database and start server
connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
