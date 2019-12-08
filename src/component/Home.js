import React from 'react';
import styled from 'styled-components';
import {WithContext} from '../Context/context';

const Title = styled.h2`
    text-align: center;
`;

export const Home = (props) => (  
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

        <input type="text"></input>

        <button type="button">Save</button>

        {console.log(props.values)}
        {console.log(props.actions)}

    </div>
)


export default WithContext(Home);