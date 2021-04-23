// server/index.js

const path = require("path");
const express = require("express");

const db = require('./models')

const db = require('./models')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json);

// Routers
const postRouter = require("./routes/posts");
app.use("/posts", postRouter)



// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

<<<<<<< HEAD

=======
>>>>>>> ef2a711... More changes for database
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
})

// All other GET requests not handled before will return our React app
//app.get('*', (req, res) => {
//  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//});

<<<<<<< HEAD
=======

>>>>>>> ef2a711... More changes for database



