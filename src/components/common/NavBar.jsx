"use client";

import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/sheet";
import Link from "@/components/Link";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(true);
    document.body.classList.add("overflow-hidden");
  }, []);
  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, []);

  // Manejando el scroll suave
  const handleSmoothScroll = useCallback((event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    // Si no estamos en la raíz, redirigimos a la raíz
    if (window.location.pathname !== "/") {
      window.location.href = `/#${targetId.replace("#", "")}`;
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);


  const navLinks = [
    { href: '#inicio', title: 'Inicio' },
    { href: '#nuestros-servicios', title: 'Servicios' },
    { href: '#licencia-de-conducir', title: 'Cursos' },
    { href: '#preguntas-frecuentes', title: 'Preguntas' },
    { href: '#contacto', title: 'Contacto' },
  ];

  
  return (
    <div className="fixed w-screen top-0 z-120 border-b border-violet-200/10 backdrop-blur-sm dark:bg-[#111928]/95 dark:border-gray-600/20
    supports-[backdrop-filter]:bg-[#020817]/90 text-gray-100 select-none">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" onClick={(e) => { handleMenuClose(); handleSmoothScroll(e, "#inicio"); }}
          className="flex items-center px-4" aria-label="Inicio">
          <img src="https://sglow-fortaleza.vercel.app/logo.webp"
            className="h-10 w-10 rounded-full object-cover"
            alt="Logo Fortaleza" />
          <span className="text-xl font-bold text-gray-100 ml-2">Academia Fortaleza</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-gray-100">
          {navLinks.map((link) => (
            <Link key={link.title}
              onClick={(e) => { handleMenuClose(); handleSmoothScroll(e, link.href); }}
              href={link.href}
              aria-label={link.title}
              className="relative font-medium transition-colors duration-500 after:absolute justify-end right-0 after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-violet-400 after:transition-all hover:after:w-full hover:text-violet-400">
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <div className="flex right-0 mx-2 justify-end gap-3 md:hidden">
            <button
              className="md:hidden text-white hover:text-gray-100 transition-colors hover:scale-110 duration-300"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <SheetContent side="right" className="min-w-full h-full z-[150] backdrop-blur supports-[backdrop-filter]:bg-[#131624]/60 text-gray-300 border-none" onCloseAutoFocus={handleMenuClose}>
            <div className="flex flex-col h-full">
              <nav className="flex flex-col space-y-6 pt-8">
                {navLinks.map(({ href, title }) => (
                  <a key={href} href={href} aria-label={title}
                    onClick={(e) => { handleMenuClose(); handleSmoothScroll(e, href); }}
                    className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-violet-400">
                    {title}
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

export default Navbar;
