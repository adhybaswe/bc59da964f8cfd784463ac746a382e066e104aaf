import React,{useState} from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Header from './components/Header';
import Rating from './components/Rating';
import Button from './components/Button';
import Product from './components/Product';
import Cart from './components/Cart';
import Modal from './components/Modal';
import ButtonGroup from './components/ButtonGroup';

const Wrapper = styled.div`
  padding-top:124px;
  padding-bottom:56px;
  margin:0 auto;
  max-width:768px;
`;

const DateTitle = styled.strong`
  display:block;
  margin: 0 16px;
`;

function App() {
  const [cartActive,setCartActive] = useState(false);
  const [modal,setModal] = useState(false);

  const onAdd = () => {
    setCartActive(true)
  }

  const onclose = () => {
    setModal(false)
  }

  const onOpenModal = () => {
     setModal(true) 
  }

  return (
    <Wrapper>
      <Modal active={modal} onclose={onclose} />
      <Header onButtonClick={onOpenModal} />
      <ButtonGroup />
      <DateTitle>Jum'at. 6 Maret 2020</DateTitle>
      <Product 
        title="Roasted Chicken with Scrambled Egg"  
        image="http://localhost:3000/images/sample-1.jpg"  
        category="Uptown Lunch"  
        author="by Kulina"  
        price={35000}  
        rating={4.5}
        onAdd={onAdd}
      />
      <Product 
        title="Roasted Chicken with Scrambled Egg"  
        image="http://localhost:3000/images/sample-1.jpg"  
        category="Uptown Lunch"  
        author="by Kulina"  
        price={35000}  
        rating={4.5}
        onAdd={onAdd}
      />
      <Cart active={cartActive} />
    </Wrapper>
  );
}

export default App;
