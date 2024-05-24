import React from 'react';
import './styles/content.css'
import imageOne from './images/f1.svg.svg'
import imageTwo from './images/f2.svg fill.svg'
import imageThree from './images/f3.svg.svg'
import imageFour from './images/f4.svg.svg'
import { Nav } from 'react-bootstrap';
import CardOne from './images/Car1.jpg'
import CardTwo from './images/Car5.jpg'
import CardThree from './images/Car6.jpg'
import TeslaOne from './images/Link.svg';
import TeslaTwo from './images/teslajpg.jpg';


function content(props) {
    return (
        <div>
            <div className='mx-2 Cards-content'>
                <div className='Choose'>
                    <h1 className='text-center'>Why Choose Us?</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col card-one' >
                            <div>
                                <img src={imageOne}/>
                            </div>
                            <div className='Special my-2'>
                                <p className='m-0'>Special Financing Offers</p>
                            </div>
                            <div>
                                <p>Our stress-free finance
                                department that can find financial
                                solutions to save you money.</p>
                            </div>
                        </div>
                        <div className='col card-two' >
                            <div>
                                <img src={imageTwo}/>
                            </div>
                            <div className='Dealership'>
                                <p>Trusted Car Dealership</p>
                            </div>
                            <div>
                                <p>Our stress-free finance
                                department that can find financial
                                solutions to save you money.</p>
                            </div>
                        </div>
                        <div className='col card-three'>
                            <div>
                                <img src={imageThree}/>
                            </div>
                            <div className='Transparent'>
                                <p>Transparent Pricing</p>
                            </div>
                            <div>
                                <p>Our stress-free finance
                                department that can find financial
                                solutions to save you money.</p>
                            </div>
                        </div>
                        <div className='col card-four'>
                            <div>
                                <img src={imageFour}/>
                            </div>
                            <div className='Expert'>
                                <p>Expert Car Service</p>
                            </div>
                            <div>
                                <p className='w-100'>Our stress-free finance
                                department that can find financial
                                solutions to save you money.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='d-md-flex align-items-center justify-content-between'>
                            <div>
                                <h2>Featured Listings</h2>
                            </div>
                            <div className='my-4'>
                                <a className='text-decoration-none text-dark' href=''>
                                    View All
                                    <i className="px-1 bi bi-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <Nav variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">New Cars</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Used Cars</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">
                                    In stock
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className="d-md-flex CarsBody gap-3 my-4">
                        <div className="card border-0" style={{width: "18rem"}}>
                            <img src={CardOne} className=" rounded-3 card-img-top" alt="..."/>
                            <div className="card-body py-4 p-0">
                                <h4 className="card-title">TeslaX</h4>
                                <p className="card-subtitle">3.5 D5 PowerPulse Momentum 5dr AWD…Geartronic Estate</p>
                                <div className='d-flex gap-5 my-2'>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-speedometer2"></i>
                                        <p>20 miles</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-fuel-pump"></i>
                                        <p>Petrol</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5 '>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-sliders2-vertical"></i>
                                        <p>Automatic</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-calendar"></i>
                                        <p>2023</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between border-top align-items-center'>
                                    <div className='coinOne my-3'>
                                        <h1 className='p-0 m-0 '>$40,000</h1>
                                    </div>
                                    <div>
                                        <a className='text-decoration-none' href=''>
                                             View details
                                             <i className="px-1 bi bi-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" style={{width: "18rem"}}>
                            <img src={CardTwo} className="card-img-top" alt="..."/>
                            <div className="card-body py-4 p-0">
                                <h4 className="card-title">TeslaX</h4>
                                <p className="card-subtitle">3.5 D5 PowerPulse Momentum 5dr AWD…Geartronic Estate</p>
                                <div className='d-flex gap-5 my-2'>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-speedometer2"></i>
                                        <p>20 miles</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-fuel-pump"></i>
                                        <p>Petrol</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5 '>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-sliders2-vertical"></i>
                                        <p>Automatic</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-calendar"></i>
                                        <p>2023</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between border-top  align-items-center'>
                                    <div className='coinTwo my-3'>
                                        <h1 className='p-0 m-0 '>$15,000</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <a className='text-decoration-none' href=''>
                                             View details
                                             <i className="px-1 bi bi-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" style={{width: "18rem"}}>
                            <img src={CardOne} className="card-img-top" alt="..."/>
                            <div className="card-body py-4 p-0">
                                <h4 className="card-title">TeslaX</h4>
                                <p className="card-subtitle">4.0 D5 PowerPulse Momentum 5dr AWD…</p>
                                <div className='d-flex gap-5 my-2'>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-speedometer2"></i>
                                        <p>50 miles</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-fuel-pump"></i>
                                        <p>Petrol</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5 '>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-sliders2-vertical"></i>
                                        <p>Automatic</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-calendar"></i>
                                        <p>2023</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between border-top  align-items-center'>
                                    <div className='coinThree my-3'>
                                        <h1 className='p-0 m-0 '>$150,000</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <a className='text-decoration-none' href=''>
                                             View details
                                             <i className="px-1 bi bi-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" style={{width: "18rem"}}>
                            <img src={CardThree} className="card-img-top" alt="..."/>
                            <div className="card-body py-4 p-0">
                                <h4 className="card-title">TeslaX</h4>
                                <p className="card-subtitle">4.0 D5 PowerPulse Momentum 5dr AWD…Geartronic Estate</p>
                                <div className='d-flex gap-5 my-2'>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-speedometer2"></i>
                                        <p>50 miles</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-fuel-pump"></i>
                                        <p>Petrol</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5 '>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-sliders2-vertical"></i>
                                        <p>Automatic</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <i className="bi bi-calendar"></i>
                                        <p>2023</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between border-top  align-items-center'>
                                    <div className='coinFour my-3'>
                                        <h1 className='p-0 m-0 '>$95,000</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <a className='text-decoration-none' href=''>
                                             View details
                                             <i className="px-1 bi bi-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6 d-md-flex my-4">
                            <div className='tesla-one  d-flex d-md-flex align-items-end justify-content-center'>
                                <img src={TeslaOne} alt="" />
                            </div>
                            <div className='tesla-two d-flex justify-content-center my-2'>
                                <img src={TeslaTwo}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <div className='Tesla-title'>
                                    <h2>Get A Fair Price For Your Personal electric car Today</h2>
                                    <p>We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.</p>
                                </div>
                                <div>
                                    <div className='d-flex gap-3  align-items-center'>
                                        <div className='checker'>
                                            <i className="bi bi-check2"></i>
                                        </div>
                                        <div className='londonText'>
                                            <p className='m-0'>We are the UK’s largest provider, with more patrols in more places</p>
                                        </div>
                                    </div>
                                    <div className='d-flex my-3 d-md-flex md-justify-content-start gap-3 align-items-center'>
                                        <div className='checker'>
                                            <i className="bi bi-check2"></i>
                                        </div>
                                        <div className='londonText'>
                                            <p className='m-0'>We are the UK’s largest provider, with more patrols in more places</p>
                                        </div>
                                    </div>
                                    <div className='d-flex my-3 d-md-flex md-justify-content-start gap-3 align-items-center'>
                                        <div className='checker'>
                                            <i className="bi bi-check2"></i>
                                        </div>
                                        <div className='londonText'>
                                            <p className='m-0'>We are the UK’s largest provider, with more patrols in more places</p>
                                        </div>
                                    </div>
                                    <div className='GetStarted mt-5'>
                                        <a className='py-2 px-3 rounded-3 text-light text-decoration-none ' href=''>
                                            Get Started
                                            <i className="px-1 bi bi-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' d-md-flex gap-5 justify-content-center '>
                            <div className='mt-4' style={{textAlign: 'center'}}>
                                <h1 className='m-0' style={{fontWeight: "bold"}}>836M</h1>
                                <p className='m-0' style={{fontSize: '15px'}}>CARS FOR SALE</p>
                            </div>
                            <div className='mt-4' style={{textAlign: 'center'}}>
                                <h1 className='m-0'style={{fontWeight: "bold"}}>738M</h1>
                                <p className='m-0' style={{fontSize: '15px'}}>DEALER REVIEWS</p>
                            </div>
                            <div className='mt-4' style={{textAlign: 'center'}}>
                                <h1 className='m-0' style={{fontWeight: "bold"}}>100M</h1>
                                <p className='m-0' style={{fontSize: '15px'}}>VISITORS PER DAY</p>
                            </div>
                            <div className='mt-4' style={{textAlign: 'center'}}>
                                <h1 className='m-0' style={{fontWeight: "bold"}}>238M</h1>
                                <p className='m-0' style={{fontSize: '15px'}}>VERIFIED DEALERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default content;