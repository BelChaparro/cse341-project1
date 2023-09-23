const express = require('express');
const mongodb = require('./db/connect');
const app = express();

const port = process.env.PORT || 3000;

// When / go to ./routes/index.js
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});
    }
});

