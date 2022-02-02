import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import LoginAdmin from './components/admin/login'
import CreateManager from './components/admin/createManager'
import Menu from './core/Dashadmin';
function Routes(props) {
 
  return (
      <BrowserRouter>   
      {/* <Menu /> */}
        <Switch>
            <Route exact path="/admin/login"  component={LoginAdmin}/>
            <Route exact path="/admin/create"  component={CreateManager}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;
 