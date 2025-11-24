import { Route, Routes } from 'react-router-dom'
import './App.css'
import {ToastContainer} from 'react-toastify'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Appointment from './Pages/Appointment'
import Departments from './Pages/Departments'
import Doctors from './Pages/Doctors'
import About from './Pages/About'

function App() {


  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/departments' element={<Departments/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
