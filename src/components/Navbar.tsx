import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the login or signup page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/cadastro';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-black">
              NextStone
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {!isAuthPage && (
            <nav>
              <ul className="flex space-x-8">
                <li><a href="#how-it-works" className="text-darkGray/70 hover:text-darkGray font-medium">Como Funciona</a></li>
                <li><a href="#for-developers" className="text-darkGray/70 hover:text-darkGray font-medium">Para Incorporadoras</a></li>
                <li><a href="#for-funds" className="text-darkGray/70 hover:text-darkGray font-medium">Para Fundos</a></li>
                <li><a href="#testimonials" className="text-darkGray/70 hover:text-darkGray font-medium">Depoimentos</a></li>
              </ul>
            </nav>
          )}
          <div className="flex space-x-3">
            <Button variant="outline" className="border-darkGray text-darkGray hover:bg-sand" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button className="bg-gold text-black hover:bg-gold/90" asChild>
              <Link to="/cadastro/tipo">Cadastre-se</Link>
            </Button>
          </div>
        </div>

        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-darkGray" />
          ) : (
            <Menu className="h-6 w-6 text-darkGray" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <nav className="container-custom py-4">
            <ul className="space-y-4">
              {!isAuthPage && (
                <>
                  <li><a href="#how-it-works" className="block py-2 text-darkGray/70 hover:text-darkGray font-medium" onClick={toggleMobileMenu}>Como Funciona</a></li>
                  <li><a href="#for-developers" className="block py-2 text-darkGray/70 hover:text-darkGray font-medium" onClick={toggleMobileMenu}>Para Incorporadoras</a></li>
                  <li><a href="#for-funds" className="block py-2 text-darkGray/70 hover:text-darkGray font-medium" onClick={toggleMobileMenu}>Para Fundos</a></li>
                  <li><a href="#testimonials" className="block py-2 text-darkGray/70 hover:text-darkGray font-medium" onClick={toggleMobileMenu}>Depoimentos</a></li>
                </>
              )}
              <li className="pt-2 flex flex-col space-y-3">
                <Button variant="outline" className="w-full border-darkGray text-darkGray hover:bg-sand" asChild>
                  <Link to="/login" onClick={toggleMobileMenu}>Entrar</Link>
                </Button>
                <Button className="w-full bg-gold text-black hover:bg-gold/90" asChild>
                  <Link to="/cadastro/tipo" onClick={toggleMobileMenu}>Cadastre-se</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
