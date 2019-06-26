import React, { Component } from "react";
import Router from "./Router";
import NavBar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { ShowCategory } from "./services/category";
import { ShowProducts } from "./services/product";

class App extends Component {
  state = {
    user: {},
    category: [],
    product: [],
  };

  setUser = user => {
    this.setState({ user });
  };

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.setState({ user });
    }
    this.getAllMyData()

  }

  getAllMyData=()=>{
    ShowCategory()
      .then(category => localStorage.setItem('category', JSON.stringify(category.category)))
        .catch(err => err)
    ShowProducts()
      .then(product => localStorage.setItem('products', JSON.stringify(product.products)))
        .catch(err => err)      
      // 
  }

  render() {
    const { user } = this.state;
    let {setUser} = this
    return (
      <div className="App">
        <NavBar {...user} />

        <div className="uk-section uk-padding-remove">
          <Router setUser={setUser}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;