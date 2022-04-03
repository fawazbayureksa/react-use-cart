import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import Cart from './Cart.js';
import {CartProvider} from 'react-use-cart';

function App() {
  return (
    <div>
        <CartProvider >
          <Home />
          <Cart />
        </CartProvider>
    </div>
  )
}

export default App;
