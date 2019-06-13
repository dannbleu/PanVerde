import React, { Component } from "react";
import Router from "./Router";
// import NavBar from "./components/common/Navbar";
import { Link } from 'react-router-dom';
import Uikit from 'uikit'

class Home extends Component{
    render() {
        return (
            <div>

                <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-collapse uk-cover-container" uk-grid="masonry: true" style={{height: "100vh - 80px"}}>
                    <div>
                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding-remove" style={{ height: "200px" }}>
                            <div uk-slider="true" >
                                <ul className="uk-slider-items uk-light uk-align-center">
                                    <li className="uk-transition-toggle " tabIndex="0">
                                        <img style={{ width: "510px"}} src="https://www.kcrw.com/culture/shows/good-food/pasar-el-cafe-nostalgia-sparks-new-twists-on-pan-dulce-classics-in-l-a/@@images/567d5639-88c9-47b5-89b7-87796c3c65a3.jpeg" alt="pan dulce" ></img>
                                        <div className="uk-position-center uk-padding-remove uk-panel">

                                            <div className="uk-transition-slide-bottom">

                                               <Link to="/panDulce"> Pan Dulce</Link>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding-remove" style={{ height: "380px" }}>
                            Pedidos
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding" style={{ height: "420px" }}>
                            Exposiciones
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding-remove" style={{ height: "200px" }}>
                            <div uk-slider="true" >
                                <ul className="uk-slider-items uk-light uk-align-center">
                                    <li className="uk-transition-toggle " tabIndex="0">
                                        <img style={{ width: "510px"}} src="https://www.kcrw.com/culture/shows/good-food/pasar-el-cafe-nostalgia-sparks-new-twists-on-pan-dulce-classics-in-l-a/@@images/567d5639-88c9-47b5-89b7-87796c3c65a3.jpeg" alt="pan dulce" ></img>
                                        <div className="uk-position-center uk-padding-remove uk-panel">

                                            <div className="uk-transition-slide-bottom">

                                               <Link to="/panDulce"> Pan Dulce</Link>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding" style={{ height: "220px" }}>
                            Menu
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding" style={{ height: "180px" }}>
                            Admin
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding" style={{ height: "200px" }}>
                            Barra de Cafe
                        </div>
                    </div>
                </div>

                {/* <h1>
                    Esta sera la pagina principal
                    <ul>
                        <Link to="/products"><li>Products</li></Link>
                        <Link to="/category"><li>Category</li></Link>
                        <Link to="/menu"><li>Menu</li></Link>
                        <Link to="/demands"><li>Pedidos</li></Link>
                        <Link to="/expo"><li>Exposiciones</li></Link>
                    </ul>
                </h1> */}
            </div>
        )
    }
}

export default Home;