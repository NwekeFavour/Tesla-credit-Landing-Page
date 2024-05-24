import React from 'react';
import './footer.css'

function footer(props) {
    return (
        <div className='container-xxl'>
            <div className='Join'>
                <div className='text-light p-3 d-md-flex align-items-center justify-content-between'>
                    <div>
                        <p className='m-0'>Join X</p>
                        <p>Receive pricing updates, shopping tips & more!</p>
                    </div>
                    <div className='border border-dark input rounded-5 px-3 py-3'>
                        <input className=' border-0' placeholder='Your email address'/>
                        <a className='py-3  px-4 text-decoration-none text-light rounded-5 p-3' href='#'>Submit</a>
                    </div>
                </div>
                <div className='d-md-flex gap-5 border-top border-dark my-3 py-4 justify-content-evenly'>
                    <div className='p-2 Company'>
                        <div className=''>
                            <ul className='list-unstyled m-0 py-2 px-2 footerLink'>
                                <h4 className='text-light m-0 text-justify fs-5'>Company</h4>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">About us</a>
                                </li>
                                 <li>
                                    <a  className='text-light text-decoration-none' href="">Blog</a>
                                </li>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">Services</a>
                                </li>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">FAQs</a>
                                </li>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">Terms</a>
                                </li>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-2 Company'>
                        <h4 className='text-light m-0 fs-5'>Quick Links</h4>
                        <div className=''>
                            <ul className='list-unstyled m-0 py-2 px-2 footerLink'>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">Get in Touch</a>
                                </li>
                                 <li>
                                    <a  className='text-light text-decoration-none' href="">Help center</a>
                                </li>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">Live chat</a>
                                </li>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">How it works</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-2 Company'>
                        <h4 className='text-light m-0 fs-5'>Vehicle Type</h4>
                        <div className=''>
                            <ul className='list-unstyled m-0 py-2 px-2 footerLink'>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">Model S</a>
                                </li>
                                 <li>
                                    <a  className='text-light text-decoration-none' href="">Model Y</a>
                                </li>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">Model 3</a>
                                </li>
                                 <li>
                                    <a className='text-light text-decoration-none' href="">Tesla Semi</a>
                                </li>
                                <li>
                                    <a className='text-light text-decoration-none' href="">Cybertruck</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* hmm */}
                    <div className='p-2 Company'>
                        <h4 className='text-light m-0 fs-5'>Our mobile App</h4>
                        <div className='my-3'>
                            <ul className='list-unstyled text-light m-0 p-1 footerLink'>
                                <div className='row Apple p-2 rounded-4 py-3'>
                                    <div className="col-md-6 w-25 d-md-flex justify-content-center">
                                        <i className="fs-3 bi bi-apple"></i>
                                    </div>
                                    <div className="col">
                                        <div className="col">
                                            <p className='m-0'>Download in the</p>
                                        </div>
                                        <div className="col">
                                            <p className='m-0 fw-bold'>Apple Store</p>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className='my-3'>
                            <ul className='list-unstyled text-light m-0 p-1 footerLink'>
                                <div className='row Store p-2 rounded-4 py-3'>
                                    <div className="col-md-6 w-25 d-md-flex justify-content-center">
                                        <i className="fs-3 bi bi-google-play"></i>
                                    </div>
                                    <div className="col">
                                        <div className="col">
                                            <p className='m-0'>Download in the</p>
                                        </div>
                                        <div className="col">
                                            <p className='m-0 fw-bold'>Apple Store</p>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className='d-flex d-md-block justify-content-end'>
                            <p className=' m-0 fs-5 text-light Contact fw-semibold'>Contact with Us</p>
                        </div>
                        <div className='d-md-flex d-flex justify-content-end gap-5 my-3'>
                            <div>
                            <i className="text-light fab fa-facebook-f"></i>
                            </div>
                            <div>
                                <i className='fab text-light fa-twitter'></i>
                            </div>
                            <div>
                                <i className='fab text-light fa-instagram'></i>
                            </div>
                            <div>
                                <i className='fab text-light fa-linkedin-in'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-top text-light border-dark'>
                   <div className='d-md-flex my-2 justify-content-between'>
                        <div>
                            <p className='m-0'>© 2024 exemple.com. All rights reserved.</p>
                        </div>
                        <div className='d-md-flex Terms align-items-center gap-2'>
                            <a className='text-decoration-none text-light' href="">Terms & conditions</a> 
                            <i className='dot fas fa-circle'></i>
                            <a className='text-decoration-none pe-3 text-light'  href="">Privacy Notice</a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default footer;