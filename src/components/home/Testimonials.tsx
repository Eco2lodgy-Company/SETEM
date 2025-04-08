
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Directrice de projet, Région Réunion",
    content: "SETEM a été d'une aide précieuse pour notre projet d'extension du lycée. Leur expertise technique et leur professionnalisme ont permis de résoudre des problèmes complexes tout en respectant notre calendrier serré.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas Rivière",
    role: "Architecte, Cabinet AR+",
    content: "Nous collaborons avec SETEM depuis plus de 5 ans sur différents projets. Leur équipe est réactive, compétente et propose toujours des solutions innovantes adaptées à nos contraintes architecturales.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    id: 3,
    name: "Laurent Payet",
    role: "Responsable technique, SIDR",
    content: "Le contrôle technique effectué par SETEM sur notre projet de logements sociaux a été exemplaire. Leur rigueur et leur approche méthodique nous ont permis d'obtenir toutes les certifications nécessaires sans délai.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 4,
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-getec-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none shadow-sm bg-gray-50">
                  <CardContent className="pt-10 px-8">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-300" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="pb-8 px-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
