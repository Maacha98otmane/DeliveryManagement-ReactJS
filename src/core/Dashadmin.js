import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import { API_URL } from '../config';
import { isAuth } from '../helpers/authhelpers';
import toastr from 'toastr'
import "toastr/build/toastr.css"

const isActive = (history,path) =>{
  if(history.location.pathname === path){
      return{color:'blue'}
  }else{

  }

}
const Dashadmin = (props) => {

  const signout =( )=>{
    fetch(`${API_URL}/admin/logout`)
    .then(()=>{
      toastr.info('User Logout ','See You Next Time',{positionClass:"toastr-bottom-left"})
    })
    localStorage.removeItem('token-info')
    props.history.push('/admin/login')
    .catch()
  }

  return (
  <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link style={isActive(props.history,'/')} className="navbar-brand" to="#">DashAdmin</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {isAuth() && (
        <li className="nav-item">
        <Link style={isActive(props.history,'/admin/home')} className="nav-link " to="/admin/home">Home</Link>
      </li>
        
      )}
      {isAuth() && (
        <li className="nav-item">
        <Link style={isActive(props.history,'/admin/create')} className="nav-link" to="/admin/create">Manager</Link>
      </li>
        
      )}
        
      </ul>
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        
        { !isAuth() && (
          <li className="nav-item">
          <Link style={isActive(props.history,'/admin/login')} className="nav-link " to="/admin/login">Login</Link>
        </li>
        )}
        { isAuth() && (
          <li className="nav-item">
          <span  className="nav-link" style={{cursor:'pointer'}} onClick={signout}>LogOut</span>
        </li>
        )}
        
      </ul>
    </div>
  </div>
</nav>
  </div>
    );
}

export default withRouter (Dashadmin);
