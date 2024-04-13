"use client"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from "./Card"


interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
}

interface StoreProps {
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Store({ cart, setCart}: StoreProps) {
    const [products, setProducts] = useState([] as Product[]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=price&orderBy=DESC');
                if (!response.ok) {
                    throw new Error('Erro ao carregar os produtos');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Erro:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container>
            {products.map((product) => (
          <Card cart={cart} setCart={setCart} product={product}/>
            ))}
        </Container>
    );
}



const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 100px 100px;
`;

