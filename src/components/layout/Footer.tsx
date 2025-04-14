
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-SETM-900 text-white">
      <div className="container py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SETM </h3>
            <p className="text-gray-300 mb-4">
              Groupe d'Études Techniques et de Contrôle Océan Indien, votre partenaire en ingénierie,
              bâtiment, ouvrages d'art et génie civil depuis 2006.
            </p>
            <p className="text-sm text-gray-400">
              SARL au capital de 50 000 €
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li> 
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-SETM-300 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  6 ter rue Victor Mac Auliffe<br />
                  97420 LE PORT
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-SETM-300 flex-shrink-0" />
                <p className="text-gray-300">00 00 00 00</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-SETM-300 flex-shrink-0" />
                <a href="mailto:SETM@setm.fr" className="text-gray-300 hover:text-white transition-colors">
                  hello@setm.fr
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SETM . Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
