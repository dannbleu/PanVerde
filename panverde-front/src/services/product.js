import axios from 'axios';

const isProduction = process.env.NODE_ENV === "production"
const base_url = isProduction ? "url_de_heroku" : "http://localhost:3000/api";

export const ShowProducts = () => {

    return axios.get(`${base_url}/product/getAll`)
        .then(res => res.data)
        .catch(err => {
            console.log("error", err)
        })
    }

        