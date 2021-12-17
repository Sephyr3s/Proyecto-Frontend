import axios from "axios";
const http = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT
  });
const login = (username, password)=>{
    return http.post('/login',JSON.stringify(`grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`),{

        "Content-type": "application/x-www-form-urlencoded"
      }).then((response)=>{
      return response.data;
  });
}

const logout =()=>{
    localStorage.removeItem('user');
}

const exportedFunction = {
    login,
    logout
}

export default exportedFunction;