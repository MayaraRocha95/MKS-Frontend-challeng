"use client" 
import React from 'react';
import styled from 'styled-components';
import { CartFill } from 'react-bootstrap-icons';


  interface HeaderProps {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Header({ cart, setCart, setShowSidebar, showSidebar}: HeaderProps) {

    function showCart(){
        setShowSidebar(!showSidebar);
    }

    console.log(cart)
    return (
        <HeaderContainer>
            <DivLogo>
                <h1>MKS</h1>
                <p>Sistemas</p>  
            </DivLogo>
         <Button  onClick={showCart}> <CartFill />{cart.length}</Button>
        
        </HeaderContainer>
    );
}




const HeaderContainer = styled.div`
background-color: #0f52ba;
margin:0;
text-align: center;
display: flex; 
justify-content: space-between; 
align-items: center;
padding: 10px 20px; 
height: 100px;

`;

const DivLogo = styled.div`
display: flex;
justify-content: center;
color:white;
align-items: center;
text-align: center;

h1{
font-weight: bold;
margin-right: 5px;
}

`;

const Button = styled.button`
background-color: white;
color: #000000;
border: none;
width: 90px;
height: 45px;
border-radius: 8px;
display: flex;
justify-content: space-around;
text-align:center;
align-items: center;
font-size: 20px;
`;
