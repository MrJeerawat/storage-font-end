import React from 'react'
import styled from 'styled-components'
import CardContent from './CardContent';
import { Link } from 'react-router-dom';
const Card = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    position: relative;
    transition: transform .2s;
    :hover{
        
        transform: scale(1.1);
    }
`;
const Contents = ({setOpenModal}) => {
    console.log('log here',typeof(setOpenModal));
    return (
        <>
            <Card>
                <StyledLink to='equipment'><CardContent title={'All Equipments'} onClick={()=>setOpenModal(true)}/></StyledLink>
            </Card>
            <Card>
                <StyledLink to='borrowed'><CardContent title={'Borrowed'} /></StyledLink>
            </Card>
            <Card>
                <StyledLink to='ready'><CardContent title={'Ready to borrow'} /></StyledLink>
            </Card>
            <Card>
                <StyledLink to='log'><CardContent title={'Log'} /></StyledLink>
            </Card>
        </>
    )
}

export default Contents
