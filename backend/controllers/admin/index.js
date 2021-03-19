const db = require('../../handlers/db/admin');

const list = (req,res)=>{

    db.list().then(response=>{
            res.json(response);
    }).catch(e=>{
        console.log(e);
        res.json({status:false});
    });
}

module.exports = {list};