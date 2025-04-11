
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast.success('Votre message a été envoyé avec succès!', {
        description: 'Nous vous répondrons dans les plus brefs délais.',
        icon: <CheckCircle className="h-5 w-5" />,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour répondre à vos questions et vous accompagner dans vos projets
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-SETM-900 mb-6">Nos coordonnées</h2>
              <p className="text-gray-700 mb-8">
                N'hésitez pas à nous contacter par téléphone, email ou en nous rendant visite à notre siège social.
                Notre équipe sera ravie de vous accueillir et de discuter de vos projets.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-SETM-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      6 ter rue Victor Mac Auliffe<br />
                      97420 LE PORT
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-SETM-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                    <p className="text-gray-700">02 62 42 41 82</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-SETM-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:SETM@wanadoo.fr" className="text-SETM-700 hover:text-SETM-800 transition-colors">
                      SETM@wanadoo.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-semibold text-lg mb-4">Horaires d'ouverture</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <div>Lundi - Jeudi:</div>
                  <div>8h00 - 12h00, 13h00 - 17h00</div>
                  <div>Vendredi:</div>
                  <div>8h00 - 12h00, 13h00 - 16h00</div>
                  <div>Samedi - Dimanche:</div>
                  <div>Fermé</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-SETM-900 mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Votre email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre téléphone"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <AlertCircle className="h-5 w-5 text-SETM-700 flex-shrink-0 mt-0.5" />
                  <p>
                    En soumettant ce formulaire, vous acceptez que les informations saisies soient utilisées
                    pour vous recontacter dans le cadre de votre demande.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-SETM-800 hover:bg-SETM-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 mt-12">
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2999167124174!2d55.29!3d-20.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182877f0b36ae5d%3A0x97ddadfc0c22cee5!2s6%20Rue%20Victor%20Mac%20Auliffe%2C%20Le%20Port%2097420%2C%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte SETM OI"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contact;
