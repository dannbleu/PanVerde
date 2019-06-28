import React, {Component} from 'react';
import UIkit from 'uikit';

// services 
import {ShowPedidos, createPedido, editPedido, deletePedido} from '../../services/pedido';

// components
import PedidoForm from './PedidoForm';

class PedidosComponent extends Component {
  
  state = {
    products: [],
    pedidos: [],
    data:{}
  }

//   componentWillMount(){
//     if(!this.props.user._id){
//       this.props.history.push("/login");
//     }
//   }

  componentDidMount() {
      let products = JSON.parse(localStorage.getItem('products'))
      this.setState({ products })
      
    console.log('product y cat',products)
    
  }

  setTodo = product => {
    this.setState({product});
  }

  handleChange = e => {
    const {data} = this.state;
    const field = e.target.name;
    data[field] = e.target.value;
    this.setState({data});
  }

  handleSubmit = e => {
    e.preventDefault();
    //Arreglar validacion porque el un obj lo que se manda en el create product
    const {product, data} = this.state;
    // if(!product.length) return this.setState({error: "Debes agregar un producto"})
    // const index = product.findIndex(p => p._id === product._id);
    // product._id ? this.onEditProduct(index) : this.onCreateProduct();
    this.onCreatePedido()
  }

  onEditPedido = (index) => {
    let {pedidos, data} = this.state;
    editPedido(data)
      .then(pedido => {
        console.log(pedido);
        pedidos.splice(index, 1, pedidos);
        pedidos = {};
        this.setState({pedidos, pedido, error: undefined});
      })
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  onCreatePedido = () => {
    let { pedidos, data } = this.state;
    console.log('data',data)
    createPedido(data)
    .then(pedido => {
      console.log('quee',pedido);
      pedidos.unshift(pedido);
      data = {};
      this.setState({pedidos, data, error: undefined});
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }

  deletePedido = id => {
    let {pedidos} = this.state;
    deletePedido(id)
      .then(pedido => {
      

      UIkit.notification({
        message: `<span uk-icon="icon:check"></span> ${pedidos.name} eliminado con exito`,
        status: "success",
        pos: "top-right"
      })

      pedidos = pedidos.filter(pedidos => pedidos._id !== id);
      this.setState({pedidos});
console.log("para delete",pedidos._id)
    })
  }

  render(){
    const { pedido, error, categories } = this.state;
    const id = this.state.pedidos._id;
    console.log("qwunsab", this.state.products)
    console.log("id", id)
    return (
      <div className="">
        <h1>Pedidos</h1>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2" uk-grid="true">
            <div>
              <PedidoForm
                  {...pedido}
                error={error}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange} 
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PedidosComponent;

