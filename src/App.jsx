
import Carrito from '../Components/Carrito'
import RenderCarrito from '../Components/Carrito'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import Pizza from '../Components/Pizza'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar />     
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Pizza/:id" element={<Pizza />}/>
            <Route path="/Carrito" element={<Carrito />}/>
          </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
