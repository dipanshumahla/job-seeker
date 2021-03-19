const User = require('../models/user');
const mongoose = require('mongoose');

const getInfo = async (email)=>{
    const response = {
        status: false
    }
    console.log(email,'hello')
    const result = await User.findOne({'email':email});
    
    if(!result) return response;
    response.status = true;
    response.data = result;
    return response;   
}

const edit = async ({userId, userName, userMail})=>{
    const response = {
        status:false
    }
    
    const result = await User.findByIdAndUpdate(userId,{"name": userName, "email": userMail});

    if(!result) return response;
    response.status = true;
    return response;
}

const deleteProfile = async (email)=>{
    const response = {
        status:false
    }

    const result = await User.findOneAndDelete({email:email});

    if(!result) return response;
    response.status = true;
    return response;
}

module.exports = {edit, deleteProfile, getInfo};