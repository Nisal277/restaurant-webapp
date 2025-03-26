
import React, { useState } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import MenuBg from "../utils/images/menu-section-img.jpg"; 


const menuStyles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' },
  header: { width: '100%', backgroundColor: '#b22222', color: 'white', padding: '20px', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' },
  categoryContainer: { display: 'flex', justifyContent: 'center', gap: '15px', margin: '20px 0' ,flexWrap: 'wrap'  },
  categoryButton: { padding: '10px 20px', fontSize: '16px', borderRadius: '20px', border: '1px solid #b22222', cursor: 'pointer', backgroundColor: 'white', color: '#b22222' },
  activeCategory: { backgroundColor: '#b22222', color: 'white' },
  content: { display: 'flex', width: '80%', justifyContent: 'space-between', gap: '30px' },
  menuItems: { width: '70%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
  itemCard: { border: '1px solid #ddd', borderRadius: '10px', padding: '15px', textAlign: 'center', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' },
  addButton: { backgroundColor: '#b22222', color: 'white', padding: '12px', border: 'none', borderRadius: '20px', cursor: 'pointer', marginTop: '10px' , fontSize: '16px',transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'},
  cart: { width: '350px',  maxHeight: '670px', overflowY: 'auto',  border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f8f8f8', minHeight: '20px' },
  cartItem: { display: 'flex', justifyContent: 'space-between',alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' ,  borderRadius: '8px',backgroundColor: '#f9f9f9',
    marginBottom: '8px' },
  checkout: { marginTop: '20px', backgroundColor: '#b22222', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '50%' ,   fontSize: '16px',
    fontWeight: 'bold' , marginTop: '10px' },
  itemImage: {  width: '100%', height: '150px',  objectFit: 'cover', borderRadius: '10px' },
  removeButton: { backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer',fontSize: '14px' , fontWeight: 'bold',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out' },
  totalAmount: {marginTop: 'auto', fontSize: '18px', fontWeight: 'bold'},
  cartItemsContainer: { flexGrow: 1,overflowY: 'auto'},
  addButtonHover: { backgroundColor: '#000', color: 'white'},
  removeButtonHover: {
    backgroundColor: 'white',
    color: '#000',
    border: '1px solid #000'
  }
};

const menuhead = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${MenuBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "300px",
  width: "100%", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white", 
  textAlign: "center",
};



const menuData = {
  breakfast: [
    { id: 1, name: 'Pancakes', price: 250 , image: require('../utils/images/pancake.jpeg') },
    { id: 2, name: 'Omelette', price: 300 , image: require('../utils/images/omlette.jpeg')},
    { id: 3, name: 'French Toast', price: 280 , image: require('../utils/images/frest toast.jpeg') },
    { id: 4, name: 'Beacon', price: 400 , image: require('../utils/images/beacon.jpeg') },
    { id: 5, name: 'Chopsy', price: 350 , image: require('../utils/images/gallery8.jpg') },
    { id: 6, name: 'Eggs', price: 180 , image: require('../utils/images/gallery7.jpg') }
  ],
  lunch: [
    { id: 7, name: 'Grilled Chicken', price: 600 , image: require('../utils/images/gallery12.jpg') },
    { id: 8, name: 'Burger & Fries', price: 590 , image: require('../utils/images/gallery10.jpg') },
    { id: 9, name: 'Pasta Alfredo', price: 480 , image: require('../utils/images/gallery22.jpg') },
    { id: 10, name: 'Fish', price: 450 , image: require('../utils/images/gallery5.jpg') },
    { id: 11, name: 'Pork', price: 530 , image: require('../utils/images/gallery8.jpg') },
    { id: 12, name: 'Alfredo', price: 800 , image: require('../utils/images/gallery2.jpg') }
  ],
  dinner: [
    { id: 13, name: 'Steak', price: 750 , image: require('../utils/images/gallery9.jpg') },
    { id: 14, name: 'Salmon', price: 990 , image: require('../utils/images/gallery6.jpg') },
    { id: 15, name: 'Vegetable Stir Fry', price: 490 , image: require('../utils/images/gallery4.jpg') },
    { id: 16, name: 'Kottu', price: 950 , image: require('../utils/images/kottu.jpeg') },
    { id: 17, name: 'Rice & Curry', price: 900 , image: require('../utils/images/rice.jpeg') },
    { id: 18, name: 'Pizza', price: 490 , image: require('../utils/images/pizza.jpeg') }
  ]
};

const Menu = () => {
  const [category, setCategory] = useState('breakfast');
  const [cart, setCart] = useState([]);
  

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={menuStyles.container}>
      <header style={menuhead} >
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontSize: '60px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Menu</h1>
        </motion.div>
      </header>

      <div style={menuStyles.categoryContainer}>
        {Object.keys(menuData).map((cat) => (
          <motion.button 
            key={cat} 
            style={{ ...menuStyles.categoryButton, ...(category === cat ? menuStyles.activeCategory : {}) }}
            onClick={() => setCategory(cat)}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}   
            animate={{ opacity: category === cat ? 1 : 0.6 }} 
            transition={{ duration: 0.3 }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>
      
      <div style={menuStyles.content}>
        <motion.div 
        style={menuStyles.menuItems}
        key={category} 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -10 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
        >

          <AnimatePresence mode="wait">
          {menuData[category].map((item) => (
            <motion.div 
            key={item.id} 
            style={menuStyles.itemCard}
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
              <img src={item.image} alt={item.name} style={menuStyles.itemImage} />
              <h3>{item.name}</h3>
              <p>Rs. {item.price}</p>
              <button style={menuStyles.addButton} onClick={() => addToCart(item)}>Add to Cart</button>
            </motion.div>
          ))}
          </AnimatePresence>
          </motion.div>
        
        
        <div style={menuStyles.cart}>
          <h2>Your Cart</h2>

          <div style={menuStyles.cartItemsContainer}>

          {cart.length === 0 ? <p>Your Cart looks a little empty.</p> : 
            cart.map((item, index) => (
              <div key={index} style={menuStyles.cartItem}>
                <span>{item.name} (x{item.quantity}) - Rs. {item.price * item.quantity}</span>
                <button
                 style={menuStyles.removeButton}
                 onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}

          </div>
          

          
           <h3 style={menuStyles.totalAmount}>Total: Rs. {totalAmount}</h3>
          <button style={menuStyles.checkout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;


