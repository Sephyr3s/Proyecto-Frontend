import axios from './http-config'
function authHeader(){
    const userToken = JSON.parse(localStorage.getItem("user"));
    if(userToken && userToken.access_token){
        return {
                Authorization:"Bearer"+userToken.access_token
        }
    }else{
        return {}
    }
}
export const getAll = () => {
    return axios.get("/places/", {headers:authHeader()});
}

export const get = (id) => {
    return axios.get(`/places/${id}`,id);
}

export const create = (placeData) => {
    return axios.post("/places/", placeData);
}

export const update = (id, placeData) => {
    return axios.put(`/places/${id}`, placeData);
}

export const remove = (id) => {
    return axios.delete(`/places/${id}`);    
}
