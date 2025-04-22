import ReactDOM from "react-dom/client";

import React from "react";
// import NavBar from '@/components/common/NavBar';
// // import Footer from '@/components/common/Footer';
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);