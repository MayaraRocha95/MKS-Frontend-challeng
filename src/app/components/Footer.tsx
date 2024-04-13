"use client" 
import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
background-color: #eeeeee;
margin:0;
text-align: center;
align-items: center;

p{
    font-size: 14px;
    color:#474747;
    font-weight:500;
}
`;


const Footer= () => {
    return (
        <FooterContainer>
            <p>MKS sistemas © Todos os direitos reservados</p>
            
        </FooterContainer>
    );
}

export default Footer;
