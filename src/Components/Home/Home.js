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
import SliceService from '../SliceService/SliceService';

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

            <div className='my-5'>
                <div className='bgImg'>
                    <div className='dark-overlay'>
                        <div className='container'>
                            <SliceService></SliceService>
                        </div>
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


            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col ">
                        <div class="card-body border">
                            <div>
                                <i class="fas fa-video" style={{backgroundColor: '#EEEEEE', padding:'20px', fontSize:'45px', color:'#444444', margin:'10px'}}></i>
                            </div>
                            <div style={{margin:'10px'}}>
                                <h5 class="card-title">Video Class</h5>
                                <p class="card-text">Video recordings are made of each class at the Pathshala Foundation. Even if you can't take the class for some reason, there is no chance of missing the class.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card-body border">
                            <div>
                                <i class="far fa-play-circle" style={{backgroundColor: '#EEEEEE', padding:'20px', fontSize:'45px', color:'#444444', margin:'10px'}}></i>
                            </div>
                            <div style={{margin:'10px'}}>
                                <h5 class="card-title">Online Course</h5>
                                <p class="card-text">For those who live outside Dhaka and if it is not possible to come to our office to take classes, there is a facility to take online courses. You get the chance to take classes from anywhere.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card-body border">
                            <div>
                                <i class="fas fa-user-clock" style={{backgroundColor: '#EEEEEE', padding:'20px', fontSize:'45px', color:'#444444', margin:'10px'}}></i>
                            </div>
                            <div style={{margin:'10px'}}>
                                <h5 class="card-title">Support System</h5>
                                <p class="card-text">It is not our responsibility to do just that. At the end of the course everything is shown and helped on how to get the job done and how to communicate with the client.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card-body border">
                            <div>
                                <i class="fas fa-dollar-sign" style={{backgroundColor: '#EEEEEE', padding:'20px', fontSize:'45px', color:'#444444', margin:'10px'}}></i>
                            </div>
                            <div style={{margin:'10px'}}>
                                <h5 class="card-title">Installation facility</h5>
                                <p class="card-text">We have the benefit of installment in offline course. You can pay the course fee in installments if you want. Follow the hotline to find out about installments.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card-body border">
                            <div>
                                <i class="fab fa-youtube" style={{backgroundColor: '#EEEEEE', padding:'20px', fontSize:'45px', color:'#444444', margin:'10px'}}></i>
                            </div>
                            <div style={{margin:'10px'}}>
                                <h5 class="card-title">Youtube Channel</h5>
                                <p class="card-text">Our YouTube channel has 230+ video tutorials on web design and WordPress. You can watch the videos to know about the quality of our course.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card-body border">
                            <div>
                                <i class="fas fa-laptop-code" style={{backgroundColor: '#EEEEEE', padding:'20px', fontSize:'45px', color:'#444444', margin:'10px'}}></i>
                            </div>
                            <div style={{margin:'10px'}}>
                                <h5 class="card-title">Web Hosting</h5>
                                <p class="card-text">Domains, hosting, themes, plugins and tools required for all Pathshala Foundation students are provided by Pathshala Foundation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;