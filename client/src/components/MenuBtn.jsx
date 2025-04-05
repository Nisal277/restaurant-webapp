import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import { motion } from 'framer-motion';

function MenuBtn() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='mx-2 mb-3 mb-sm-0'
    >
      <Link to='/menu' style={{ textDecoration: 'none' }}>
        <button
          type='button'
          className='btn btn-lg text-capitalize d-flex align-items-center justify-content-center'
          style={{
            background: 'linear-gradient(to right, #fc6076, #ff9a44)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '0.6rem 1.4rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          }}
        >
          <FaUtensils className='me-2' />
          Our full menu
        </button>
      </Link>
    </motion.div>
  );
}

export default MenuBtn;
