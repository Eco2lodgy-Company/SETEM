
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle2, Lightbulb, Shield } from 'lucide-react';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] bg-gradient-to-r from-getec-950 to-getec-800 flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Expertise en ingénierie et contrôle technique
            </h1>
            <p className="text-xl text-getec-100 mb-8">
              GETEC OI, votre partenaire à La Réunion pour vos projets de construction, d'infrastructure et de génie civil depuis 2006.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-getec-500 hover:bg-getec-600">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-getec-900 mb-4">Nos domaines d'expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              GETEC OI vous accompagne dans tous vos projets de construction et d'infrastructure avec une équipe expérimentée et pluridisciplinaire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <Building2 className="h-12 w-12 text-getec-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bureau d'études techniques</h3>
              <p className="text-gray-600 mb-4">Conception de projets de construction adaptés à vos besoins.</p>
              <Link to="/services" className="text-getec-700 hover:text-getec-800 font-medium inline-flex items-center">
                En savoir plus
              </Link>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <CheckCircle2 className="h-12 w-12 text-getec-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contrôle technique</h3>
              <p className="text-gray-600 mb-4">Vérification de la conformité des projets aux normes en vigueur.</p>
              <Link to="/services" className="text-getec-700 hover:text-getec-800 font-medium inline-flex items-center">
                En savoir plus
              </Link>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <Lightbulb className="h-12 w-12 text-getec-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Assistance à maîtrise d'ouvrage</h3>
              <p className="text-gray-600 mb-4">Accompagnement des maîtres d'ouvrage tout au long du projet.</p>
              <Link to="/services" className="text-getec-700 hover:text-getec-800 font-medium inline-flex items-center">
                En savoir plus
              </Link>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <Shield className="h-12 w-12 text-getec-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coordination SPS</h3>
              <p className="text-gray-600 mb-4">Sécurité et protection de la santé sur les chantiers.</p>
              <Link to="/services" className="text-getec-700 hover:text-getec-800 font-medium inline-flex items-center">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-getec-900 mb-6">À propos de GETEC OI</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2006, GETEC OI est une SARL spécialisée dans l'ingénierie, le bâtiment, les ouvrages d'art et le génie civil à La Réunion.
              </p>
              <p className="text-gray-600 mb-6">
                Notre équipe de 9 professionnels qualifiés met son expertise au service de vos projets, avec un engagement constant pour la qualité et la sécurité.
              </p>
              <Button asChild className="bg-getec-800 hover:bg-getec-700">
                <Link to="/a-propos">Découvrir notre entreprise</Link>
              </Button>
            </div>
            <div className="relative h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544')] bg-cover bg-center transform hover:scale-105 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-getec-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment GETEC OI peut vous accompagner.
          </p>
          <Button asChild size="lg" className="bg-white text-getec-800 hover:bg-gray-100">
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
