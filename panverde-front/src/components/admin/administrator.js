import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Administrator extends Component {
    state = { 
        user: []
    }
    
    componentWillMount() {
        let user = JSON.parse(localStorage.getItem('USER'))
        console.log('adminnnnn',user)
        if (user && user['role'] === 'admin') {
            
        } else {
            this.props.history.push('/login')
        }
    }
    render(user) {
        return (
            <div>
                <ul>
                    <li><Link to="/adminProduct" >Productos</Link></li>
                    <li><Link to="/adminCategory" >Categorias</Link></li>
                    <li><Link to="/adminSucursal" >Sucursales</Link></li>
                    <li><Link to="/adminHome" >Componentes home</Link></li>
                    <li><Link to="/adminUsers" >Usuarios</Link></li>
                </ul>
            </div>
        );
    }
}

export default Administrator;