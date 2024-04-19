import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chat_page from './pages/Chat_page';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='flex'>  
          <div className='w-80'>
            <Sidebar />
          </div>
          <div className='w-screen flex justify-center items-center'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/chat' element={<Chat_page/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
