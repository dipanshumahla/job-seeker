const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const adminRouter = require('./admin');

router.get('/',(req,res)=>{
    res.send('This is default API route for Job seeker app.');
});

router.use('/user',userRouter);
router.use('/admin',adminRouter);


module.exports = router;