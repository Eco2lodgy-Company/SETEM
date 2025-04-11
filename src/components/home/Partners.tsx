
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const partners = [
  {
    id: 1,
    name: "Région Réunion",
    logo: "https://images.unsplash.com/photo-1490971774356-7fac993cc438",
  },
  {
    id: 2,
    name: "Département de La Réunion",
    logo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 3,
    name: "Université de La Réunion",
    logo: "https://images.unsplash.com/photo-1592303645152-f2786aeb903d",
  },
  {
    id: 4,
    name: "CHU de La Réunion",
    logo: "https://images.unsplash.com/photo-1587351021759-3e566b3db679",
  },
  {
    id: 5,
    name: "CIREST",
    logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  },
  {
    id: 6,
    name: "CINOR",
    logo: "https://images.unsplash.com/photo-1558403194-611308249627",
  },
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-SETM-900 mb-4">Nos partenaires</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ils nous font confiance pour leurs projets d'ingénierie et de construction
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {partners.map((partner) => (
              <CarouselItem key={partner.id} className="md:basis-1/3 lg:basis-1/6 px-4">
                <div className="h-24 flex items-center justify-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
