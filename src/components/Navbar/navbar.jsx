import React, {  useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/navbar.css'
import HorizontalOne from './images/Horizontal Divider.svg';
import HorizontalTwo from './images/Horizontal Divider (1).svg';


function navbar(props) {
    const [showNavbar, setShowNavbar] = useState(false);


    return (
        <div>
            <div>
                <Container fluid>
                    <Row className='d-flex nav align-items-center justify-content-center'>
                        <Col className='d-flex gap-2'>
                            <a onClick={() => setShowNavbar(!showNavbar)} className='d-md-flex d-flex align-items-center gap-2'>
                                <div  className='d-md-none'>
                                    <div  className='HoriLine'>
                                        <img src={HorizontalTwo}/>
                                    </div>
                                    <div>
                                        <img src={HorizontalOne}/>
                                    </div>
                                </div>
                                <div className='Menu'>
                                    <p className='m-0 d-none d-md-flex text-decoration-none text-dark' href=''>Menu</p>
                                </div>
                            </a>
                           {
                            showNavbar ? 
                            (
                                <nav className='d-md-flex d-block p-4  phone gap-3'>
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <i className="bi bi-phone"></i>
                                        </div>   
                                        <div>
                                            <p className='m-0'>+75 123 456 789</p>    
                                        </div>                                 
                                    </div>
                                    <div className='Submit d-md-none d-block text-center'>
                                        <a className=' text-decoration-none text-dark' href=''>Submit Listing</a>
                                    </div>
                                </nav>
                            ) :
                            (
                                <nav className='d-md-flex d-none phone gap-3'>
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <i className="bi bi-phone"></i>
                                        </div>   
                                        <div>
                                            <p className='m-0'>+75 123 456 789</p>    
                                        </div>                                 
                                    </div>
                                    <div className='Submit d-md-none d-block text-center'>
                                        <a className=' text-decoration-none text-dark' href=''>Submit Listing</a>
                                    </div>
                                </nav>
                            )
                           }
                        </Col>
                        <Col className='p-0 my-1'>
                            <div className='title'>
                                <h1 className=' text-center text-uppercase'>tesla</h1>
                            </div>
                        </Col>
                        <Col className='col-4 d-md-flex gap-4 justify-content-end'>
                            <div className='d-flex signIn-content gap-1'>
                                <div>
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className='signIn'>
                                    <a className='text-decoration-none text-dark' href=''>Sign in</a>
                                </div>
                            </div>
                            <div className='Submit d-none d-md-block text-center'>
                                <a className=' text-decoration-none text-dark' href=''>Submit Listing</a>
                             </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default navbar;