import './App.scss'
import Modal from './features/modal/modal'
import Table from './features/table/table'
import Button from './components/button/button'
import Alert from './features/alert/alert'
import Card from './features/card/card'
import Navbar from './components/navbar/navbar'
import * as bootstrap from 'bootstrap'

function App() {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <h1>Bootstrap and Vite!</h1>
        <Modal />
        <Table />
        <Button buttonText='Click Here!' />
        <Alert />
        <Card />
      </div>
    </>
  )
}

export default App
