const db = require('../../handlers/db/user/authentication');

const login = (req,res)=>{
    
    const userMail = req.body.userMail;
    const userPassword = req.body.userPassword;
    
    db.login({userMail, userPassword}).then(response=>{
        if(response.status){

            const token = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

            req.session.email = response.data.email;
            req.session.token = token;
            
            response.token = response.data.email;
        }
        
            res.json(response);
    }).catch(e=>{
        console.log(e);
        res.json({status:false});
    });
}

const register = (req,res) =>{
    const userName = req.body.userName;
    const userMail = req.body.userMail;
    const userPassword = req.body.userPassword;
    
    db.register({userName, userMail, userPassword}).then(response=>{
            res.json({status:response.status});
    }).catch(e=>{
        console.log(e);
        res.json({status:false});
    });
}

module.exports = {login, register};