import React, { useEffect } from 'react';
import Navbar from '../Navbar/navbar'
import Teslabg from './images/TeslaCar.avif';
import './styles/hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
function hero(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className='container'>
                <Navbar/>
                <div id="carouselExampleCaptions" className="carousel slide ">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Teslabg} className="HeroBg d-block w-100" alt="..."/>
                            <div className="carousel-caption Caption my-1">
                                <h5 className='text-dark '>Find cars for sale and for rent near you</h5>
                                <p>A Vehicle For Every Lifestyle Today</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Tabs-content  m-2'>
                    <div className='tabs'>
                        <ul className='d-flex gap-2 d-md-flex'>
                            <li><a href=''>all</a></li>
                            <li><a href=''>New</a></li>
                            <li><a href=''>Used</a></li>
                        </ul>
                    </div>
                    <div className='container btn-group'>
                        <div className='row'>
                            <div className='col-6 col-md-3 drop-one dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
                                <h1>Select makes</h1>
                                <p>audi</p>
                            </div>
                            <ul className='dropdown-menu'></ul>
                            <div className='col-6 col-md-3 drop-two dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
                                <h1>Select models</h1>
                                <p>Q7</p>
                            </div>
                            <div className='col-6 col-md-3 drop-three dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
                                <h1>Year</h1>
                                <p>0 - 2024</p>
                            </div>
                            <div className='col-6 col-md-3 drop-three dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
                                <h1>Select price</h1>
                                <p className='text-capitalize'>all prices</p>
                            </div>
                            <div className='col-9 Search mx-auto rounded-4 p-2'>
                                <a className='d-flex text-decoration-none text-light' href=''>
                                    <i className="bi bi-search"></i>
                                    <p className='px-2 m-0'>Search</p>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div data-aos="fade-up" className='row  Cards my-4 d-md-flex align-items-center'>
                    <div   className="card border-0" style={{width: "18rem"}}>
                        <div className="card-body card-One">
                            <h5 className="card-title">3 Cars</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Model X</h6>
                        </div>
                    </div>
                    <div className="card border-0" style={{width: "18rem"}}>
                        <div className="card-body cardThree">
                            <h5 className="card-title">3 Cars</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Model 3</h6>
                        </div>
                    </div>
                    <div className="card border-0" style={{width: "18rem"}}>
                        <div className="card-body cardTwo">
                            <h5 className="card-title">3 Cars</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Model S</h6>
                        </div>
                    </div>
                    <div className="card border-0" style={{width: "18rem"}}>
                        <div className="card-body cardFive">
                            <h5 className="card-title text-light">3 Cars</h5>
                            <h6 className=" card-subtitle mb-2 text-light">Model X</h6>
                        </div>
                    </div>      
                    <div className="card border-0" style={{width: "18rem"}}>
                        <div className="card-body cardFour">
                            <h5 className="card-title">3 Cars</h5>
                            <h6 className=" text-light card-subtitle mb-2 text-body-secondary">Model S convertible</h6>
                        </div>
                    </div>
                    <div className="card border-0 mx-1" style={{width: "18rem"}}>
                        <div className="card-body cardSix">
                            <h5 className="card-title text-light">CarX</h5>
                            <h6 className=" card-subtitle mb-2 text-light">CyberTrunk</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;