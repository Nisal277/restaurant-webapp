// App.js - fixed version with correct routing and login rendering

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { FaUtensils, FaHome, FaConciergeBell, FaInfoCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Header from './components/Header';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/Home';
import AdminDash from "./components/AdminDash";//admin
import MenuDash from "./components/MenuDash"; //admin
import LoginPage from './pages/LoginPage';
import Logout from './pages/Logout';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





function App() {

  


  return (
    <div>
      <Navbar expand='lg' className='fixed-top shadow' style={{
        background: 'linear-gradient(to right, #a4508b, #5f0a87)',
        padding: '0.8rem 1rem'
      }}>
        <Container>
          <Navbar.Brand as={Link} to='/' className='d-flex align-items-center text-white'>
            <FaUtensils size={28} style={{ color: '#ff9a44' }} />
            <span className='ms-3 lh-1 fw-semibold'>
              Flavour Hub<br />Restaurant
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto text-center align-items-center'>
              <motion.div whileHover={{ scale: 1.1 }} className='mx-2'>
                <Link to='/' className='nav-link text-white fw-semibold d-flex align-items-center'>
                  <FaHome className='me-1' /> Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className='mx-2'>
                <Link to='/menu' className='nav-link text-white fw-semibold d-flex align-items-center'>
                  <FaConciergeBell className='me-1' /> Menu
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className='mx-2'>
                <Link to='/about' className='nav-link text-white fw-semibold d-flex align-items-center'>
                  <FaInfoCircle className='me-1' /> About
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className='mx-2'>
                <Link to='/contact' className='nav-link text-white fw-semibold d-flex align-items-center'>
                  <FaEnvelope className='me-1' /> Contact
                </Link>
              </motion.div>

              

              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='mx-2'>
                <Link to='/login'>
                  <button className='btn text-white fw-semibold' style={{
                    background: 'linear-gradient(to right, #fc6076, #ff9a44)',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '0.5rem 1.2rem'
                  }}>
                    <FaSignInAlt className='me-2' /> Log in / Sign up
                  </button>
                </Link>
              </motion.div>

              

              
              <button onClick={() => window.location.href = "/logout"} className="btn btn-link text-white">
                Logout
              </button>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Ensure this isn't accidentally inside the navbar */}
      <div style={{ paddingTop: '75px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<AboutUsSection />} />
          <Route path='/contact' element={<ContactSection />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/admindash' element={<AdminDash />} />
          <Route path='/menudash' element={<MenuDash />} />

          

          

        </Routes>
      </div>

       {/* 🔔 This renders the toast notification container globally */}
       <ToastContainer position="top-right" autoClose={3000} />

      <Footer />
    </div>
  );
}

export default App;
