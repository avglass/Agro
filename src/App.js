import React from 'react';
import styled from 'styled-components';
import { A } from 'hookrouter';
import { Content }  from './component/Content';

const SideBar = styled.div`
	background: #D9F7FB;
	height:100vh;
	width:20%;
	position:fixed;
	top:0;
	left:0;
	z-index:5;
	outline:none;
	
	.avatar{
		background:rgba(0,0,0,0.1);
		padding:2em 0.5em;
		text-align:center;
		
		img{
			width:100px;
			border-radius:50%;
			overflow:hidden;
			border:4px solid #DDA3FC;
			box-shadow:0 0 0 4px rgba(255,255,255,0.2);
		}
		
		h2{
			font-weight:normal;
			margin-bottom:0;
		}		
    }
`;

const Links = styled.ul`
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;

a {
    color: black;
    text-decoration: none;
`;

const StyledA = styled.a`
    text-decoration: none;
`;

// App is the layout of the page
export const App = () => (
    <div>
        <SideBar>
            <header className="avatar">
                <img src='https://66.media.tumblr.com/a5c43b2ad04d2df4b89cfed4b8b4ea77/tumblr_no41ifB9zT1r47bczo1_1280.jpg'/>
                <h2>Angela Glass</h2>
                <StyledA href="https://github.com/avglass/React-webpack-boilerplate">Github</StyledA>

            </header>
               
            <Links>
                <A href="/">Home</A> <br />
                <A href="/something">Something here</A>
            </Links>
        </SideBar>

        {/* content is where the different pages load */}
        <Content />
    </div>
)
