import React from 'react';
import './Home.css';
import service1 from '../../img/home-design/services-01.svg'
import service2 from '../../img/home-design/services-02.svg'
import service3 from '../../img/home-design/services-03.svg'
import sideTab from '../../img/home-design/tab-img-01.svg'

import partner1 from '../../img/partner-logo/partner-logo-1.png'
import partner2 from '../../img/partner-logo/partner-logo-2.png'
import partner3 from '../../img/partner-logo/partner-logo-3.png'
import partner4 from '../../img/partner-logo/partner-logo-4.png'
import partner5 from '../../img/partner-logo/partner-logo-5.png'

const Home = () => {
    return (
        <section>
            <div className='banner-img'>
                <div className='container d-flex'>
                    <div className="row g-3 justify-content-center align-items-center">
                        <div className="col-md-7" style={{marginTop: '25%'}}>
                            <h1 className='text-white' style={{fontSize:'60px', fontFamily:"revert", letterSpacing:'5px', wordSpacing:'5px'}}>Big on Data <br /> Science & AI</h1>
                            <p className='text-white' style={{fontSize:'20px'}}>Our transparent and explainable AI solutions help our customers to establish more autonomous business practices.</p>
                        </div>
                        <div className="col-md-5">
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container my-5">
                <div className='text-center'>
                    <div className="row g-3 container">
                        <div className="col-md-4  col-12">
                            <img className='img-fluid' src={service1} alt=""/>
                            <h4 className='mt-3'>Cybersecurity <br /> Solutions</h4>
                        </div>
                        <div className="col-md-4 col-12">
                            <img className='img-fluid' src={service2} alt=""/>
                            <h4 className='mt-3'>Managed Cloud <br /> Solutions</h4>
                        </div>
                        <div className="col-md-4 col-12">
                            <img className='img-fluid' src={service3} alt="" />
                            <h4 className='mt-3'>Digital <br /> Transformation</h4>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container d-flex'>
                <div className="row g-3 align-items-center">
                    <div className="col-md-6">
                        <img className='img-fluid' src={sideTab} alt=''></img>
                    </div>
                    <div className="col-md-6">
                        <p><strong><small style={{color:'#FFBB00'}}>Why Choose us</small></strong></p>
                        <h1>We are provider of managed IT services</h1>
                        <p className='text-secondary'>We are global leader in managed technology service provider responsible for managing customer IT infrastructure, custom software development, It consultancy, and managed services.Global Managed IT provider with over extensive experience in implementing infrastructure projects and outsourcing IT functions.You benefit from a comprehensive outsourced service, all components of which are designed to meet your business objectives.You can take advantage of flexible, customizable IT solutions tailored to your business and its ongoing changes.</p>
                    </div>
                </div>
            </div>

            <div className='my-5 container'>
                <div className="row ">
                    <div className="col-md-2 col-6">
                        <img className='img-fluid' src={partner1} alt="" />
                    </div>
                    <div className="col-md-2 col-6">
                        <img className='img-fluid' src={partner2} alt="" />
                    </div>
                    <div className="col-md-2 col-6">
                        <img className='img-fluid' src={partner3} alt="" />
                    </div>
                    <div className="col-md-2 col-6">
                        <img className='img-fluid' src={partner4} alt="" />
                    </div>
                    <div className="col-md-2 col-6">
                        <img className='img-fluid' src={partner5} alt="" />
                    </div>
                    <div className="col-md-2 col-6">
                        <img className='img-fluid' src={partner2} alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;