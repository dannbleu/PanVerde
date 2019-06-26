import axios from 'axios';

const isProduction = process.env.NODE_ENV === "production"
const base_url = isProduction ? "url_de_heroku" : "http://localhost:3000/api";

export const CreateCategory = category => {
    return axios.post(`${base_url}/category/create`, category)
    .then(res => res.data)
    .catch(error => {
        throw error.response.data
    })
}

export const ShowCategory = () => {
    return axios.get(`${base_url}/category/getAll`)
        .then(res => res.data)
        .catch(error => {
        throw error.response.data
    })
}

export const ModifyCategory = category => {
    return axios.patch(`${base_url}/category/Modify`, category)
        .then(res => res.data)
        .catch(error => {
        throw error.response.data
    })
}