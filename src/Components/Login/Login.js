import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import login from '../../img/login.jpg'
import useAuth from '../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({})

    const {user, handleGoogleSignin, handleGithubSignin, isLoading, loginUser}= useAuth()
    
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e =>{
      loginUser(loginData.email, loginData.password)
      e.preventDefault();
    }

      if(isLoading){
        return <div className="d-flex justify-content-center" style={{marginTop: '100px'}}>
        <div className="spinner-grow text-danger" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
      }

    return (
        <div className='container'> 
           <div className="row d-flex justify-content-center align-items-center">
             <div className="col-md-6 col-12">
                <h2>Please Login</h2> 
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
                  className="submit-btn btn btn-danger mt-3 w-50"
                  type="submit"
                  value="Log in"
                />
              </form> 
              <br />
              <p>Are You New User? <Link style={{textDecoration:"none"}} to="/register">Please Register</Link></p>

              <button onClick={handleGoogleSignin} className="btn btn-warning">Google Sign In</button>
              &nbsp; <button onClick={handleGithubSignin} className="btn btn-warning">Github Sign In</button>
             </div>

             <div className="col-md-6 col-12">
              <img src={login} className='img-fluid' alt="" />
             </div>
           </div>
        </div>
    );
};

export default Login;