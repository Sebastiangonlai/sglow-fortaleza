// 'use client'
// import React, { useState, useEffect } from "react";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
// import Link from '@/components/Link.jsx'
// // import Image from 'next/image'
// import { cn } from "../../lib/utils"

// const NavbarEffects = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [active, setActive] = useState(null);
//   const [navShow, setNavShow] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false)
//   useEffect(() => {
//     setIsScrolled(scrollY > 50)
//   }, [scrollY])

//   const menuItems = [
//     { href: '/', title: 'Inicio' },
//     { href: '/#nuestros-servicios', title: 'Servicios' },
//     { href: '/#licencia-de-conducir', title: 'Cursos' },
//     { href: '/#preguntas-frecuentes', title: 'Preguntas' },
//     { href: '/#contacto', title: 'Contacto' },
//   ];

//   useEffect(() => {
//     document.body.style.overflow = navShow ? 'hidden' : 'auto';
//   }, [navShow]);

//   const onToggleNav = () => {
//     setNavShow(!navShow);
//   };

//   //flex items-center justify-between
//   return (
//     <>
//       <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered={false} isBlurred={false}
//         className={cn(
//           "fixed top-0 left-0 right-0 transition-all duration-300 z-[1000] dark:border-b border-b border-gray-200 dark:border-gray-600/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3",
//         )}>
//         {/* className="z-[1000] dark:bg-[#111928]/95 bg-white/90  dark:border-b border-b border-gray-200 dark:border-gray-600/20" > */}
//         <NavbarContent>
//           <div className="md:hidden ">
//             <button className="ml-0 mr-0 h-8 w-8 rounded py-1" aria-label="Toggle Menu" onClick={onToggleNav}>
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="text-gray-100 dark:text-gray-100">
//                 <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className={`fixed left-0 top-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-[#111928] ${navShow ? 'translate-x-0' : 'translate-x-full'}`}>
//               <div className="flex justify-end">
//                 <button className="mr-6 mt-5 h-8 w-8 rounded" aria-label="Close Menu" onClick={onToggleNav}>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-100 dark:text-gray-100 dark:hover:text-blue-300 dark:hover:scale-105">
//                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
//               <nav className="fixed mt-4 h-full">
//                 {menuItems.map((link) => (
//                   <div key={link.title} className="px-12 py-4">
//                     <Link href={link.href} className="text-2xl font-medium dark:hover:text-blue-300 tracking-widest text-gray-900 dark:text-gray-100" onClick={onToggleNav}>
//                       {link.title}
//                     </Link>
//                   </div>
//                 ))}
//               </nav>
//             </div>
//           </div>
//           <NavbarBrand>
//             <Link href="/" className="flex">
//               <img className="w-[45px] sm:w-[50px] lg:max-w-[55px] select-none" src="/static/favicons/logo.ico" alt="logo" width={80} height={80} />
//               <p className="flex text-[22px] lg:text:2xl xl:text-2xl items-center justify-center px-1 fontTitle whitespace-nowrap"> Academia Fortaleza</p>
//             </Link>
//           </NavbarBrand>
//         </NavbarContent>
//         <NavbarContent className="hidden sm:hidden md:flex xl:flex gap-6 items-center" justify="center" onMouseLeave={() => setActive(null)}>
//           {menuItems.map((link) => (
//             <NavbarItem key={link.title} onMouseOver={() => setActive(!active)}>
//               <Link href={link.href} className="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-300">
//                 {link.title}
//               </Link>
//             </NavbarItem>
//           ))}
//         </NavbarContent>
//       </Navbar>
//     </>
//   );
// }

// export default NavbarEffects;


"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Languages, HomeIcon, Phone, Menu, X, Sun, Moon, Award, BookOpen, MessageSquare } from "lucide-react";
import { Sheet, SheetContent } from "../sheet.jsx";

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarRef = useRef()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(true);
    document.body.classList.add("overflow-hidden");
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, []);

  const handleSmoothScroll = useCallback((event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const navLinks = [
    { href: '#inicio', label: 'Inicio', icon: <HomeIcon className="h-5 w-5" /> },
    { href: '#nuestros-servicios', label: 'Servicios', icon: <HomeIcon className="h-5 w-5" /> },
    { href: '#licencia-de-conducir', label: 'Cursos', icon: <BookOpen className="h-5 w-5" /> },
    { href: '#preguntas-frecuentes', label: 'Preguntas', icon: <Award className="h-5 w-5" /> },
    { href: '#contacto', label: 'Contacto', icon: <Phone className="h-5 w-5" /> },
  ];

  return (
    <div className="fixed w-screen top-0 z-[120] border-b border-violet-200/20 backdrop-blur supports-[backdrop-filter]:bg-[#131624]/60 text-gray-100 select-none" >
      <div className="container flex h-16 items-center justify-between" ref={navbarRef}>

        {/* Logo */}
        {/* <a href="#inicio" onClick={(e) => { handleMenuClose(); handleSmoothScroll(e, "#inicio"); }} className="flex items-end gap-2 pl-1.5" aria-label="Inicio">
          <img src="/favicon.svg" alt="Logo" className="w-8 scale-110 transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-white text-[12px] items-center font-medium pl-2 ">Academia Fortaleza</span>
        </a> */}

        <a href="/#inicio" onClick={(e) => { handleMenuClose(); handleSmoothScroll(e, "#inicio"); }}
          className="flex items-center px-4" aria-label="Inicio">
          <img src="/logo.webp" alt="Logo" width={48} height={48} />
          <span className="text-white text-[22px] items-center font-bold pl-2 mt-0 leading-relaxed tracking-tight">Academia Fortaleza</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-gray-100">
          {navLinks.map(({ href, label }) => (
            <a key={href}
              href={`/${href}`}
              // onClick={(e) => handleSmoothScroll(e, href)}
              onClick={(e) => { handleMenuClose(); handleSmoothScroll(e, href); }}
              aria-label={label}
              className={`relative font-medium transition-colors duration-300 after:absolute justify-end right-0 after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-violet-400 after:transition-all hover:after:w-full hover:text-violet-400`}>
              {label}
            </a>
          ))}

              </nav>

        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <div className="flex right-0 mx-2 justify-end gap-3 md:hidden">
            <button className="md:hidden text-white hover:text-gray-100 transition-colors hover:scale-110 duration-400 "
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={handleMenuOpen}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <SheetContent side="right" className="min-w-full h-full z-[150] backdrop-blur supports-[backdrop-filter]:bg-[#131624]/60 text-gray-300 border-none" onCloseAutoFocus={handleMenuClose}>
            <div className="flex flex-col h-full">
              <nav className="flex flex-col space-y-6 pt-8">
                {navLinks.map(({ href, label, icon }) => (
                  <a key={href} href={`/${href}`} aria-label={label}
                    onClick={(e) => { handleMenuClose(); handleSmoothScroll(e, href); }}
                    className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-violet-400">
                    {icon}
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
