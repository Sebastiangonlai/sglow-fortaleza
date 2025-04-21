'use client'
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from '@/components/Link.jsx'
// import Image from 'next/image'
import { cn } from "../../lib/utils"

const NavbarEffects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [navShow, setNavShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const menuItems = [
    { href: '/', title: 'Inicio' },
    { href: '/#nuestros-servicios', title: 'Servicios' },
    { href: '/#licencia-de-conducir', title: 'Cursos' },
    { href: '/#preguntas-frecuentes', title: 'Preguntas' },
    { href: '/#contacto', title: 'Contacto' },
  ];

  useEffect(() => {
    document.body.style.overflow = navShow ? 'hidden' : 'auto';
  }, [navShow]);

  const onToggleNav = () => {
    setNavShow(!navShow);
  };

  //flex items-center justify-between
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered={false} isBlurred={false}
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-300 z-[1000] dark:border-b border-b border-gray-200 dark:border-gray-600/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3",
        )}>
        {/* className="z-[1000] dark:bg-[#111928]/95 bg-white/90  dark:border-b border-b border-gray-200 dark:border-gray-600/20" > */}
        <NavbarContent>
          <div className="md:hidden ">
            <button className="ml-0 mr-0 h-8 w-8 rounded py-1" aria-label="Toggle Menu" onClick={onToggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="text-gray-100 dark:text-gray-100">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`fixed left-0 top-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-[#111928] ${navShow ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex justify-end">
                <button className="mr-6 mt-5 h-8 w-8 rounded" aria-label="Close Menu" onClick={onToggleNav}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-100 dark:text-gray-100 dark:hover:text-blue-300 dark:hover:scale-105">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <nav className="fixed mt-4 h-full">
                {menuItems.map((link) => (
                  <div key={link.title} className="px-12 py-4">
                    <Link href={link.href} className="text-2xl font-medium dark:hover:text-blue-300 tracking-widest text-gray-900 dark:text-gray-100" onClick={onToggleNav}>
                      {link.title}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
          <NavbarBrand>
            <Link href="/" className="flex">
              <img className="w-[45px] sm:w-[50px] lg:max-w-[55px] select-none" src="/static/favicons/logo.ico" alt="logo" width={80} height={80} />
              <p className="flex text-[22px] lg:text:2xl xl:text-2xl items-center justify-center px-1 fontTitle whitespace-nowrap"> Academia Fortaleza</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:hidden md:flex xl:flex gap-6 items-center" justify="center" onMouseLeave={() => setActive(null)}>
          {menuItems.map((link) => (
            <NavbarItem key={link.title} onMouseOver={() => setActive(!active)}>
              <Link href={link.href} className="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-300">
                {link.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default NavbarEffects;