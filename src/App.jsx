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
