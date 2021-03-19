import axios from 'axios';

const login = async ({email, password})=>{

      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/api/user/login',
        headers:{
            'Content-Type': 'application/json'
        },
        data: {
            userMail: email,
            userPassword: password
          }
      });

      
    return response.data;
}

const register = async ({name, email, password})=>{

    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/api/user/register',
      headers:{
          'Content-Type': 'application/json'
      },
      data: {
          userName: name,
          userMail: email,
          userPassword: password
        }
    })
  
  return response.data;
}

const uploadCV = async (file)=>{
  const formData = new FormData();
    
      formData.append(
        "cvFile",
        file,
        file.name
      );
        console.log(file);
    
        const response = await axios.post("http://localhost:3001/api/user/upload", formData);
      return response.data;
}

const getInfo = async (token)=>{
  const response = await axios({
    method: 'post',
    url: 'http://localhost:3001/api/user/info',
    headers:{
        'Content-Type': 'application/json'
    },
    data: {
        token: token
      }
  });

return response.data;
}

const exports = {login,register,uploadCV, getInfo}

export default exports;