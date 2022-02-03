import React,{useState} from 'react';
import {API_URL} from '../../config'
import toastr from 'toastr'
import "toastr/build/toastr.css"

const createManager = (props) => {
    const [manager,setManager]= useState({
        username:'',
        email:'',
        password:''
    })
    const handleChange = e =>{
        setManager({...manager,[e.target.id]:e.target.value})
    }
    const submitCreation = e =>{
        e.preventDefault();
        fetch(`${API_URL}admin/createManager`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(manager)
        })
        .then(res =>res.json())
        .then(res => {
            if(res.error){
                toastr.warning(res.error,'Check Your Form !!',{positionClass:"toastr-bottom-left"})
            }else{
               toastr.success('Manager Created ','New Account',{positionClass:"toastr-bottom-left"})
            props.history.push('/admin/home') 
            }
            
        })
        .catch(err =>toastr.error(err,'Server Error',{positionClass:"toastr-bottom-left"})
        )
    }
    const form = ()=>(
 <form onSubmit={submitCreation}>
                <h3>Create Manager</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input onChange={handleChange} type="text" name='username' id='username' className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={handleChange} type="email" name='email' id='email' className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleChange} type="password" name='password' id="password" className="form-control" placeholder="Enter password" />
                </div>

                <button className="btn btn-primary btn-block">Create</button>
                {JSON.stringify(manager)}
            </form>
       
    )
  return (
    <div className="row">
        <div className="col-md-6 mx-auto mt-5">
                      {form()}
        </div>
    </div>
  );
}

export default createManager;
