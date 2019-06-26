import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Categoryform from './components/category'
import ProductComponentContainer from './components/product/ProductComponentContainer';
import Login from './components/admin/Login';
import Signup from './components/admin/SignUp';
import menu from './components/menu/menu';
import MapContainer from './components/sucursal/SucursalComponentContainer';
import Administrator from './components/admin/administrator';
import AdminProduct from './components/product/AdminProduct';

const Router = ({setUser, user}) => (
    <Switch>
        <Route exact path="/" render={(props) => <Home user={user} {...props} />} />
    <Route  path="/login" render={(props) => <Login setUser={setUser} user={user} {...props} />} />
        <Route  path="/register" render={(props) => <Signup {...props} setUser={setUser} user={user} />} />
        <Route path="/category" render={(props) => <Categoryform {...props} />} />
        <Route path="/product" component={ProductComponentContainer} />
        <Route path="/menu" component={menu} />
        <Route path='/sucursales' component={MapContainer} />
        <Route path='/admin' component={Administrator} />
        <Route path='/adminProduct' component={AdminProduct}/>
    </Switch>
)

export default Router;