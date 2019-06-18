import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Categoryform from './components/category'
import ProductComponentContainer from './components/product/ProductComponentContainer';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';

const Router = ({setUser, user}) => (
    <Switch>
        <Route exact path="/" render={(props) => <Home user={user} {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} setUser={setUser} user={user} />} />
        <Route exact path="/register" render={(props) => <Signup {...props} setUser={setUser} user={user} />} />
        <Route path="/category" render={(props) => <Categoryform {...props} />} />
        <Route path="/product" component={ProductComponentContainer}/> 
    </Switch>
)

export default Router;