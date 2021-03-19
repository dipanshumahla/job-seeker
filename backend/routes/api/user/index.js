const express = require('express');
const router = express.Router();

const authentication = require('../../../controllers/user/authentication'); 
const profile = require('../../../controllers/user/profile'); 
const uploader = require('../../../controllers/user/uploader'); 

router.get('/',(req,res)=>{
    res.send('This is default User API route for Job seeker app.');
});

router.post('/info', profile.getInfo);

router.post('/login', authentication.login);
router.post('/register', authentication.register);

router.post('/edit', profile.edit);
router.post('/delete', profile.deleteProfile);

router.post('/upload',uploader.uploadCV);

module.exports = router;