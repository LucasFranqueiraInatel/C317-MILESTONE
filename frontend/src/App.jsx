import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Chatbox from './components/Chatbox'


function App() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='flex-1'>
          <Sidebar />
        </div>
        <div className='flex-2 bg-gray-500 w-4/5 mx-10'>
          <Chatbox />
        </div>

      </div>


    </>
  )
}

export default App
