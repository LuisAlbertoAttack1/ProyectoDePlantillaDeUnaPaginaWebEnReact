import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// ------------------------

import { NotFound } from './pages/NotFound'
// ---------NUEVOS---------------
import { Inicio } from './pages/Inicio'
import { AvisoDePrivasidad } from './pages/AvisoDePrivasidad'
import { Estados } from './pages/Estados'
import { LosPueblosMagicos } from './pages/LosPueblosMagicos'
import { MexicoDesconocido } from './pages/MexicoDesconocido'
// ------------------------
import { NavBar } from './components/NavBar'
import 'aos/dist/aos.css'
import AOS from 'aos'

// PUEDE RENOMBRARLO CON EL AS


export const App = () => {
  useEffect(() => {

    AOS.init({

      duration: 1000, // Duración de las animaciones en milisegundos

    });

  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          {/* ------------------------ */}
          <Route path='/' element={<Inicio />} />
          <Route path='/AvisoDePrivasidad' element={<AvisoDePrivasidad />} />
          <Route path='/Estados' element={<Estados />} />
          <Route path='/LosPueblosMagicos' element={<LosPueblosMagicos />} />
          <Route path='/MexicoDesconocido' element={<MexicoDesconocido />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}


