import React from 'react'
import styled from 'styled-components'
import {Link,useLocation} from 'react-router-dom'
const NavbarStyle = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 75px;
    background-color: #4980FF;
    align-items: center;
    justify-content: space-between;
    color: white;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 100%);
    z-index: 1;
`;
const UL = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;
const LI = styled.li`
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px;
    letter-spacing: 1px;
    text-decoration: none;
    :hover{
        border: none;
        color: grey;
        background-color: white;
        border-radius: 10px;

    }
`;
const Logo = styled.h1`
    letter-spacing: 2px;
    margin-left: 20px;

`;
const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    position: relative;
    :hover{
        color: grey;
    }
`;

const Navbar = () => {
    const location = useLocation();
    return (
        <NavbarStyle>
            <Logo><StyledLink to='/'> ALAUDI</StyledLink></Logo>
            {location.pathname === '/' && (
                <UL>
                <LI><StyledLink to='equipment'>All equipment</StyledLink></LI>
                <LI><StyledLink to='borrowed'>Borrowed</StyledLink></LI>
                <LI><StyledLink to='ready'>Ready to borrow</StyledLink></LI>
                <LI><StyledLink to='log'>Log</StyledLink></LI>
                <LI style={{marginRight:20,fontSize:20}}><StyledLink to='login'>Login</StyledLink></LI>
            </UL>
            )}
            
        </NavbarStyle>
    )
}

export default Navbar
