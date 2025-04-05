import React from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuBtn from './MenuBtn';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelopeOpenText } from 'react-icons/fa';


function Header() {
  return (
    <header>
        <Carousel className='carousel-fade mt-5 mt-sm-0'>
            <Carousel.Item className='carousel-item1 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Welcome to</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Flavour Hub restaurant</h1>
                            <p className='mb-4 text-center text-md-start'>Welcome to Flavour Hub Restaurant in Colombo, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact' style={{ textDecoration: 'none' }} >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='mx-2 mb-3 mb-sm-0'
                                        >                                                              
                                        <button
                                          type='button'
                                            className='btn btn-lg text-capitalize d-flex align-items-center justify-content-center shadow'
                                                style={{
                                                    background: 'linear-gradient(to right, #7F7FD5, #86A8E7, #91EAE4)', // cool color contrast
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '30px',
                                                    padding: '0.6rem 1.4rem',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                                    textDecoration: 'none',
                                                    fontStyle: 'normal', 
                                                        }}
                                                            >
                                                            <FaEnvelopeOpenText className='me-2' />
                                                                Contact us
                                                                
                                                                    </button>
                                                                    
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Welcome to</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Flavour Hub restaurant</h1>
                            <p className='mb-4 text-center text-md-start'>Welcome to Flavour Hub Restaurant in Colombo, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact' style={{ textDecoration: 'none' }} >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='mx-2 mb-3 mb-sm-0'
                                        >                                                              
                                        <button
                                          type='button'
                                            className='btn btn-lg text-capitalize d-flex align-items-center justify-content-center shadow'
                                                style={{
                                                    background: 'linear-gradient(to right, #7F7FD5, #86A8E7, #91EAE4)', // cool color contrast
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '30px',
                                                    padding: '0.6rem 1.4rem',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                                    textDecoration: 'none',
                                                    fontStyle: 'normal', 
                                                        }}
                                                            >
                                                            <FaEnvelopeOpenText className='me-2' />
                                                                Contact us
                                                                
                                                                    </button>
                                                                    
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Welcome to</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Flavour Hub restaurant</h1>
                            <p className='mb-4 text-center text-md-start'>Welcome to Flavour Hub Restaurant in Colombo, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact' style={{ textDecoration: 'none' }} >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='mx-2 mb-3 mb-sm-0'
                                        >                                                              
                                        <button
                                          type='button'
                                            className='btn btn-lg text-capitalize d-flex align-items-center justify-content-center shadow'
                                                style={{
                                                    background: 'linear-gradient(to right, #7F7FD5, #86A8E7, #91EAE4)', // cool color contrast
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '30px',
                                                    padding: '0.6rem 1.4rem',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                                    textDecoration: 'none',
                                                    fontStyle: 'normal', 
                                                        }}
                                                            >
                                                            <FaEnvelopeOpenText className='me-2' />
                                                                Contact us
                                                                
                                                                    </button>
                                                                    
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </header>
  )
}

export default Header;