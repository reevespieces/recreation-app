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
import SettingsPage from './pages/SettingsPage.jsx'


function App() {

  return (
    <HashRouter>
      <div className='page-container'>
        <Navbar />
        <Routes>
          <Route path ="/" element={<HomePage />} />
          <Route path = "/calendar" element={<CalendarPage/>} />
          <Route path = "/tasks" element={<TasksPage/>} />
          <Route path = "/settings" element={<SettingsPage/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
