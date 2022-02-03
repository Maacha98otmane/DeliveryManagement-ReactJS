import React,{component} from 'react';
import { Route,Redirect } from 'react-router-dom';
import { isAuth } from './authhelpers';
const PrivateRoute =({component: component,...rest})=> (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <component {...props}/>
            ):(
                <Redirect
                    to={{
                        pathname:"/admin/login"
                    }}
                />
            )
        }
    />
)

export default PrivateRoute;
