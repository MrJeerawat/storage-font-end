import React,{useState} from 'react'
import styled from 'styled-components'
import HomePages from './pages/HomePages';
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Log from './pages/Log'
import ReadyToBorrow from './pages/ReadyToBorrow'
import AllEquipment from './pages/AllEquipment'
import Borrowed from './pages/Borrowed'
import ModalComponent from './components/ModalComponent';

const Containner = styled.div`
width: 100%;
background: rgb(220,255,255);
background: linear-gradient(90deg, rgba(220,255,255,1) 0%, rgba(204,255,252,1) 47%, rgba(255,207,239,1) 100%);
flex-wrap: wrap;
`;

const App = () => {
  const [openModule,setOpenModal] = useState(false);
  console.log(typeof(setOpenModal));
  return (
    <BrowserRouter>
      <Containner>
        <Routes>
          <Route exact path='/' element={<HomePages serOpenModal={setOpenModal}/>}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/equipment' element={<AllEquipment />}></Route>
          <Route exact path='/borrowed' element={<Borrowed />}></Route>
          <Route exact path='/ready' element={<ReadyToBorrow />}></Route>
          <Route exact path='/log' element={<Log />}></Route>
        </Routes>
        
      </Containner>
      {openModule &&<ModalComponent/>}
    </BrowserRouter>
  )
}

export default App

