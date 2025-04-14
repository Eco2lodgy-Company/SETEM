import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// CSS personnalisé pour le carrousel
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
    background: #0055A4; // Utilisation du bleu principal au survol
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
    bottom: 20px;
  }
  .slick-dots li button:before {
    font-size: 14px;
    color: #E6F0FA; // Utilisation du bleu clair pour les points inactifs
    opacity: 0.6;
  }
  .slick-dots li.slick-active button:before {
    color: #E6F0FA; // Utilisation du bleu clair pour les points actifs
    opacity: 1;
  }
`;

const ProjectDetails = () => {
  // Données des slides pour le carrousel du projet
  const projectSlides = [
    {
      image: "https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGhvc3BpdGFsfGVufDB8fDB8fHww",
      caption: "Façade principale de l’hôpital",
    },
    {
      image: "https://images.unsplash.com/photo-1565307528294-f70f3c7094e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvc3BpdGFsfGVufDB8fDB8fHww",
      caption: "Espaces intérieurs modernes",
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
      caption: "Unité de soins avancés",
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
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <main>
      {/* Hero Section - Carrousel du projet */}
      <section className="relative h-[70vh] min-h-[500px]">
        <style>{slickStyles}</style>
        <Slider {...settings} className="h-full">
          {projectSlides.map((slide, index) => (
            <div key={index} className="relative h-[70vh] min-h-[500px]">
              {/* Image de fond */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              ></motion.div>
              {/* Dégradé */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0055A4]/85 to-[#003F7D]/85"></div>
              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <motion.div
                  className="max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <motion.span
                    className="inline-block px-4 py-2 bg-[#F5A623]/30 text-[#E6F0FA] rounded-full text-sm font-semibold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Projet d’envergure
                  </motion.span>
                  <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Hôpital de Saint-Pierre
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl text-[#E6F0FA] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Un centre hospitalier ultramoderne conçu pour répondre aux besoins médicaux de La Réunion avec innovation et durabilité.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white rounded-full px-8 py-3 font-semibold transform transition-all hover:scale-105 shadow-lg"
                    >
                      <Link to="/contact">Nous contacter</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0055A4] mb-6 text-center">
              Présentation du projet
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              L’Hôpital de Saint-Pierre est un projet ambitieux lancé en 2022 pour renforcer l’offre de soins dans le sud de La Réunion. Avec une capacité de 300 lits, cet établissement intègre des technologies médicales de pointe, des infrastructures durables et un design centré sur le bien-être des patients et du personnel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Building2 className="h-10 w-10 text-[#F5A623] mx-auto mb-2" />
                <p className="font-semibold text-[#0055A4]">300 lits</p>
                <p className="text-gray-600">Capacité hospitalière</p>
              </div>
              <div className="text-center">
                <Calendar className="h-10 w-10 text-[#F5A623] mx-auto mb-2" />
                <p className="font-semibold text-[#0055A4]">2022-2026</p>
                <p className="text-gray-600">Durée du projet</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-[#F5A623] mx-auto mb-2" />
                <p className="font-semibold text-[#0055A4]">Saint-Pierre</p>
                <p className="text-gray-600">Localisation</p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 text-[#F5A623] mx-auto mb-2" />
                <p className="font-semibold text-[#0055A4]">500+ emplois</p>
                <p className="text-gray-600">Impact local</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0055A4] mb-4">
              Points forts du projet
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les caractéristiques qui font de l’Hôpital de Saint-Pierre une référence en matière d’infrastructure médicale.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technologie médicale",
                description: "Équipements de diagnostic et de soin de dernière génération pour une prise en charge optimale.",
              },
              {
                title: "Durabilité",
                description: "Conception éco-responsable avec panneaux solaires et gestion optimisée des ressources.",
              },
              {
                title: "Confort des patients",
                description: "Espaces lumineux, chambres individuelles et jardins thérapeutiques pour le bien-être.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-[#0055A4] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0055A4] mb-4">
              Galerie du projet
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les étapes clés et les réalisations de l’Hôpital de Saint-Pierre.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectSlides.map((slide, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-4">
                  <p className="text-sm font-medium">{slide.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0055A4] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Envie d’en savoir plus ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez SETM pour découvrir comment nous pouvons accompagner vos projets d’infrastructures médicales.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#F5A623] text-white hover:bg-[#F5A623]/80 rounded-full px-8 py-3"
            >
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button
          asChild
          variant="outline"
          className="text-[#0055A4] border-[#0055A4] hover:bg-[#0055A4]/10 rounded-full"
        >
          <Link to="/projets" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" /> Retour aux projets
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default ProjectDetails;