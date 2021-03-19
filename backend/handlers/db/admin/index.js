const User = require('../models/user');

const list = async ()=>{
    const response = {
        status:false
    }
    
    const result = await User.find();

    if(!result) return response;
    response.status = true;
    response.data = result;
    return response;
}

module.exports = {list};