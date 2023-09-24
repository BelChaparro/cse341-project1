const express = require("express");
const mongodb = require("./db/connect");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

// When / go to ./routes/index.js
app.use("/", require("./routes"));

// Body-parser:
app.use(bodyParser.json);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  }
});
