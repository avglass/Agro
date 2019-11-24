import React from 'react';
import styled from 'styled-components';
import { WithContext } from '../Context/mainContext';

const Title = styled.h2`
    text-align: center;
`;

const Input = styled.input`
    content: center;
    width: 30px;
    height: 15px;
`;

const Home = props => (  
    <div>
        <Title> React/Webpack </Title>

        <h4>Dependencies:</h4>

        <ul>
            <li>React</li>
            <li>Context</li>
            <li>Hookrouter</li>
            <li>Webpack</li>
            <li>Styled-components</li>
        </ul>

        <p>You should click the github link and look at my .src/app.js file</p>

        {/* When the user tries to type or submit setstate throws errors */}

        <h3>{props.context.value.input}</h3> 

        <Input type="text" name="input1" onChange={props.context.actions.updateValue}></Input>
        <button type="button" onClick={props.context.actions.submit}> submit </button>
    </div>
)

export default WithContext(Home);