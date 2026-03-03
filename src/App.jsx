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
import AddEventPage from './pages/AddEventPage.jsx';


function App() {

  const [courses, setCourses] = useState([
        { name: "CGT 390" },
        { name: "FLM 361" },
        { name: "GS 210" },
        { name: "PHYS 220" },
        { name: "CGT 25001" },
        { name: "FLM 371" }
    ]);

    const addCourse = (course) => {
    setCourses(prev => [...prev, course]);
  };

  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    setEvents((prev) => [...prev, event]);
  };


  return (
    <HashRouter>
      <div className='page-container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage courses={courses}/>} />
          <Route path="/addcourse" element={<AddCoursePage addCourse={addCourse}/>} />
          <Route path="/addevent" element={<AddEventPage onAddEvent={handleAddEvent}/>} />
          <Route path="/calendar" element={<CalendarPage events={events}/>} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
