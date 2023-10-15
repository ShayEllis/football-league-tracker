import { Outlet } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/navbar'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
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
