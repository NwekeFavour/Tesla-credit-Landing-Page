import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './styles/reviews.css'
import Quote from './images/Vector.svg';
import ProfileOne from './images/team3.svg';
import ProfileTwo from './images/test1.svg';
import ProfileThree from './images/Container.svg'
import Company from './images/TeslOrg.jpg';
import Logo from './images/Xlogo.jpg';
import CardOne from './images/Car1.jpg'
import CardTwo from './images/Car5.jpg'
import CardThree from './images/Car6.jpg'

function reviews(props) {
    return (
        <Container fluid className=' my-md-4 my-3 p-md-3 border-top'>
            <div className='d-md-flex mt-4 Reviews mx-auto align-item-center justify-content-between'>
                <div className='Customer'>
                    <h1 className='m-0' style={{fontWeight: 'bold', fontSize: '20px'}}>What our customers say</h1>
                </div>
                <div className='d-md-flex align-items-center'>
                    <p className='m-0 p-0'>Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</p>
                </div>
            </div>
            <Row className='my-3'>
                <Col className='Great-card mx-auto my-3 rounded-3 col-md-3 col-9'>
                    <div >
                        <div className='d-md-flex my-2 d-flex justify-content-between align-items-center'>
                            <div>
                                <h5 className='m-0'>Great Work</h5>
                            </div>
                            <div className='quote'>
                                <img className='' src={Quote}/>
                            </div>
                        </div>
                        <div className='quote-textOne'>
                            <p className='px-2 py-3'>“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”</p>
                        </div>
                        <div className='d-flex m-2 gap-2'>
                            <div className='Prof-one'>
                                <img className='rounded-5' src={ProfileOne}/>
                            </div>
                            <div className='Profabout-one'>
                                <p className='m-0'>Dianne Russell</p>
                                <h6 className='mt-1'>Marketing</h6>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className=' Design-card mx-auto my-3 rounded-3 col-md-3 col-9'>
                    <div>
                        <div className='d-md-flex my-2 d-flex justify-content-between align-items-center'>
                            <div>
                                <h5 className='m-0'>Awesome Design</h5>
                            </div>
                            <div className='quote'>
                                <img className='' src={Quote}/>
                            </div>
                        </div>
                        <div className='quote-textTwo'>
                            <p className='px-2 py-3'>“Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam sed
                            do eiusmod”</p>
                        </div>
                        <div className='d-flex m-2 gap-2'>
                            <div className='Prof-two'>
                                <img className='rounded-5' src={ProfileTwo}/>
                            </div>
                            <div className='Profabout-two'>
                                <p className='m-0'>Floyd Miles</p>
                                <h6 className='mt-1'>Designer</h6>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='Job-Design mx-auto col-md-3 col-9 rounded-3'>
                    <div>
                        <div className=' d-md-flex my-2 d-flex justify-content-between align-items-center'>
                            <div>
                                <h5 className='m-0'>Good Job</h5>
                            </div>
                            <div className='quote'>
                                <img className='' src={Quote}/>
                            </div>
                        </div>
                        <div className='quote-textTwo'>
                            <p className='px-2 py-3'>“Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam sed
                            do eiusmod”</p>
                        </div>
                        <div className='d-flex m-2 gap-2'>
                            <div className='Prof-two'>
                                <img className='rounded-5' src={ProfileThree}/>
                            </div>
                            <div className='Profabout-two'>
                                <p className='m-0'>Leslie Alexander</p>
                                <h6 className='mt-1'>Facebook</h6>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='d-md-flex row'>
                <div className='col-md-5 CompanyImage'>
                    <img className='w-75' src={Company}/>
                </div>
                <div className='bg-dark col-md-6 py-4 px-4'>
                    <div className='text-light Calc'>
                        <h1>Auto Loan Calculator</h1>
                        <p className='my- mx-1'>Use this car payment calculator to estimate monthly payments on your next new or used auto loan.</p>
                    </div>
                    <div  className='d-flex  Form-text align-items-center row'>
                        <div className='col-md-6  col-6'>
                            <form className="form-floating">
                                <input type="email" className="form-control" id="floatingInputValue" />
                                <label className='Form-placeholder' htmlFor="floatingInputValue">Price $</label>
                            </form>
                        </div>
                        <div className='col-md-6 col-6'>
                            <form className="form-floating">
                                <input type="email" className="form-control" id="floatingInputValue" />
                                <label className='Form-placeholder' htmlFor="floatingInputValue">Interest Rate</label>
                            </form>
                        </div>
                        <div className='my-3 col-md-6 col-6'>
                            <form className="form-floating">
                                <input type="email" className="form-control" id="floatingInputValue" />
                                <label className='Form-placeholder' htmlFor="floatingInputValue">Loan Term (year)</label>
                            </form>
                        </div>
                        <div className='my-3 col-md-6 col-6'>
                            <form className="form-floating">
                                <input type="email" className="form-control" id="floatingInputValue" />
                                <label className='Form-placeholder' htmlFor="floatingInputValue">Down Payment</label>
                            </form>
                        </div>
                        <div className='col-12 '>
                            <Button className='w-75 d-flex d-md-flex align-items-center justify-content-center mx-auto py-2 '>
                                Calculate 
                                <i className="px-1 bi bi-arrow-up-right"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='d-md-flex my-3 justify-content-between align-items-center'>
                    <div>
                        <p className='m-0'>Explore Our Premium Brands</p>
                    </div>
                    <div>
                        <a href='/'  className='text-decoration-none text-dark d-flex d-md-flex align-items-center '>
                            Show All Brands 
                            <i className="px-1 bi bi-arrow-up-right"></i>
                        </a >
                    </div>
                </div>
                <div className='d-md-flex mx-auto align-items-center my-5 justify-content-center brands'>
                    <div className='brandOne rounded-2'>
                        <img className='brand-X' src={Logo}/>
                    </div>
                    <div className='brandTwo'>
                        <img className='brand-S' src={Logo}/>
                    </div>
                    <div className='brandthree'>
                        <img className='brand-Y' src={Logo}/>
                    </div>
                    <div className='brandFour'>
                        <img className='brand-Semi' src={Logo}/>
                    </div>
                    <div className='brandFive'>
                        <img className='brand-Cyb' src={Logo}/>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='Blog'>
                    <h4 className=''>Latest Blog Post</h4>
                </div>
                <div className='d-md-flex d-block  Admin justify-content-center my-5 gap-3'>
                    <div className='d-flex justify-content-center '>
                        <div className='Card-one'>
                            <img src={CardOne}/>
                            <div className='d-md-flex mx-1 my-2 gap-4'>
                                <div className='m-0'>
                                    <p className='m-0'>Admin</p>
                                </div>
                                <div className='m-0'>
                                    <p>November 22, 2023</p>
                                </div>
                            </div>
                            <div className='mainAlphina'>
                                <a className='alphina text-dark' href="">2024 BMW ALPINA XB7 with exclusive details, extraordinary</a>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center '>
                        <div className='Card-three'>
                            <img src={CardThree}/>
                            <div className='d-md-flex mx-1 my-2 gap-4'>
                                <div className='m-0'>
                                    <p className='m-0'>Admin</p>
                                </div>
                                <div className='m-0'>
                                    <p>November 22, 2023</p>
                                </div>
                            </div>
                            <div className='mainBmw'>
                                <a className='alphina text-dark' href="">BMW X6 M50i is designed to exceed yoursportiest.</a>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  justify-content-center'>
                        <div className='Card-two'>
                            <img src={CardTwo}/>
                            <div className='d-md-flex mx-1 my-2 gap-4'>
                                <div className='m-0'>
                                    <p className='m-0'>Admin</p>
                                </div>
                                <div className='m-0'>
                                    <p>November 22, 2023</p>
                                </div>
                            </div>
                            <div className='mainBmw'>
                                <a className='alphina  text-dark' href="">BMW X5 Gold 2024 Sport Review: Light on Sport</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='view'>
                    <a className='text-dark text-decoration-none' href="#">
                        View All
                        <i className="px-1 bi bi-arrow-up-right"></i>
                    </a>
                </div>
            </div>
          
        </Container>
    );
}

export default reviews;