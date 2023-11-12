import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import DashBoardPage from './pages/DashBoardPage';
import PasssengersPage from './pages/Passengers/PassengersPage';
import TripsPage from './pages/TripsPage';
import ChatPage from './pages/ChatsPage';
import Analytics from './pages/AnalyticsPage';
import { Sidebar } from './components/Sidebar/Sidebar';
import GroupsPage from './pages/GroupsPage';
import SupportPage from './pages/SupportPage';
import AgentsPage from './pages/AgentsPage';
import NotificationPage from './pages/NotificationsPage';
import SettingsPage from './pages/Settings';
function App() {
  
  return (
    <>
    <Router>
        <Sidebar sideBarName='side-bar' activeLink='dashboard'  className="sidebar-instance"
      frame="https://c.animaapp.com/ZaPTMwBP/img/frame-18-1.svg"
      frameExclude="https://c.animaapp.com/ZaPTMwBP/img/exclude-9.svg"
      navLinkFrameWrapperExclude="https://c.animaapp.com/ZaPTMwBP/img/exclude-10.svg"
      navLinkInteractiveState="active"
      sideBar="side-bar" />
        <Routes>
          <Route path='/' element={<DashBoardPage />} />
          <Route path='/passengers' element={<PasssengersPage />} />            
          <Route path='/trips' element={<TripsPage />} /> 
          <Route path='/groups' element={<GroupsPage />} />    
          <Route path='/support' element={<SupportPage />} />   
          <Route path='/agents' element={<AgentsPage />} /> 
          <Route path='/notifications' element={<NotificationPage />} /> 
          <Route path='/chats' element={<ChatPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
        </Router>
    </>
  )
}

export default App;
