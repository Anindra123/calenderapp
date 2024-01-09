import './App.css'
import Navbar from './component/NavBar/navbar'
import LeftSideBar from './component/LeftSideBar/leftSideBar'
import DateGrid from './component/DateGrid/DateGrid'
import RightSideBar from './component/RightSideBar/rightSideBar'
import { useState } from 'react'

function App() {
  const [today, setToday] = useState(new Date());



  return (
    <>
      <div className='main-content' >
        <Navbar today={today} setToday={setToday} />
        <div className='sub-content'>
          <LeftSideBar />
          <DateGrid today={today} />
          <RightSideBar />
        </div>
      </div>
    </>
  )
}

export default App
