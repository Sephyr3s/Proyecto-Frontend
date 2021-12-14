import axios from './http-config'

export const getAll = () => {
    return axios.get("/places/");
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
