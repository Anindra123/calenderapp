import './App.css'
import Navbar from './component/NavBar/navbar'
import LeftSideBar from './component/LeftSideBar/leftSideBar'
import DateGrid from './component/DateGrid/DateGrid'
import RightSideBar from './component/RightSideBar/rightSideBar'
import { useState } from 'react'
import { Event } from './types/EventType'
import { EventContext } from './context/EventContext'

function App() {
  const [today, setToday] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);


  return (
    <>
      <div className='main-content' >
        <Navbar today={today} setToday={setToday} />
        <div className='sub-content'>
          <LeftSideBar setToday={setToday} today={today} />
          <EventContext.Provider value={{ events: events, setEvents: setEvents }}>
            <DateGrid today={today} />
          </EventContext.Provider>
          <RightSideBar />
        </div>
      </div>
    </>
  )
}

export default App
