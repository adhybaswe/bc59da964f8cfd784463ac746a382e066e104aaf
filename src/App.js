import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Rating from './components/Rating';
import Button from './components/Button';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar />
      <Product 
        title="Roasted Chicken with Scrambled Egg"  
        image="http://localhost:3000/images/sample-1.jpg"  
        category="Uptown Lunch"  
        author="by Kulina"  
        price={35000}  
        rating={4.5}
      />
      <Product 
        title="Roasted Chicken with Scrambled Egg"  
        image="http://localhost:3000/images/sample-1.jpg"  
        category="Uptown Lunch"  
        author="by Kulina"  
        price={35000}  
        rating={4.5}
      />
      <Cart />
    </div>
  );
}

export default App;
