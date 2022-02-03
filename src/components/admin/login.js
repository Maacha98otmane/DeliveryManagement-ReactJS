import React,{useState} from 'react';
import {API_URL} from '../../config'
import toastr from 'toastr'
import "toastr/build/toastr.css"

const Login = (props) => {
    const [admin,setAdmin]= useState({
        email:'',
        password:''
    })
    const handleChange = e =>{
        setAdmin({...admin,[e.target.id]:e.target.value})
    }
    const submitLogin = e =>{
        e.preventDefault();
        fetch(`${API_URL}admin/login`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(admin)
        })
        .then(res =>res.json())
        .then(res => {
            if(res.error){
                toastr.warning(res.error,'Check Your Form !!',{positionClass:"toastr-bottom-left"})
            }else{
               toastr.info('Login Success ','Welcome',{positionClass:"toastr-bottom-left"})
                localStorage.setItem('token-info',JSON.stringify(res))
               props.history.push('/admin/create') 
            }
            
        })
        .catch(err =>toastr.error(err,'Server Error',{positionClass:"toastr-bottom-left"})
        )
    }
    const form = ()=>(
 <form onSubmit={submitLogin}>
                <h3>Login Admin</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={handleChange} type="email" name='email' id='email' className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleChange} type="password" name='password' id="password" className="form-control" placeholder="Enter password" />
                </div>
                <button className="btn btn-primary btn-block">Login</button>
            </form>
       
    )
  return (
    <div className='container vh-100'>
    <div className="row">
        <div className="col-md-6 mx-auto mt-5">
                      {form()}
        </div>
    </div>

</div>
  );
}

export default Login;
