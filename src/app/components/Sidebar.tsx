"use client"
import React from 'react';
import styled from 'styled-components';
import { XCircleFill } from 'react-bootstrap-icons'; // import the X icon
import SidebarCard from './SidebarCard';


interface SidebarProps {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function SideBar({ cart, setCart, setShowSidebar, showSidebar }: SidebarProps) {

    return (
        <Container>
            <Header>
                <h1>Carrinho <br/>de compras</h1>
                <button onClick={() => setShowSidebar(!showSidebar)}><XCircleFill /></button>
            </Header>
            <CardContainer>
            {cart.map((product) => (
                <SidebarCard key={product.id} cart={cart} setCart={setCart} product={product} />
            ))}
            </CardContainer>
            <Total><h1>Total:</h1> <h1> R$ {cart.reduce((acc, product) => acc + (Number(product.price)* product.quantity), 0)}</h1>
            </Total>
            <Footer>
                <button>Finalizar compra</button>
            </Footer>
        </Container>
    );
}




const Container = styled.div`
background-color: #0f52ba;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
position:fixed;
top:0;
right:0;
width: 486px;
height: 100%;
`;
const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 40vh;
overflow-y: scroll;
`;

const Header = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 20px;
padding-top: 30px;

h1{
    color: white;
    font-size: 25px;
    margin: 0;
}

button{
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    margin: 0;
}

`

const Total = styled.div`
display: flex;
color: white;
justify-content: space-between;
align-items: center;
margin: 0 10px;
`
;

const Footer = styled.div`
background-color: #000000;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding: 25px;
position: fixed;
bottom: 0;
right: 0;
width: 436px;
button{
    background-color: transparent;
    cursor: pointer;
    color: white;
    font-size: 30px;
    border: none;
    font-weight: 700;
}
`
;
