import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import CalendarPage from './pages/CalendarPage.jsx'
import TasksPage from './pages/TasksPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import NotFound from './pages/NotFound.jsx';
import AddCoursePage from './pages/AddCoursePage.jsx';


function App() {


  return (
    <HashRouter>
      <div className='page-container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addcourse" element={<AddCoursePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
