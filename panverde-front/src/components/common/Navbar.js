import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

const NavBar = () => (
    <nav className="uk-navbar-container" uk-navbar="true" style={{height:"300px"}}>
        <div className="uk-container uk-position-top">

            <a className="uk-navbar-item uk-logo" href="/">
                <img style={{height:"200px"}} src="https://previews.dropbox.com/p/thumb/AAdaD_7m08Sc8YuKy97YmXT0RZlXFApqeKvtc3A7AP3EnxUkdKURFaWyvQXe4_9pQXzt2RIzGQrpZCQPP4QoEOQyRgNcgPa1KeGObiGz8AB4ZSUW-r7q46Q5T0BglKmfVUoD8Ly6ViSb4xgk98awlGlzYKbipaTno-Z596ny_LcphAabSs_fGukQhp1Wx4g0RKC7-9Ge_BYBroXJossO81QhWJuUfyAkbSJoAlclnb_g4hj9rGH_zb57tIcNEfyDvVF47AbBq06GQfTTJRCGsN9K3yyXgOYx7uFbr35mWZV0rHgXl-jH2LFBVYq9nAyXjXQwj7CKD0IlJnr8WUc5LrvP/p.jpeg?size=2048x1536&size_mode=3"></img>
            </a>

        </div>

        <div className="uk-container uk-position-bottom uk-padding-remove uk-margin-small barra-nav">

            <ul className="uk-navbar-nav uk-position-center ">
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/pedidos">Pedidos</Link></li>
                <li><Link to="/expo">Exposiciones</Link></li>
                <li><Link to="/sucursales">Sucursales</Link></li>
            </ul>
        </div>

    </nav>
)

export default NavBar; 