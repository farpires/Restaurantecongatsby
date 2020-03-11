import React from 'react';
import Helmet from 'react-helmet';
import {Global, css } from '@emotion/core';
import Header from './header';

const Layout = (props) => {
    return ( 
        <>
        <Global 
        styles={css`
        html{
            font-size:62.5%;
            font-family:  font-family: 'Source Code Pro', sans-serif;
        }
        body {
            font-size:18px;
            font-size:1.8rem;
            line-height:1.5;
        }
        h1, h2{
            font-family: ''
        }
        h1,h2,h3{
            margin: 0;
            line-height: 1.5;
        }
        h1,h2{
            font-family: 'Dancing Script', sans-serif;
        }
        h3{
        
            font-family: 'Source Code Pro', serif;
        }
        ul{
            list-style:none;
            margin:0;
            padding:0;
             
        }
        
        `}   
        />
        <Helmet>
                <title>Gatsby Restaurante</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Dancing+Script:700|Source+Code+Pro:400,700&display=swap" rel="stylesheet"/>

        </Helmet>
            <Header/>
            {props.children}
        
        </>
     );
}
 
export default Layout;