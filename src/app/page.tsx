"use client" 
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./components/Store";
import styled from 'styled-components';
import { useState } from 'react';
import Sidebar from "./components/Sidebar";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  quantity: number;
}


const Container = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 0;
`;



export default function Home() {
  const [cart , setCart] = useState([] as Product[]);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Container>
      <Header cart={cart} setCart={setCart}  showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Store cart={cart} setCart={setCart} />
      <Footer />
      {showSidebar && <Sidebar cart={cart} setCart={setCart}   showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
    </Container>
  );
}
