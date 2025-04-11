
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle2, Lightbulb, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Des solutions complètes en ingénierie, contrôle technique et assistance à maîtrise d'ouvrage
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-SETM-900 mb-4">Nos domaines d'expertise</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              SETM OI vous propose une gamme complète de services pour accompagner vos projets de construction et d'infrastructure.
            </p>
          </div>

          {/* Bureau d'études */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-SETM-700 mr-3" />
                  <h3 className="text-2xl font-bold text-SETM-900">Bureau d'études techniques</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Notre bureau d'études vous accompagne dans la conception de vos projets de construction,
                  en prenant en compte vos besoins, les contraintes techniques et réglementaires.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Études de faisabilité et diagnostics techniques</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conception de bâtiments et d'infrastructures</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Études d'exécution et plans techniques</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Calculs de structures et dimensionnement</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative h-64 md:h-80 overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>

          {/* Contrôle technique */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e')] bg-cover bg-center"></div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-SETM-700 mr-3" />
                  <h3 className="text-2xl font-bold text-SETM-900">Contrôle technique de construction</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  En tant qu'organisme agréé, SETM OI réalise des missions de contrôle technique pour
                  garantir la conformité des constructions aux normes et réglementations en vigueur.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Contrôle de la solidité des ouvrages</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Vérification de la sécurité des personnes</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Contrôle de l'accessibilité aux personnes handicapées</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Vérification des installations techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AMO */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-SETM-700 mr-3" />
                  <h3 className="text-2xl font-bold text-SETM-900">Assistance à maîtrise d'ouvrage</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Nous accompagnons les maîtres d'ouvrage tout au long de leur projet, de la définition
                  des besoins jusqu'à la réception des travaux, en veillant à la qualité et au respect des délais.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Programmation et définition des besoins</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Montage et pilotage d'opérations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Suivi de la réalisation des travaux</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Assistance aux opérations de réception</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative h-64 md:h-80 overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>

          {/* SPS */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')] bg-cover bg-center"></div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-SETM-700 mr-3" />
                  <h3 className="text-2xl font-bold text-SETM-900">Coordination SPS</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Notre mission de coordination en matière de sécurité et de protection de la santé (SPS)
                  vise à prévenir les risques liés à la coactivité et à garantir la sécurité sur les chantiers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Analyse des risques liés à la coactivité</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Élaboration du plan général de coordination</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Suivi et contrôle des mesures de sécurité</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-SETM-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Constitution du dossier d'intervention ultérieure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-SETM-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un service spécifique ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment SETM OI peut vous accompagner.
          </p>
          <Button asChild size="lg" className="bg-white text-SETM-800 hover:bg-gray-100">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
