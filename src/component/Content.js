import React from 'react';
import styled from 'styled-components';
import { useRoutes } from 'hookrouter';
import  { Home }  from './Home';
import { Two } from './pageTwo';
import { NoPageFound } from './NoPageFound';

const Page = styled.div`
    margin-left: 22%;
`;

// This is where the different routes are defined and tied to corresponding component
export const routes = {
    "/": () => <Home />,
    "/something": () => <Two />,
  };

// routeResult is what renders out components
export const Content = () => {
    const routeResult = useRoutes(routes);

    return (
        <Page>
            {routeResult || <NoPageFound/>}
        </Page>
    )   
}  