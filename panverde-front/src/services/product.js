import axios from 'axios';

const isProduction = process.env.NODE_ENV === "production"
const base_url = isProduction ? "https://panverdeoficial.herokuapp.com/api" : "http://localhost:3000/api";

export const ShowProducts = () => {
    return axios.get(`${base_url}/product/getAll`)
        .then(res => res.data)
        .catch(err => err)
    }
export const createProduct = product => {
    let formProduct = new FormData();
    if (product.images) {
        for (let images of product.images) {
            formProduct.append('images', images)
        }
        delete product.images
        
    }for (let key in product) {
            formProduct.append(key, product[key])
        }
    
    let config = {
        headers: {
            'Contnent-Tyoe':'multipart/form-data'
        }
    }
    return axios.post(`${base_url}/product/create`,formProduct,config )
    .then(res => res.data)
    .catch(err => err)
};

export const deleteProduct = id => {
    return axios.delete(`${base_url}/product/${id}/delete`)
    .then(res => res.data.product)
    .catch(err => err)
}

export const editProduct = product => {
    return axios.patch(`${base_url}/product/${product._id}/edit`, product)
    .then(res => res.data.product)
    .catch(err => err)
}
        