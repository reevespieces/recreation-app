import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Courses from './components/Courses.jsx'
import Tasks from './components/Tasks.jsx'
import './App.css'
import Calendar from './components/Calendar.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import CalendarPage from './pages/CalendarPage.jsx'
import TasksPage from './pages/TasksPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <div className='page-container'>
        <Navbar />
        <Routes>
          <Route path ="/" element={<HomePage />} />
          <Route path = "/calendar" element={<CalendarPage/>} />
          <Route path = "/tasks" element={<TasksPage/>} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
