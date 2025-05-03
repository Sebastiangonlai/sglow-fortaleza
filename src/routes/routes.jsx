import { lazy } from 'react';

const Home = lazy(() => import('@/pages/index.jsx'));
// const GaleriaMedia = lazy(() => import('@/pages/galeria-media.jsx'));
const NuestrosServicios = lazy(() => import('@/pages/nuestros-servicios.jsx'));
// const PreguntasFrecuentes = lazy(() => import('@/pages/preguntas-frecuentes.jsx'));
// const CursosPersonalizados = lazy(() => import('@/pages/cursos-personalizados.jsx'));
// const LicenciaDeConducir = lazy(() => import('@/pages/licencia-de-conducir.jsx'));
// const MediosDePago = lazy(() => import('@/pages/medios-de-pago.jsx'));
// const TestOnline = lazy(() => import('@/pages/test-online.jsx'));
// const SobreNosotrosIndex = lazy(() => import('@/pages/sobre-nosotros.jsx'));
// const ClasesPracticas = lazy(() => import('@/pages/clases-practicas.jsx'));
// const NuestrosVeiculos = lazy(() => import('@/pages/coche-escuela.jsx'));
// const Contacto = lazy(() => import('@/pages/contacto.jsx'));
// const Admin = lazy(() => import('@/pages/admin.jsx'));

const routes = [
  { path: "/", element: <Home /> },
  // { path: "/galeria-media", element: <GaleriaMedia /> },
  { path: "/nuestros-servicios", element: <NuestrosServicios /> },
  // { path: "/preguntas-frecuentes", element: <PreguntasFrecuentes /> },
  // { path: "/cursos-personalizados", element: <CursosPersonalizados /> },
  // { path: "/licencia-de-conducir", element: <LicenciaDeConducir /> },
  // { path: "/medios-de-pago", element: <MediosDePago /> },
  // { path: "/test-online", element: <TestOnline /> },
  // { path: "/sobre-nosotros", element: <SobreNosotrosIndex /> },
  // { path: "/clases-practicas", element: <ClasesPracticas /> },
  // { path: "/coche-escuela", element: <NuestrosVeiculos /> },
  // { path: "/contacto", element: <Contacto /> },
  // { path: "/admin", element: <Admin /> },
];

export default routes;