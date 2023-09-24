const express = require("express");
const mongodb = require("./db/connect");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

// Body-parser:
app.use(bodyParser.json);
app.use((req, res, next) => {
  res.setHeader("Access-Controll-Allow-Origin", "*");
  res.setHeader("Access-Controll-Allow-Headers",
    "Origin, X-Requested-With, COntent-Type, Accept, Z-Key");
  res.setHeader("Access-Controll-Allow-Mehotds", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// When / go to ./routes/index.js
app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  }
});
