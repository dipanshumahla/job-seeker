const User = require('../models/user');
const saltRounds = 10;
const bcrypt = require('bcrypt');

const login = async (loginDetails)=>{
    const response = {
        status:false
    }

    const user = await User.findOne({email: loginDetails.userMail});
    if(!user) return response;

    const result = bcrypt.compare(loginDetails.userPassword, user.password);

    if(!result) return response;
    response.status = true;
    response.data = user;
    return response;
}

const register = async ({userName, userMail, userPassword}) =>{
    const response = {
        status:true
    }

    const password = await bcrypt.hash(userPassword, saltRounds);

    const user = new User({
        name: userName,
        email: userMail,
        password: password
    });

    user.save();

    return response;
}

module.exports = {login, register};