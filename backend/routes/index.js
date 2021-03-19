const express = require('express');
const router = express.Router();

const api = require('./api');

router.get('/',(req,res)=>{
    res.send('This is default route for Job seeker app.');
});

router.use('/api',api);

module.exports = router;