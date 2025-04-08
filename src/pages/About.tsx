
import { Award, Users, Calendar, DollarSign } from 'lucide-react';

const About = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de GETEC OI</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez notre histoire, notre équipe et notre engagement pour l'excellence
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-getec-900 mb-6">Notre entreprise</h2>
              <p className="text-gray-700 mb-4">
                Le Groupe d'Études Techniques et de Contrôle Océan Indien (GETEC OI) est une SARL créée en 2006, 
                spécialisée dans l'ingénierie, le bâtiment, les ouvrages d'art et le génie civil.
              </p>
              <p className="text-gray-700 mb-6">
                Basée au Port à La Réunion, notre entreprise est dirigée par M. DASSY Jean-Michel et compte 
                actuellement 9 collaborateurs qualifiés et expérimentés.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-getec-600 mr-3" />
                  <div>
                    <h4 className="font-semibold">Créée en</h4>
                    <p className="text-gray-700">2006</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-getec-600 mr-3" />
                  <div>
                    <h4 className="font-semibold">Capital</h4>
                    <p className="text-gray-700">50 000 €</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-getec-600 mr-3" />
                  <div>
                    <h4 className="font-semibold">Effectif</h4>
                    <p className="text-gray-700">9 salariés</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-getec-600 mr-3" />
                  <div>
                    <h4 className="font-semibold">Forme juridique</h4>
                    <p className="text-gray-700">SARL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-getec-900 mb-4">Notre mission et nos valeurs</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Chez GETEC OI, nous nous engageons à fournir des services d'ingénierie de haute qualité, 
              avec un accent particulier sur la sécurité, la conformité et la satisfaction client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-getec-800 mb-4">Excellence technique</h3>
              <p className="text-gray-700">
                Nous nous efforçons de maintenir les plus hauts standards de qualité et d'expertise dans tous nos projets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-getec-800 mb-4">Engagement pour la sécurité</h3>
              <p className="text-gray-700">
                La sécurité est au cœur de nos préoccupations, tant dans nos méthodes de travail que dans les projets que nous contrôlons.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-getec-800 mb-4">Innovation et adaptabilité</h3>
              <p className="text-gray-700">
                Nous restons à la pointe des évolutions techniques et réglementaires pour proposer des solutions adaptées à chaque projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-getec-900 mb-8 text-center">Nos références et expériences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1433086966358-54859d0ed716')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-getec-800 mb-2">Constructions publiques</h3>
                <p className="text-gray-700">
                  GETEC OI a participé à la conception et au contrôle technique de nombreux édifices publics à La Réunion, 
                  garantissant leur conformité aux normes et leur sécurité.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-getec-800 mb-2">Logements collectifs</h3>
                <p className="text-gray-700">
                  Notre expertise s'étend aux projets de logements collectifs, où nous veillons à la qualité 
                  et à la durabilité des constructions.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1431576901776-e539bd916ba2')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-getec-800 mb-2">Établissements scolaires</h3>
                <p className="text-gray-700">
                  Nous accompagnons les collectivités dans leurs projets d'établissements scolaires, 
                  avec une attention particulière à la sécurité des usagers.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-getec-800 mb-2">Infrastructures routières</h3>
                <p className="text-gray-700">
                  GETEC OI intervient également dans le domaine des infrastructures routières, 
                  contribuant à améliorer le réseau de transport de l'île.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-getec-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications et engagements</h2>
            <p className="text-xl max-w-2xl mx-auto text-getec-100">
              Notre engagement pour la qualité se traduit par des certifications et une démarche rigoureuse.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">Agrément pour le contrôle technique</h3>
              <p className="text-getec-100">
                GETEC OI est agréé pour réaliser des missions de contrôle technique, 
                attestant de notre expertise et de notre conformité aux exigences du secteur.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">Démarche qualité et sécurité</h3>
              <p className="text-getec-100">
                Nous nous engageons dans une démarche qualité et sécurité rigoureuse, 
                garantissant des prestations fiables et conformes aux attentes de nos clients.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Respect des réglementations</h3>
              <p className="text-getec-100">
                Notre connaissance approfondie de la réglementation en vigueur nous permet 
                d'assurer la conformité des projets que nous accompagnons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
