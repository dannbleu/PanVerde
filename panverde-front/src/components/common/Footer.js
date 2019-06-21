import React, { Component } from 'react';
import "../../App.css";


class Footer extends Component {
    state = {  }
    render() {
        return (
            <div>
                <footer className="site-footer">
                    <div className="container uk-remove-margin-bottom">
                        <div className="uk-grid-divider uk-child-width-expand@s" uk-grid="true">
                            <div>
                                <h6>About</h6>
                                <p className="uk-text-justify uk-padding-large uk-padding-remove-top">Una <strong>panadería artesanal</strong> que, desde hace 10 años, utiliza los <strong>mejores ingredientes </strong> 
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
                                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                            <hr></hr>
                    </div>
                    <div className="container">
                        <div className="uk-padding-large uk-padding-remove-top uk-padding-remove-bottom uk-child-width-expand@s" uk-grid="true">
                            <div className="uk-text-left">
                                <p className="copyright-text">Ciudad de Mexico, 2019</p>
                            </div>

                            <div>
                                <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
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