const { response } = require('express');
const db = require('../../handlers/db/user/profile');

const edit = (req,res)=>{
    const userId = req.body.userId;

    const userName = req.body.userName;
    const userMail = req.body.userMail;
    const userPassword = req.body.userPassword;

    db.edit({userId, userName, userMail, userPassword}).then(response=>{
            res.json(response);
    }).catch(e=>{
        console.log(e);
        res.json({status:false});
    });
}

const deleteProfile = (req,res)=>{
    const userId = req.body.userId;

    db.deleteProfile(userId).then(response=>{
            res.json(response);
    }).catch(e=>{
        console.log(e);
        res.json({status:false});
    });
}


const getInfo=(req,res)=>{
    console.log(req.body, req.session)
    if(req.body.token != req.session.token) return res.json({status:false});

    db.getInfo(req.session.email).then(response=>{
        res.json(response);
    }).catch(e=>{
        console.log(e);
        res.json({status:false});
    });
}

module.exports = {edit, deleteProfile, getInfo};