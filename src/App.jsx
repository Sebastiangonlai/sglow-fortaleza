import React, { useState, useEffect } from 'react';

import { Routes, Route } from "react-router-dom"

import Home from '@/pages/index.jsx';
import GaleriaMedia from '@/pages/galeria-media.jsx';
import NuestrosServicios from '@/pages/nuestros-servicios.jsx';
import PreguntasFrecuentes from '@/pages/preguntas-frecuentes.jsx';
import CursosPersonalizados from '@/pages/cursos-personalizados.jsx';
import LicenciaDeConducir from '@/pages/licencia-de-conducir.jsx';
import MediosDePago from '@/pages/medios-de-pago.jsx';
import TestOnline from '@/pages/test-online.jsx';
import SobreNosotrosIndex from '@/pages/sobre-nosotros.jsx';
import ClasesPracticas from '@/pages/clases-practicas.jsx';
import NuestrosVeiculos from '@/pages/coche-escuela.jsx';
import Contacto from '@/pages/contacto.jsx';


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
      <Route path="/galeria-media" element={<GaleriaMedia />} />
      <Route path="/nuestros-servicios" element={<NuestrosServicios />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/cursos-personalizados" element={<CursosPersonalizados />} />
      <Route path="/licencia-de-conducir" element={<LicenciaDeConducir />} />
      <Route path="/medios-de-pago" element={<MediosDePago />} />
      <Route path="/test-online" element={<TestOnline />} />
      <Route path="/sobre-nosotros" element={<SobreNosotrosIndex />} />
      <Route path="/clases-practicas" element={<ClasesPracticas />} />
      <Route path="/coche-escuela" element={<NuestrosVeiculos />} />
      <Route path="/contacto" element={<Contacto />} /> 
    </Routes>
  )
}

export default App



// filepath: f:\WORKGROUP_VSC\sglow-fortaleza\src\App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

// Lazy loading de páginas
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Agrega más rutas aquí */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;