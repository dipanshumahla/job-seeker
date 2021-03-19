const express = require('express');
const router = express.Router();

const details = require('../../../controllers/admin'); 

router.get('/',(req,res)=>{
    res.send('This is default User API route for Job seeker app.');
});

router.get('/list', details.list);

module.exports = router;