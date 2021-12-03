import React from 'react'
import styled from 'styled-components'

const ModalStyle = styled.div`
    width: 500px;
    height: 70vh;
    border: 1px solid;
    display: flex;
    align-items: center;
`;
const ModalContent = styled.div`
    display: flex;
    justify-content: center;
`;
const ButtonX = styled.button`
    padding: 20px;
    background-color: green;
`;
const Modal = () => {
    return (
        <ModalStyle>
            <ModalContent>
                <ButtonX>X</ButtonX>
                <p>hello</p>
            </ModalContent>
        </ModalStyle>
    )
}

export default Modal
