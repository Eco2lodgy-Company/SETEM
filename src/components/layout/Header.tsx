
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Nos services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-SETM-800">SETM</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-SETM-700 ${
                location.pathname === item.path ? 'text-SETM-800 font-semibold' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="ml-2 bg-SETM-800 hover:bg-SETM-700">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-50 h-screen bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`px-4 py-3 text-base font-medium rounded-md transition-colors hover:bg-muted ${
                  location.pathname === item.path ? 'bg-muted text-SETM-800 font-semibold' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-SETM-800 hover:bg-SETM-700">
              <Link to="/contact" onClick={closeMenu}>Nous contacter</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
