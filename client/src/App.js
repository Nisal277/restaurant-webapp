import logo from './logo.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Routes, Route , Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import AboutUsSection from './components/AboutUsSection';
import ImageGallery from './components/ImageGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';
import Menu from './components/Menu';

function App() 
{
  return (
    <div>
      <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='navbar-brand text-success d-flex align-items-center'>
              <FontAwesomeIcon icon={faUtensils} size='xl' style={{ color: '#ff6347' }} />
              <span className='ms-3 lh-1 fw-semibold' style={{ color: '#ff6347' }}>
                Flavour Hub
                <br></br>
                Restaurant
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='text-center' id='basiv-navbar-nav'>
            <Nav className='me-auto justify-content-center w-100'>
              <Link to='/' className='nav-link text-uppercase text-center fw-semibold' style={{ color: '#ff6347'}}>Home</Link>
              <Link to='/menu' className='nav-link text-uppercase  text-center fw-semibold' style={{ color: '#ff6347' }}>Menu</Link>
              <Link to='/about' className='nav-link text-uppercase  text-center fw-semibold' style={{ color: '#ff6347' }}>About</Link>
              <Link to='/contact' className='nav-link text-uppercase  text-center fw-semibold' style={{ color: '#ff6347' }}>Contact</Link>
            </Nav>
            <Link to='/contact'>
              <button type='button' className='btn rounded-0 text-capitalize my-3 my-lg-0 ms-lg-4 text-nowrap' style={{ backgroundColor: 'black', color: 'white' }}>Log in / Sign up</button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    
      <Header/>
      <AboutUsSection></AboutUsSection>
      <ImageGallery/>
      <ContactSection></ContactSection>
      <Footer></Footer>





      
      
    </div>
  );
}
  
export default App;

