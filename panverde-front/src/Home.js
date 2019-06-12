import React, { Component } from "react";
import Router from "./Router";
import NavBar from "./components/common/Navbar";
import { Link } from 'react-router-dom';

class Home extends Component{
    render() {
        return (
            <div>
                <h1>
                    Esta sera la pagina principal
                    <ul>
                        <Link to="/products"><li>Products</li></Link>
                        <Link to="/category"><li>Category</li></Link>
                        <Link to="/menu"><li>Menu</li></Link>
                        <Link to="/demands"><li>Pedidos</li></Link>
                        <Link to="/expo"><li>Exposiciones</li></Link>
                    </ul>
                </h1>
            </div>
        )
    }
}

export default Home;