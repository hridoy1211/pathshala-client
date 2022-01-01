import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-trasparent">
                <div className="container">
                    <Link className="navbar-brand" to="/home">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active fw-bolder" aria-current="page" to='/home' style={{color:'#4F54E7' ,fontSize:'20px'}}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link fw-bolder" to ='/services' style={{color:'#4F54E7' ,fontSize:'20px'}}>Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link fw-bolder" to ='/blogs' style={{color:'#4F54E7' ,fontSize:'20px'}}>Blogs</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;