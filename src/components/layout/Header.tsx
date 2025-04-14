import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); // Ferme la recherche si ouverte
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); // Ferme le menu si ouvert
  };

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Nos services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <motion.img
              src="/images/logo.png"
              alt="SETM Logo"
              className="h-24 w-auto max-h-18 object-contain sm:h-18 sm:max-h-18"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-SETM-800 font-bold'
                  : 'text-muted-foreground hover:text-SETM-700'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-SETM-800 to-SETM-600 rounded-full"
                  layoutId="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search button */}
          {/* <button
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-SETM-800"
            aria-label={isSearchOpen ? 'Fermer la recherche' : 'Ouvrir la recherche'}
          >
            <Search className="h-5 w-5 text-muted-foreground" />
          </button> */}

          {/* Contact button */}
          <Button
            asChild
            className="bg-gradient-to-r from-SETM-800 to-SETM-600 text-white rounded-full px-6 py-2 font-semibold hover:from-SETM-700 hover:to-SETM-500 transform transition-all hover:scale-105 shadow-lg"
          >
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-SETM-800"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-muted-foreground" /> : <Menu className="h-6 w-6 text-muted-foreground" />}
        </button>
      </div>

      {/* Search bar (desktop) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="hidden md:block bg-background border-b border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full px-4 py-2 rounded-full bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-SETM-800"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-16 z-50 bg-background border-t border-border"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="container py-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-colors hover:bg-muted ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-SETM-800/10 to-SETM-600/10 text-SETM-800 font-bold'
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Search input (mobile) */}
              <div className="px-4">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 rounded-full bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-SETM-800"
                />
              </div>
              <Button
                asChild
                className="mt-4 mx-4 bg-gradient-to-r from-SETM-800 to-SETM-600 text-white rounded-full px-6 py-3 font-semibold hover:from-SETM-700 hover:to-SETM-500 transform transition-all hover:scale-105"
              >
                <Link to="/contact" onClick={closeMenu}>
                  Nous contacter
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;