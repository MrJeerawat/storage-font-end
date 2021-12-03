import React from 'react'
import styled from 'styled-components'

const ModalStyle = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
 
`;
const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    align-items: center;
    position: absolute;
    text-align: center;
    align-items: center;
    margin-bottom: 600px;
`;
const ButtonX = styled.button`
    padding: 20px;
    background-color: green;
`;
const ModalComponent = () => {
    return (
        <ModalStyle>
            <ModalContent>
                <ButtonX>X</ButtonX>
                <p>hello</p>
            </ModalContent>
        </ModalStyle>
    )
}

export default ModalComponent
