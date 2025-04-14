import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle2, Lightbulb, Shield } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import LatestProjects from '@/components/home/LatestProjects';
import Partners from '@/components/home/Partners';
import Testimonials from '@/components/home/Testimonials';

// CSS personnalisé pour le carrousel avec les couleurs du logo
const slickStyles = `
  .slick-prev, .slick-next {
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    z-index: 20;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  .slick-prev:hover, .slick-next:hover {
    background: #0055A4; /* Bleu principal */
    transform: scale(1.1);
  }
  .slick-prev:before, .slick-next:before {
    font-size: 28px;
    color: #fff;
  }
  .slick-prev {
    left: 30px;
  }
  .slick-next {
    right: 30px;
  }
  .slick-dots {
    bottom: 30px;
  }
  .slick-dots li button:before {
    font-size: 14px;
    color: #E6F0FA; /* Bleu clair */
    opacity: 0.6;
    transition: all 0.3s;
  }
  .slick-dots li.slick-active button:before {
    color: #E6F0FA; /* Bleu clair */
    opacity: 1;
    font-size: 16px;
  }
  .slick-slide > div {
    position: relative;
  }
`;

const Home = () => {
  // Données des slides pour le carrousel Hero
  const heroSlides = [
    {
      title: "L'excellence en ingénierie depuis 2006",
      description:
        "SETM, votre partenaire à La Réunion pour des projets de construction et de génie civil durables.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      badge: "Expertise & Innovation",
      stats: "18+ ans d'expérience",
      primaryButton: { text: "Découvrir nos services", path: "/services" },
      secondaryButton: { text: "Nous contacter", path: "/contact" },
    },
    {
      title: "Construisons l’avenir ensemble",
      description:
        "Des solutions sur mesure pour des chantiers innovants et respectueux des normes.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      badge: "Projets sur mesure",
      stats: "100+ projets réalisés",
      primaryButton: { text: "Voir nos projets", path: "/" },
      secondaryButton: { text: "Demander un devis", path: "/contact" },
    },
    {
      title: "Sécurité et fiabilité avant tout",
      description:
        "Coordination SPS et contrôle technique pour des chantiers sûrs et conformes.",
      image: "https://images.unsplash.com/photo-1567958451986-7be074f561ba",
      badge: "Engagement sécurité",
      stats: "9 experts dédiés",
      primaryButton: { text: "En savoir plus", path: "/services" },
      secondaryButton: { text: "Nous contacter", path: "/contact" },
    },
  ];

  // Paramètres du carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    pauseOnHover: true,
    adaptiveHeight: false,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <main>
      {/* Hero Section - Carrousel pleine page */}
      <section className="relative h-screen min-h-[600px]">
        <style>{slickStyles}</style>
        <Slider {...settings} className="h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-screen min-h-[600px] flex flex-col">
              {/* Image de fond avec effet parallax */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              ></motion.div>
              {/* Dégradé */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/85 to-[#003F7D]/85"></div> {/* Noir à bleu foncé */}
              <div className="container mx-auto px-4 pt-32 md:pt-40 lg:pt-48 relative z-10">
                <motion.div
                  className="max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                >
                  <motion.span
                    className="inline-block px-4 py-2 bg-[#F5A623]/30 text-[#E6F0FA] rounded-full text-sm font-semibold mb-6 tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {slide.badge}
                  </motion.span>
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl text-[#E6F0FA] mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.p
                    className="text-md md:text-lg text-[#E6F0FA] mb-8 font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    {slide.stats}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white rounded-full px-8 py-3 font-semibold transform transition-all hover:scale-105 shadow-lg"
                    >
                      <Link to={slide.primaryButton.path}>{slide.primaryButton.text}</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="text-[#F5A623] border-[#F5A623] hover:bg-[#F5A623]/20 rounded-full px-8 py-3 font-semibold transform transition-all hover:scale-105"
                    >
                      <Link to={slide.secondaryButton.path}>{slide.secondaryButton.text}</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0055A4] mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SETM vous accompagne dans tous vos projets de construction et d'infrastructure avec une
              équipe expérimentée et pluridisciplinaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <Building2 className="h-12 w-12 text-[#0055A4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bureau d'études techniques</h3>
              <p className="text-gray-600 mb-4">Conception de projets de construction adaptés à vos besoins.</p>
              <Link
                to="/services"
                className="text-[#0055A4] hover:text-[#003F7D] font-medium inline-flex items-center"
              >
                En savoir plus
              </Link>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <CheckCircle2 className="h-12 w-12 text-[#0055A4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contrôle technique</h3>
              <p className="text-gray-600 mb-4">
                Vérification de la conformité des projets aux normes en vigueur.
              </p>
              <Link
                to="/services"
                className="text-[#0055A4] hover:text-[#003F7D] font-medium inline-flex items-center"
              >
                En savoir plus
              </Link>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <Lightbulb className="h-12 w-12 text-[#0055A4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Assistance à maîtrise d'ouvrage</h3>
              <p className="text-gray-600 mb-4">
                Accompagnement des maîtres d'ouvrage tout au long du projet.
              </p>
              <Link
                to="/services"
                className="text-[#0055A4] hover:text-[#003F7D] font-medium inline-flex items-center"
              >
                En savoir plus
              </Link>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <Shield className="h-12 w-12 text-[#0055A4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coordination SPS</h3>
              <p className="text-gray-600 mb-4">Sécurité et protection de la santé sur les chantiers.</p>
              <Link
                to="/services"
                className="text-[#0055A4] hover:text-[#003F7D] font-medium inline-flex items-center"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Derniers Projets */}
      <LatestProjects />

      {/* Partenaires */}
      <Partners />

      {/* Témoignages */}
      <Testimonials />

      {/* About Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0055A4] mb-6">À propos de SETM</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2006, SETM est une SARL spécialisée dans l'ingénierie, le bâtiment, les ouvrages
                d'art et le génie civil à La Réunion.
              </p>
              <p className="text-gray-600 mb-6">
                Notre équipe de 9 professionnels qualifiés met son expertise au service de vos projets, avec
                un engagement constant pour la qualité et la sécurité.
              </p>
              <Button asChild className="bg-[#0055A4] hover:bg-[#003F7D] text-white">
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
      <section className="py-16 bg-[#0055A4] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment SETM peut vous
            accompagner.
          </p>
          <Button asChild size="lg" className="bg-[#F5A623] text-white hover:bg-[#F5A623]/80">
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;