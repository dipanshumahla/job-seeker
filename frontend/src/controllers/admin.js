import axios from 'axios';

const getUsersList = async ()=>{
    const response = await axios('http://localhost:3001/api/admin/list');
    
    return response.data;
}

const exports = {getUsersList}

export default exports;