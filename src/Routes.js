import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import LoginAdmin from './components/admin/login'
import CreateManager from './components/admin/createManager'
import Dashadmin from './core/Dashadmin';
import Home from './core/Home';
import PrivateRoute from './helpers/PrivateRoute';
function Routes() {
 
  return (
      <BrowserRouter>   
      <Dashadmin />
        <Switch>
            <Route exact path="/admin/login"  component={LoginAdmin}/>
            <PrivateRoute exact path="/admin/home"  component={Home}/>
            <PrivateRoute exact path="/admin/create"  component={CreateManager}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;
 