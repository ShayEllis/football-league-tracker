import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import './App.scss'
import Modal from './features/modal/modal'
import Table from './features/table/table'
import Button from './components/button/button'
import Alert from './features/alert/alert'
import Card from './features/card/card'
import Navbar from './components/navbar/navbar'
import * as bootstrap from 'bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [leagues, setLeagues] = useState([])

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <h1>Fantasy Football Tracker</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
