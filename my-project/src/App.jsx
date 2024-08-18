import './App.css';
import HomePage from './Pages/HomePage';
//import AddtoCart from './Pages/AddtoCart';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useEffect, useState, React } from 'react';
import axios from 'axios';
import AddtoCart from './Pages/AddtoCart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    
    if (existingProduct) {
      // Update the quantity of the existing product
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add the new product to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    setCartCount(cartCount + 1);
    showAddToCartFeedback();
  };

  const showAddToCartFeedback = () => {
    alert('Item added to cart!');
  };

  
  return (
    
        
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Registration />} />       */}
      
      <Route path='/'  element={<HomePage />} />
      <Route path='/cart' element={<AddtoCart />} />
    </Routes>
    </BrowserRouter>
  );
}



export default App
