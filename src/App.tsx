import { useState } from 'react'
import './App.css'
import Navbar from './component/NavBar/navbar'
import LeftSideBar from './component/LeftSideBar/leftSideBar'
import DateGrid from './component/DateGrid/DateGrid'
import RightSideBar from './component/RightSideBar/rightSideBar'

function App() {


  return (
    <>
      <div className='main-content' >
        <Navbar />
        <div className='sub-content'>
          <LeftSideBar />
          <DateGrid />
          <RightSideBar />
        </div>
      </div>
    </>
  )
}

export default App
