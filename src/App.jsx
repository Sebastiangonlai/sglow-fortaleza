import React from 'react';
import { Routes, Route } from "react-router-dom";
import routes from '@/routes/routes';
import ErrorBoundary from "@/routes/ErrorBoundary";

import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

function App() {
  return (
    <>
      <ErrorBoundary>
        <NavBar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;