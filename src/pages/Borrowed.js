import React from 'react'
import Navbar from '../components/Navbar'
import ListCard from '../components/ListCard'
import styled from 'styled-components'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
`;
const WrapperList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    margin-top: 100px;
`;

const Borrowed = () => {
    const desc = 'For everyone can borrow this it is free to use but you have to return this for time schedule '
    return (
        <div>
            <Navbar/>
            <Wrapper>
                <WrapperList>
                    <ListCard img={img3} title={'Boast'} desc={desc} status={'borrowed'}/>
                    <ListCard img={img4} title={'airplane'} desc={desc} status={'borrowed'}/>
                </WrapperList >
            </Wrapper>
        </div>
    )
}

export default Borrowed
