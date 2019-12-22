import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    text-align: center;
`;
const P = styled.p`
    font-size: 25px;
`;

export const Home = () => (  
    <div>
        <Title> React/Webpack </Title>
        
        <h4>Dependencies:</h4>
        
        <ul>
            <li>React</li>
            <li>Webpack</li>
            <li>Styled-components</li>
            <li>Hookrouter</li>
        </ul>
        
        <p>You should click the github link and look at my .src/app.js file</p>
    </div>
);