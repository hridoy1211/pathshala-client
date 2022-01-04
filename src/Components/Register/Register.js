import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import login from '../../img/login.jpg'
import useAuth from '../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const {user, registerUser, isLoading, error}= useAuth();
    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

    const handleOnSubmit = e =>{
      if(loginData.password !== loginData.password2){
        alert('Your password did not match');
        return;
      }
      registerUser(loginData.email, loginData.password)
      e.preventDefault();
    }

      if(isLoading){
        return <div className="d-flex justify-content-center" style={{marginTop: '100px'}}>
        <div className="spinner-grow text-warning" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
      }
    
    return (
        <div className='container'> 
           <div className="row d-flex justify-content-center align-items-center">
             <div className="col-md-6 col-12">
                <h2>Please Register</h2> 
                <form onSubmit={handleOnSubmit}>  
                <input
                  className="input-field mt-2 w-50"
                  name="email"
                  placeholder="Email Here"
                  type="email"
                  onChange={handleOnChange}
                />
              
                <br />
                <input
                  className="input-field mt-2 w-50"
                  name="password"
                  type="password"
                  placeholder="Password Here"
                  onChange={handleOnChange}
                />
                <br />

                <input
                  className="input-field mt-2 w-50"
                  name="password2"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleOnChange}
                />
                <br />
                
                <input
                  className="submit-btn btn btn-danger mt-3 w-50"
                  type="submit"
                  value="Register"
                />
              </form> 
              {
                error && <p className='text-danger fw-bolder' >{error}</p>
              }
              <br />
              <p>Already Registerd? <Link style={{textDecoration:"none"}} to="/login">Please Login</Link></p>
              
             </div>

             <div className="col-md-6 col-12">
              <img src={login} className='img-fluid' alt="" />
             </div>
           </div>
        </div>
    );
};

export default Register;