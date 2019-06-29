import axios from 'axios';

const isProduction = process.env.NODE_ENV === "production"
const base_url = isProduction ? "https://panverdeoficial.herokuapp.com/api" : "http://localhost:3000/api";

export const ShowPedidos = () => {
    return axios.get(`${base_url}/pedido/getAll`)
        .then(res => res.data)
        .catch(err => err)
    }
export const createPedido = pedido => {
    console.log("los pedidos", pedido)
    return axios.post(`${base_url}/pedido/create`, pedido)
    .then(res => res.data)
    .catch(err => err);
};

export const deletePedido = id => {
    return axios.delete(`${base_url}/pedido/${id}/delete`)
    .then(res => res.data.pedido)
    .catch(err => err)
}

export const editPedido = pedido => {
    return axios.patch(`${base_url}/pedido/${pedido._id}/edit`, pedido)
    .then(res => res.data.pedido)
    .catch(err => err)
}
        