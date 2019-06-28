import React, {Component} from 'react';
import UIkit from 'uikit';

// services 
import {ShowProducts, createProduct, editProduct, deleteProduct} from '../../services/product';

// components
import ProductForm from '../product/ProductForm';
import ProductComponentContainer from './ProductComponentContainer';

class AdminProduct extends Component {
  
  state = {
    products: [],
    categories: [],
    data:{}
  }

//   componentWillMount(){
//     if(!this.props.user._id){
//       this.props.history.push("/login");
//     }
//   }

  componentDidMount() {
    let products = JSON.parse(localStorage.getItem('products'))
    let categories = JSON.parse(localStorage.getItem('category'))
    this.setState({ categories })
    this.setState({ products })
    console.log('product y cat',products, categories)
    
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
    this.onCreateProduct()
  }

  onEditProduct = (index) => {
    let {products, data} = this.state;
    editProduct(data)
      .then(product => {
        console.log(product);
        products.splice(index, 1, product);
        product = {};
        this.setState({products, product, error: undefined});
      })
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  onCreateProduct = () => {
    let { products, data } = this.state;
    console.log('data',data)
    createProduct(data)
    .then(product => {
      console.log('quee',product);
      products.unshift(product);
      data = {};
      this.setState({products, data, error: undefined});
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }

  deleteProduct = id => {
    let {products} = this.state;
    deleteProduct(id)
      .then(product => {
      

      UIkit.notification({
        message: `<span uk-icon="icon:check"></span> ${products.name} eliminado con exito`,
        status: "success",
        pos: "top-right"
      })

      products = products.filter(products => products._id !== id);
      this.setState({products});
console.log("para delete",products._id)
    })
  }

  render(){
    const { product, error, categories } = this.state;
    const id = this.state.products._id;
    
    console.log("categorias", categories)
    console.log("qwunsab", this.state.products)
    console.log("id", id)
    return (
      <div className="">
        <h1>Productos</h1>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2" uk-grid="true">
            <div>
              <ProductForm
                  {...product}
                  category={categories}
                error={error}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange} 
              />
            </div>
            <div>
            <table className="uk-table uk-table-justify uk-table-divider">
              <thead className="thead-dark">
                <tr>
                  <th className="uk-text-middle">Foto</th>
                  <th className="uk-text-middle">Nombre</th>
                  <th className="uk-text-middle">Accion</th>
                </tr>
              </thead>
              <tbody>
                    {this.state.products.map((product, i) => {
                  return  (
                      <tr key={i}>
                        <td className="uk-text-middle"><img src={product.images} width="80px" alt=""/></td>
                        <td className="uk-text-middle">{product.name}</td>
                        <td className="uk-text-middle"><button className="uk-button uk-button-danger" onClick={()=>{this.deleteProduct(product._id)}}>Eliminar</button></td>
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

export default AdminProduct;

