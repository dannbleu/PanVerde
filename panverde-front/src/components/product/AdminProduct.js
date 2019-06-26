import React, {Component} from 'react';
import UIkit from 'uikit';

// services 
import {ShowProducts, createProduct, editProduct, deleteProduct} from '../../services/product';

// components
import ProductForm from '../product/ProductForm';
import ProductComponent from '../product/ProductComponent';

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
    this.setState({categories})
    console.log('product',products)
    
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
        message: `<span uk-icon="icon:check"></span> ${product._id} eliminado con exito`,
        status: "success",
        pos: "top-right"
      })

      products = products.filter(product => product._id !== id);
      this.setState({products});

    })
  }

  render(){
    const { product, products, error, categories } = this.state;
    console.log(categories)
    return (
      <div className="">
        <h1>Productos</h1>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid-match uk-child-width-1-2" uk-grid="true">
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
              <ProductComponent
                todos={products}
                setTodo={this.setTodo}
                deleteItem={this.deleteItem}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProduct;