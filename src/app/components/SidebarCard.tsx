import React, {useState} from 'react';
import styled from 'styled-components';
import { BagFill } from 'react-bootstrap-icons';
import { XCircleFill } from 'react-bootstrap-icons'; // import the X icon

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
    quantity: number;
}

interface CardProps {
    product: Product;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function SidebarCard({ product, cart, setCart }: CardProps) {
   

    function removeCart(remove: number) {
        // remove the product from the cart
        const newCart = cart.filter((product: Product) => product.id !== remove);
        setCart(newCart);

    }

    function addQuantity() {
        const newCart = cart.map((productItem) =>
            productItem.id === product.id ? { ...productItem, quantity: productItem.quantity + 1 } : productItem
        );
        setCart(newCart);
    }

    function subtractQuantity() {
        if (product.quantity === 1) {
            removeCart(product.id);
            return;
        }

        const newCart = cart.map((productItem) =>
            productItem.id === product.id ? { ...productItem, quantity: productItem.quantity - 1 } : productItem
        );
        setCart(newCart);
    }

    return (
        <div key={product.id}>
            <Product>
               
                    <Image src={product.photo} alt={product.name} />

                    <Title>{product.name}</Title>
                    <DivQtd>
                        <p>Qtd:</p>
                        <DivNumber>
                            <ButtonSub onClick={subtractQuantity}>-</ButtonSub>
                            <Input value={product.quantity} readOnly />
                            <ButtonSum onClick={addQuantity}>+</ButtonSum>
                        </DivNumber>
                    </DivQtd>

                    <Price>R${product.price * product.quantity}</Price>
                    <Button onClick={() => removeCart(product.id)}>
                        <XCircleFill />
                    </Button>
                



            </Product>


        </div>
    )
}

const Product = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: white;
Width:385px;
Height:101px;
margin-top: 30px;
border-radius: 10px;
`;

const Image = styled.img`
width: 70px;
background-color: red;
`;

const Title = styled.p`
color:#474747;
font-size: 18px;
width: 30%;
`;

const DivQtd = styled.div`
display: flex;
flex-direction: column;
width: 30%;
align-self: start;

p{
    font-size: 10px;
    
}
`;

const DivNumber = styled.div`
width: 64px;
height: 30px;
margin: 0 10px;
display: flex;
align-items: center;
flex-direction: row;
border: 1px solid #bfbfbf;
border-radius: 5px;
`;

const ButtonSub = styled.button`
background-color: transparent;
border: none;
width: 20px;
border-right: 1px solid #bfbfbf;
height: 20px;

`;

const ButtonSum = styled.button`
background-color: transparent;
border: none;
width: 20px;
border-left: 1px solid #bfbfbf;
height: 20px;

`;

const Input = styled.input`
width: 14px;
border: none;
text-align: center;
`;

const Price = styled.p`
color:#000000;
font-weight: 800;
`;

const Button = styled.button`
background-color: transparent;
border: none;
align-self: start;
cursor: pointer;
font-size: 20px;
position: relative; 
bottom: 5px;
right: -10px;
}
    `