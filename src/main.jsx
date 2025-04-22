import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
// import NavBar from '@/components/common/NavBar';
import Footer from '@/components/common/Footer';
import { BrowserRouter } from "react-router-dom"

const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
        {/* <NavBar /> */}
        <App />
        <Footer />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);