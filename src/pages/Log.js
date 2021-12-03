import React from 'react'
import Navbar from '../components/Navbar'
import DataTable from '../components/DataTable';
import styled from 'styled-components';

const StylesLog = styled.div`
    display: flex; 
    min-height: 100vh;
    justify-content: center;

`;
const Wrapper = styled.div`
    /* margin-top: 100px; */
    width: 60%;
    display: flex;
    margin: 100px 20px 20px 20px;
    height: 500px;
    @media (max-width: 1000px){
        width: 100%;
    }

 
`;
const Log = () => {
    return (
        <StylesLog>
            <Navbar/>
            <Wrapper>
              <DataTable/>
            </Wrapper>
        </StylesLog>
    )
}

export default Log
