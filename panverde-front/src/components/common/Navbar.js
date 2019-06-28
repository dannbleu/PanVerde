import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const NavBar = () => (
    <nav className="uk-navbar-container" uk-navbar="true" style={{height:"220px"}}>
        <div className="uk-container uk-position-top">

            <a className="uk-navbar-item uk-logo" href="/">
                <img style={{height:"200px"}} src="https://res.cloudinary.com/dannbleu/image/upload/v1561576118/pan-verde-img/logo.png" alt="logo"></img>
            </a>

        </div>

        <div className="uk-container uk-position-bottom uk-padding-remove uk-margin-small barra-nav">

            <ul className="uk-navbar-nav uk-position-center ">
                <li><Link to="/product">productos</Link></li>
                <li><Link to="/pedidos">Pedidos</Link></li>
                <li><Link to="/expo">Exposiciones</Link></li>
                <li><Link to="/sucursales">Sucursales</Link></li>
            </ul>
        </div>

    </nav>
)

export default NavBar; 