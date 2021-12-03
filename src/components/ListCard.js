import React,{useState,useEffect} from 'react'
import styled from 'styled-components'


const StyleListCard = styled.div`
    width: 690px;
    height: 250px;
    /* border:1px solid; */
    margin: 0px 20px 20px 20px;
    box-shadow: 2px 2px 22px 0px rgba(171,171,171,1);
    -webkit-box-shadow: 2px 2px 22px 0px rgba(171,171,171,1);
    -moz-box-shadow: 2px 2px 22px 0px rgba(171,171,171,1);
    border-radius: 20px;
    display: flex;
    background-color: white;
    transition: transform .2s;
    cursor: pointer;
    :hover{
        
        transform: scale(1.01);
    }
    @media (max-width: 1245px) {
        width: 100%;
    }
    @media (max-width: 480px) {
        width: 100%;
        display: block;
        height: auto;
    }
`;
const WrapperImg = styled.div`
    flex:2;
    /* border:1px solid; */
    margin: 5px;
    border-radius: 20px;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: transform .2s;
    cursor: pointer;
    :hover{
        
        transform: scale(1.1);
    }
`;
const Contents = styled.div`
    flex: 3;
    margin: 5px;
    
`;


const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    padding: 5px;
    justify-content: center;
`;
const Body = styled.div`
    height: 60%;
    padding: 5px;
    font-weight: 300;
    object-fit: cover;
`;
const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
`;
const Span = styled.span`
    color: ${props=>props.colorStatus};
    margin-left: 5px;
`;

const ListCard = ({img,title,desc,status}) => {
    const [colorStatus,setColorStatus] = useState('green')
    useEffect(() => {
        status === 'borrowed'?setColorStatus('red'):setColorStatus('green')
    },[status])
    return (
        <StyleListCard>
            <WrapperImg>
                <Img src={img} alt='' />
            </WrapperImg>
            
            <Contents>
                <Title>{title}</Title>
                <Body>{desc}</Body>
                <Footer>starus is <Span colorStatus={colorStatus}>{status}</Span></Footer>
            </Contents>
        </StyleListCard>
    )
}

export default ListCard
