import React, { Component } from 'react';
import "../../App.css";


class Footer extends Component {
    state = {  }
    render() {
        return (
            <div style={{backgroundColor:"#A5CE39"}}>
                <footer className="site-footer">
                    <div className="container uk-remove-margin-bottom">
                        <div className="uk-grid-divider uk-child-width-expand@s" uk-grid="true">
                            <div>
                                <h6 style={{ padding: "0 40px" }}>About</h6>
                                <p style={{padding: "0 40px"}}className="uk-text-justify uk-padding-remove-top">Una <strong>panadería artesanal</strong> que, desde hace 10 años, utiliza los <strong>mejores ingredientes </strong> 
                                 del mercado sin químicos ni conservadores, para elaborar productos de <strong>gran calidad</strong> a precios <strong>accesibles</strong> para todos.</p>
                            </div>
                            <div>
                                <h6>Categories</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/category/c-language/">Panaderia</a></li>
                                    <li><a href="http://scanfcode.com/category/front-end-development/">Barra de cafe</a></li>
                                    <li><a href="http://scanfcode.com/category/back-end-development/">Snack Bar</a></li>
                                    <li><a href="http://scanfcode.com/category/java-programming-language/">Exposiciones</a></li>
                                </ul>
                            </div>

                            <div>
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                    <li><a href="/menu">MENU</a></li>
                                </ul>
                            </div>
                        </div>
                            <hr style={{backgroundColor:"#A5CE39"}}></hr>
                    </div>
                    <div className="container" style={{backgroundColor:"#A5CE39"}}>
                        <div className="uk-padding-small uk-margin-remove uk-padding-remove-top uk-padding-remove-bottom uk-child-width-expand@s" uk-grid="true">
                            <div className="uk-text-left">
                                <p className="copyright-text">Ciudad de Mexico, 2019</p>
                            </div>

                            <div>
                                <ul className="social-icons">
                                    <li className="uk-align-center" style={{"zIndex":"1234"}}><span className="uk-icon-link uk-padding-small" uk-icon="reciever"></span>55-35-61-26-55</li>
                                    <li><a className="facebook" href="https://www.facebook.com/PanVerdeOficial/"><i className="fa fa-facebook"></i></a></li>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>                
            </div>
        );
    }
}

export default Footer;