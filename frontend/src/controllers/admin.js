import axios from 'axios';

const getUsersList = async ()=>{
    const response = await axios('http://localhost:3001/api/admin/list');
    
    return response.data;
}

const deleteUser = async (email)=>{
    const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/api/user/delete',
        headers:{
            'Content-Type': 'application/json'
        },
        data: {
            email: email
          }
      });
    
    return response.data;
}

const exports = {getUsersList,deleteUser}

export default exports;