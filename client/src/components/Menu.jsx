import React, { useState , useEffect } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import { FaShoppingCart , FaPlus, FaMinus } from 'react-icons/fa';
import MenuBg from "../utils/images/menu-section-img.jpg"; 

const API_URL = "http://localhost:5001/api/menu";

const menuStyles = {
  container: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to bottom, #fff5f0, #fefefe)'
  },
  header: {
    width: '100%', backgroundColor: '#b22222', color: 'white', padding: '20px', textAlign: 'center', fontSize: '24px', fontWeight: 'bold'
  },
  categoryContainer: {
    display: 'flex', justifyContent: 'center', gap: '15px', margin: '20px 0', flexWrap: 'wrap'
  },
  categoryButton: {
    padding: '10px 25px', fontSize: '16px', borderRadius: '30px', border: 'none', cursor: 'pointer', background: 'linear-gradient(90deg, #ff7e5f, #feb47b)', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'
  },
  activeCategory: {
    transform: 'scale(1.05)', background: 'linear-gradient(90deg, #f85032, #e73827)'
  },
  content: {
    display: 'flex', width: '90%', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap'
  },
  menuItems: {
    width: '100%', maxWidth: '900px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px'
  },
  itemCard: {
    borderRadius: '16px', padding: '15px', textAlign: 'center', background: 'white', boxShadow: '0px 8px 20px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out'
  },
  addButton: {
    background: 'linear-gradient(to right, #b22222, #ff6347)', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer', marginTop: '10px', fontSize: '15px', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  cart: {
    width: '350px', maxHeight: '670px', overflowY: 'auto', borderRadius: '16px', backgroundColor: '#fff', minHeight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
  },
  cartItem: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderRadius: '12px', backgroundColor: '#f3f3f3', marginBottom: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
  },
  checkout: {
    marginTop: '20px', backgroundColor: '#b22222', color: 'white', padding: '12px', border: 'none', borderRadius: '25px', cursor: 'pointer', width: '60%', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  itemImage: {
    width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '10px'
  },
  removeButton: {
    backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold'
  },
  totalAmount: {
    marginTop: 'auto', fontSize: '20px', fontWeight: 'bold'
  },
  cartItemsContainer: {
    flexGrow: 1, overflowY: 'auto', width: '100%' , textAlign: "center"
  },
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


/*
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
*/

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState('breakfast');
  const [cart, setCart] = useState([]);

   // Fetch menu items from backend
   useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenu();
  }, []);

  // Filter items by selected category
  const filteredItems = menuItems.filter(item => item.category.toLowerCase() === category);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem._id === item._id 
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

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleIncrease = (index) => {
    setCart(cart.map((item, i) => 
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
  
  const handleDecrease = (index) => {
    setCart(cart.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    ));
  };

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
        {["breakfast", "lunch", "dinner"].map((cat) => (
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
        
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -10 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
        >

          <AnimatePresence mode="wait">
          {filteredItems.map((item) => (
            <motion.div 
            key={item._id} 
            style={menuStyles.itemCard}
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
              <img src={item.imageUrl} alt={item.name} style={menuStyles.itemImage} />
              <h3>{item.name}</h3>
              <p>Rs. {item.price}</p>
              <button style={menuStyles.addButton} onClick={() => addToCart(item)}>Add to Cart</button>
            </motion.div>
          ))}
          </AnimatePresence>
          </motion.div>
        
        
        <div style={menuStyles.cart}>
          <h2><FaShoppingCart/> Your Cart</h2>

          <div style={menuStyles.cartItemsContainer}>

          {cart.length === 0 ? <p>Your Cart looks a little empty.</p> : 
            cart.map((item, index) => (
              <div key={index} style={menuStyles.cartItem}>
                <span style={{ flex: 1 }}>{item.name} (x{item.quantity}) - Rs. {item.price * item.quantity}</span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>

                <button 
              onClick={() => handleDecrease(index)} 
              disabled={item.quantity === 1} 
              style={{
                backgroundColor: 'blue', 
                color: 'white', 
                border: 'none', 
                padding: '5px 8px', 
                borderRadius: '5px', 
                cursor: item.quantity === 1 ? 'not-allowed' : 'pointer',
                opacity: item.quantity === 1 ? 0.5 : 1
              }}
            >
              <FaMinus size={12} />
            </button>

            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.quantity}</span>

            <button 
              onClick={() => handleIncrease(index)} 
              style={{
                backgroundColor: 'green', 
                color: 'white', 
                border: 'none', 
                padding: '5px 8px', 
                borderRadius: '5px', 
                cursor: 'pointer',
                marginRight: "10px"
              }}
            >
              <FaPlus size={12} />
            </button>
            </div>

                <button
                 style={menuStyles.removeButton}
                 onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}

          </div>
          

          
           <h3 style={menuStyles.totalAmount}>Total: Rs. {totalAmount}</h3>
          <button style={{...menuStyles.checkout ,backgroundColor: cart.length === 0 ? 'black' : '#b22222',cursor: cart.length === 0 ? 'not-allowed' : 'pointer', opacity: cart.length === 0 ? 0.6 : 1 }} disabled={cart.length === 0} >Checkout</button>
          {cart.length === 0 && <p style={{ color: 'red' }}>Add items to checkout</p>}
        </div>
      </div>
    </div>
  );
};

export default Menu;


