import React from 'react';
import styled from 'styled-components';
import { BagFill } from 'react-bootstrap-icons';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
}

interface CardProps {
    product: Product;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Card({product, cart, setCart}: CardProps) {

function addCart(){
    // verificar se o produto já está no carrinho se estiver alterar o campo quantity
    // se não estiver adicionar o produto no carrinho

    const productExists = cart.find((productItem) => productItem.id === product.id);

    if(productExists){
        const newCart = cart.map((productItem) => 
            productItem.id === product.id ? {...productItem, quantity: productItem.quantity + 1} : productItem
        );
        setCart(newCart);
        return;
    }

    setCart([...cart, {...product, quantity: 1}]);
}

return(
    <div key={product.id}>
    <Product>
        <Image src={product.photo} alt={product.name} />
        <Box>
            <Title>{product.name}</Title>
            <Price>${product.price}</Price>
        </Box>
        <Description>{product.description.substring(0, 40)}...</Description>
       
    </Product> 
    <Button onClick={addCart}> <BagFill /> Comprar</Button>
    </div> 
)
}

const Product = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
    margin: 15px 10px 0 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 200px;

`;

const Image = styled.img`
    margin: 0 auto;
    height: 200px;
    max-width: 200px;
`;

const Title = styled.h2`
    font-size: 14px;
    width: 80%;
    color:#474747;
    font-weight:500;
`;

const Price = styled.p`
    background-color: #373737;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
    height: 15px;
    font-size: 12px;
`;

const Description = styled.p`
color:#959595;
font-size: 10px;
font-weight:400;
`;

const Box = styled.div`
    width:200px;
    display: flex;
    
`;
const Button = styled.button`
    background-color: blue;
    width: 220px;
    border-radius: 0 0 10px 10px;
    border:none;
    background-color: #0f52ba;
    color: white;
    padding: 5px;
    margin: 0 10px;
    font-weight: bold;
    cursor: pointer;
    `