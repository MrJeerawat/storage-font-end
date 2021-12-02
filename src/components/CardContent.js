import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
const Card = styled.div`
    display: flex;
    justify-content: center;
    width: 600px;
    margin: 25px;
    margin-top: 100px;
    height: 590px;
    border: none;
    border-radius: 20px;
    box-shadow: 2px 2px 22px 0px rgba(171,171,171,1);
    -webkit-box-shadow: 2px 2px 22px 0px rgba(171,171,171,1);
    -moz-box-shadow: 2px 2px 22px 0px rgba(171,171,171,1);
    background-color: white;
    flex-wrap: wrap;
    cursor: pointer;
`;
const CardTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 4px;
    align-items: center;
    justify-content: center;
    display: flex;
    top: 0;
    height: 70px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 30px;
    text-shadow: -1px 2px rgba(128, 128, 128, 0.5);
    border-bottom: 3px solid;
    width: 60%;
`;
const CardBody = styled.div`
    width: 40%;
    height: 40%;
    /* background-color: green; */
    /* border: 2px solid; */
    border-color: #999;
    margin: 20px 10px 20px 10px;
    border-radius: 20px;


`;
const CardBodyWrap = styled.div`
    width: 100%;
    height: 80%;
    /* background-color: orange; */
    margin: 20px 10px 20px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform .2s;
    :hover{
        
        transform: scale(1.3);
        border: none;
    }
`;

const CardContent = ({title}) => {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardBodyWrap>
                <CardBody>
                    <Img src={img1} alt={img1}/>
                </CardBody>
                <CardBody>
                    <Img src={img2} alt={img2} />
                </CardBody>
                <CardBody>
                    <Img src={img3} alt={img3} />
                </CardBody>
                <CardBody>
                    <Img src={img4} alt={img4} />
                </CardBody>
            </CardBodyWrap>
            
        </Card>
    )
}

export default CardContent
