const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("My Router is working!");
});

module.exports = router;