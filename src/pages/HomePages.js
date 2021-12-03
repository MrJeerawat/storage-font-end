import React from 'react'
import Navbar from '../components/Navbar'
import Contents from '../components/Contents'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    z-index: -1;
    
`;
const HomePages = ({setOpenModal}) => {
    // console.log(callComponents);
    return (
        <div>

            <Navbar />
            <Wrapper> 
                <Contents setOpenModal={setOpenModal}/>
            </Wrapper>
        </div>
    )
}

export default HomePages
