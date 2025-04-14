
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Hôpital de Saint-Pierre",
    category: "Construction publique",
    description: "Extension et réhabilitation des services d'urgence de l'hôpital de Saint-Pierre.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    date: "2023",
  },
  {
    id: 2,
    title: "Résidence Les Tropiques",
    category: "Logements collectifs",
    description: "Construction d'un ensemble de 120 logements collectifs à Saint-Denis avec certification HQE.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    date: "2022",
  },
  {
    id: 3,
    title: "Lycée Roland Garros",
    category: "Établissement scolaire",
    description: "Rénovation énergétique et mise aux normes sismiques du lycée Roland Garros au Tampon.",
    image: "https://images.unsplash.com/photo-1473307829472-15c0538dfbc3",
    date: "2023",
  },
  {
    id: 4,
    title: "Route des Tamarins",
    category: "Infrastructure routière",
    description: "Contrôle technique pour la construction d'un nouveau tronçon de la Route des Tamarins.",
    image: "https://images.unsplash.com/photo-1626891825847-0fbd5e099eff",
    date: "2021",
  },
];

const LatestProjects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-SETM-900 mb-4">Nos derniers projets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns des projets récents sur lesquels SETM a eu l'opportunité de travailler
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full border shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-SETM-700 hover:bg-SETM-800">{project.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {project.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                  <Link to="/projet" className="ml-auto">
  <Button variant="outline" size="sm">
    En savoir plus
  </Button>
</Link>
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
        
        {/* <div className="text-center mt-10">
          <Button asChild className="bg-SETM-700 hover:bg-SETM-800">
            <Link to="/services">Voir tous nos projets</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default LatestProjects;
