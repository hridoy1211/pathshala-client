import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logout} = useAuth()
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light  bg-trasparent">
                <div className="container">
                    <Link className="navbar-brand" to="/home">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active " aria-current="page" to='/home' style={{color:'#FFCA51' ,fontSize:'20px'}}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to ='/services' style={{color:'#FFCA51' ,fontSize:'20px'}}>Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to ='/blogs' style={{color:'#FFCA51' ,fontSize:'20px'}}>Blogs</Link>
                        </li>&nbsp;
                    </ul>
                    <form className="d-flex">
                        {
                            user?.email && <strong style={{ color: '#FFCA51', marginTop:'8px' }}>{user?.displayName ? user?.displayName : user?.email}</strong> 
                        }
                        &nbsp;
                        {
                            user?.email ? <button onClick={logout} className="btn btn-design" type="submit">Logout</button> 
                            : <Link to='/login'><button className="btn btn-design" type="submit">Login</button></Link>
                        }
                        
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;