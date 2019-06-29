import React, {Component} from 'react';
import UIkit from 'uikit';
import moment from 'moment'
// services 
import {ShowPedidos, createPedido, editPedido, deletePedido} from '../../services/pedido';

// components
import PedidoForm from './PedidoForm';

class PedidosComponent extends Component {
  
  state = {
    products: [],
    pedidos: [],
    email: '',
    date:'',
    data: {
        _id: '',
        quantity:''
    }, 
    selectProduct:0
  }

//   componentWillMount(){
//     if(!this.props.user._id){
//       this.props.history.push("/login");
//     }
//   }

  componentDidMount() {
      let products = JSON.parse(localStorage.getItem('products'))
      this.setState({ products })  
  }

  setTodo = product => {
    this.setState({product});
  }

  handleChange = (e, values) => {
    const {data,products} = this.state;
    const field = e.target.name;
    if (field === "_id") {
      
    let id  =e.target.value
      data[field] = products[id];
   
      this.setState({selectProduct:e.target.value,data})
    }
    if (field === "email") {
      this.setState({ email:e.target.value });
    }
    if (field === "quantity") {
      data[field] = e.target.value;
      this.setState({ data });
    }



  }
  handleChangeDate = e=> {
    const { data } = this.state;
    let newDate = moment(e).format('DD/MMMM/YYYY')
  
    this.setState({ date:newDate });
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

  addItems = (e) => {
    e.preventDefault()
    let { data, pedidos,arrPro } = this.state
    pedidos.push(data)
    this.setState({ pedidos, data: {},selectProduct:0 })
  }
  
  submit = () => {
    let { data, selectProduct, products } = this.state


  }

  onEditPedido = (index) => {
    let {pedidos, data} = this.state;
    editPedido(data)
      .then(pedido => {
        pedidos.splice(index, 1, pedidos);
        pedidos = {};
        this.setState({pedidos, pedido, error: undefined});
      })
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  onCreatePedido = () => {
    let { pedidos,email,date } = this.state;
    let newObj = {
      email: email,
      item:pedidos,
      date:date
    }

    createPedido(newObj)
    .then(pedido => {
      console.log('quee',pedido);
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

    })
  }

  render(){
    const { products, pedidos, error, data, selectProduct} = this.state;

    return (
      <div className="">
       <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2" uk-grid="true">
            <div>
                <PedidoForm
                  {...data}
                  {...selectProduct}
                  addItems={this.addItems}
                products={products}
                error={error}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                  handleChangeDate={this.handleChangeDate}  
              />
            </div>
              <div>
                <h1>Aqui se vera el pedido</h1>

                <table className="uk-table uk-table-justify uk-table-divider">
              <thead className="thead-dark">
                <tr>
                  <th className="uk-text-middle">Foto</th>
                  <th className="uk-text-middle">Nombre</th>
                  <th className="uk-text-middle">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                    {this.state.pedidos.map((pedido, i) => {
                  return  (
                      <tr key={i}>
                        <td className="uk-text-middle"><img src={pedido._id.images} width="80px" alt=""/></td>
                        <td className="uk-text-middle">{pedido._id.name}</td>
                        <td className="uk-text-middle">{pedido.quantity}</td>
                      </tr>
                  )
                  })
                }
              </tbody>
            </table>

              </div>
            </div>
          </div>
        </div>
        
      </div>
     
    );
  }
}

export default PedidosComponent;

