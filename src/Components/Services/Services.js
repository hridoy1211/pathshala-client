import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const[services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='container mt-5'>
            <h1 className='text-center my-4'>Our Services</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    services.map(service => <div key={service.id} className="col">
                    <div className="card h-100">
                        <img src={service.coverImg}className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{service.name}</h5>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <p className="card-text notify-design"> <strong>৳</strong> {service.price}</p>
                                <p className="card-text notify-design" style={{margin: '0px 0px 16px'}}><i class="far fa-clock"></i> &nbsp; {service.timing}</p>
                            </div>
                            <Link to={`/singleService/${service.id}`} style={{textDecoration:'none'}}><div className="d-grid gap-2">
                                <button className="btn btn-outline-danger" type="button">Details</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};



export default Services;