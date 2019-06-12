
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AuthFormContainer from './components/auth/AuthContainer';
import Categoryform from './components/category'

const Router = ({setUser, user}) => (
    <Switch>
        <Route exact path="/" render={(props) => <Home user={user} {...props} />} />
        <Route exact path="/login" render={(props) => <AuthFormContainer {...props} setUser={setUser} user={user} />} />
        <Route exact path="/register" render={(props) => <AuthFormContainer {...props} setUser={setUser} user={user} />} />
        <Route path="/category" render={(props) => <Categoryform {...props} />} />
    </Switch>
)

export default Router;