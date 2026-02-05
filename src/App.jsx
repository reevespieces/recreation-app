import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Courses from './components/Courses.jsx'
import Tasks from './components/Tasks.jsx'
import './App.css'
import Calendar from './components/Calendar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='page-container'>
        <Navbar/>
        <div classname = "courses">
          <Courses/>
          <Tasks/>
          <Calendar />
        </div>
      </div>
        
    </>
  )
}

export default App
