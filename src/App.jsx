import React, { useState, useEffect } from 'react';

import { Routes, Route } from "react-router-dom"

import Home from '@/pages/index.jsx';
// import GaleriaMedia from '@/pages/galeria-media.jsx';
// import NuestrosServicios from '@/pages/nuestros-servicios.jsx';
// import PreguntasFrecuentes from '@/pages/preguntas-frecuentes.jsx';
// import CursosPersonalizados from '@/pages/cursos-personalizados.jsx';
// import LicenciaDeConducir from '@/pages/licencia-de-conducir.jsx';
// import MediosDePago from '@/pages/medios-de-pago.jsx';
// import TestOnline from '@/pages/test-online.jsx';
// import SobreNosotrosIndex from '@/pages/sobre-nosotros.jsx';
// import ClasesPracticas from '@/pages/clases-practicas.jsx';
// import NuestrosVeiculos from '@/pages/coche-escuela.jsx';
// import Contacto from '@/pages/contacto.jsx';


function App() {
  const handleResize = () => setWindowWidth(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/galeria-media" element={<GaleriaMedia />} /> */}
      {/* <Route path="/nuestros-servicios" element={<NuestrosServicios />} /> */}
      {/* <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/cursos-personalizados" element={<CursosPersonalizados />} />
      <Route path="/licencia-de-conducir" element={<LicenciaDeConducir />} />
      <Route path="/medios-de-pago" element={<MediosDePago />} />
      <Route path="/test-online" element={<TestOnline />} />
      <Route path="/sobre-nosotros" element={<SobreNosotrosIndex />} />
      <Route path="/clases-practicas" element={<ClasesPracticas />} />
      <Route path="/coche-escuela" element={<NuestrosVeiculos />} />
      <Route path="/contacto" element={<Contacto />} /> */}
    </Routes>
    // <main className="bg-gray-950 text-white border-gray-400 antialiased dark:text-white dark:bg-gray-950">
    // </main>
  )
}

export default App
