import React, { Component } from "react";
import Router from "./Router";
// import NavBar from "./components/common/Navbar";
import { Link } from 'react-router-dom';
import Uikit from 'uikit';
import './App.css';


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
                                        <img className="ImagenLanding" style={{ width: "510px"}} src="https://www.kcrw.com/culture/shows/good-food/pasar-el-cafe-nostalgia-sparks-new-twists-on-pan-dulce-classics-in-l-a/@@images/567d5639-88c9-47b5-89b7-87796c3c65a3.jpeg" alt="pan dulce" ></img>
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
                            <div uk-slider="true" >
                                <ul className="uk-slider-items uk-align-center uk-light ">
                                    <li className="uk-transition-toggle " tabIndex="0">
                                        <img className="ImagenLanding" style={{ width: "510px", height: "380px"}} src="https://www.featurepics.com/StockImage/20100515/various-types-bread-stock-image-1539884.jpg" alt="pedidos" ></img>
                                        <div className="uk-position-center uk-padding-remove uk-panel">

                                            <div className="uk-transition-slide-bottom">

                                               <Link to="/pedidos"> Pedidos</Link>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding-remove" style={{ height: "420px" }}>
                            <div uk-slider="true" >
                                <ul className="uk-slider-items uk-align-center uk-dark ">
                                    <li className="uk-transition-toggle " tabIndex="0">
                                        <img className="ImagenLanding" style={{ width: "510px"}} src="https://walker-web.imgix.net/cms/epp2019tftn0214valentine_079_W.jpg?auto=format,compress&w=1920&h=1200&fit=max&dpr=1.5" alt="expo" ></img>
                                        <div className="uk-position-center uk-padding-remove uk-panel">

                                            <div className="uk-transition-slide-bottom">

                                               <Link to="/exposiciones"> Exposiciones</Link>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding-remove" style={{ height: "200px" }}>
                            <div uk-slider="true" >
                                <ul className="uk-slider-items uk-align-center uk-light ">
                                    <li className="uk-transition-toggle " tabIndex="0">
                                        <img className="ImagenLanding" style={{ width: "510px", objectFit: "contain", height: "200px"}} src="https://www.elist10.com/wp-content/uploads/2019/04/Types-of-Bread.jpg" alt="pan salado" ></img>
                                        <div className="uk-position-center uk-padding-remove uk-panel">

                                            <div className="uk-transition-slide-bottom">

                                               <Link to="/panSalado"> Pan Salado</Link>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding-remove" style={{ height: "220px" }}>
                            <div uk-slider="true" >
                                <ul className="uk-slider-items uk-align-center uk-light ">
                                    <li className="uk-transition-toggle " tabIndex="0">
                                        <img className="ImagenLanding" style={{ width: "510px", height: "220px"}} src="https://images.cdn3.stockunlimited.net/preview1300/menu-logo-icon_1710133.jpg" alt="menu" ></img>
                                        <div className="uk-position-center uk-padding-remove uk-panel">

                                            <div className="uk-transition-slide-bottom">

                                               <Link to="/menu"> Menu</Link>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                            
                    </div>
                    <div>

                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding-remove" style={{ height: "180px" }}>
                            <div uk-slider="true" >
                                <ul className="uk-slider-items uk-align-center uk-dark ">
                                    <li className="uk-transition-toggle " tabIndex="0">
                                        <img className="ImagenLanding" style={{ width: "510px", height: "180px"}} src="https://benllyhidalgo.com/wp-content/uploads/gestion-de-redes-sociales.png" alt="admin" ></img>
                                        <div className="uk-position-center uk-padding-remove uk-panel">

                                            <div className="uk-transition-slide-bottom">

                                               <Link to="/admin"> Admin</Link>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div>


                        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-padding-remove" style={{ height: "200px" }}>
                            <div uk-slider="true" >
                                <ul className="uk-slider-items uk-align-center uk-light ">
                                    <li className="uk-transition-toggle " tabIndex="0">
                                        <img className="ImagenLanding" style={{ width: "auto", height: "200px"}} src="http://www.cursosbaristacafe.com.mx/2017/wp-content/uploads/2015/07/cafe-mas-caro.jpg?8aa32b&8aa32b" alt="cafe" ></img>
                                        <div className="uk-position-center uk-padding-remove uk-panel">

                                            <div className="uk-transition-slide-bottom">

                                               <Link to="/cafe">Barra de Cafe </Link>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
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