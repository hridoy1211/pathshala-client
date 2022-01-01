import React, { useEffect, useState } from 'react';
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
            <h1 className='text-center'>Our Services</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    services.map(service => <div key={service.id} className="col">
                    <div className="card h-100">
                    <img src={service.coverImg}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text"> <span> ৳ </span> {service.price}</p>
                    </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};



export default Services;