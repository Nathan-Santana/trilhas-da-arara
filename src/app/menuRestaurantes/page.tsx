import { Search, Filter, Star, MapPin, Clock, DollarSign } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
{/* no terminal :npx shadcn@latest add carousel*/}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <section className="relative mb-12">
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <Image
          src="/placeholder.svg?height=400&width=1200&text=Imagem+de+Destaque+Culinária"
          alt="Destaque Culinário"
          width={1200}
          height={400}
          className="w-full h-[400px] object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Descubra Sabores Únicos</h1>
          <p className="text-xl mb-8">Explore a rica gastronomia de Taquaruçu</p>
          <div className="flex w-full max-w-md gap-2">
            <Input placeholder="Buscar restaurantes..." className="bg-white text-black" />
            <Button className="bg-[#D85E1B] hover:bg-[#C24E0F]">
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </section>

      
      <section className="mb-8 flex justify-between items-center">
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
        <select className="border rounded-md p-2">
          <option>Ordenar por: Popularidade</option>
          <option>Ordenar por: Avaliação</option>
          <option>Ordenar por: Preço (menor-maior)</option>
          <option>Ordenar por: Preço (maior-menor)</option>
        </select>
      </section>

      
      <Carousel className="mb-12">
        <CarouselContent>
          {["Regional", "Italiana", "Japonesa", "Vegetariana", "Churrascaria", "Cafeteria"].map((category) => (
            <CarouselItem key={category} className="basis-1/4">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-lg font-semibold">{category}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={`/placeholder.svg?height=200&width=400&text=Restaurante+${index + 1}`}
              alt={`Restaurante ${index + 1}`}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Restaurante Sabor do Cerrado {index + 1}</h3>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">4.5</span>
                <span className="text-sm text-muted-foreground">(128 avaliações)</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  1 km do centro
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Aberto agora
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#D85E1B]">Culinária Regional</span>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pratos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Peixe na Folha de Bananeira", "Paçoca de Carne Seca", "Galinhada com Pequi", "Arroz com Pequi"].map((dish, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={`/placeholder.svg?height=150&width=300&text=${dish}`}
                alt={dish}
                width={300}
                height={150}
                className="w-full h-36 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-medium">{dish}</h3>
                <p className="text-sm text-muted-foreground">Sabor autêntico da região</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Experiências Gastronômicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=400&text=Tour+Gastronômico"
              alt="Tour Gastronômico"
              width={400}
              height={300}
              className="w-1/2 object-cover"
            />
            <CardContent className="p-6 w-1/2">
              <h3 className="text-xl font-semibold mb-2">Tour Gastronômico</h3>
              <p className="text-sm text-muted-foreground mb-4">Explore os melhores sabores da cidade em um tour guiado.</p>
              <Button className="w-full bg-[#D85E1B] hover:bg-[#C24E0F]">Saiba Mais</Button>
            </CardContent>
          </Card>
          <Card className="flex overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=400&text=Aula+de+Culinária"
              alt="Aula de Culinária"
              width={400}
              height={300}
              className="w-1/2 object-cover"
            />
            <CardContent className="p-6 w-1/2">
              <h3 className="text-xl font-semibold mb-2">Aula de Culinária</h3>
              <p className="text-sm text-muted-foreground mb-4">Aprenda a preparar pratos típicos com chefs locais.</p>
              <Button className="w-full bg-[#D85E1B] hover:bg-[#C24E0F]">Reservar</Button>
            </CardContent>
          </Card>
        </div>
      </section>

   
      <section>
        <h2 className="text-2xl font-bold mb-6">Dicas e Informações</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Horários de Pico</h3>
            <p className="text-sm text-muted-foreground">
              Almoço: 12h às 14h
              <br />
              Jantar: 19h às 21h
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Reservas</h3>
            <p className="text-sm text-muted-foreground">
              Recomendamos fazer reservas para os restaurantes mais populares, especialmente nos fins de semana.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Ingredientes Locais</h3>
            <p className="text-sm text-muted-foreground">
              Experimente pratos com ingredientes típicos do cerrado, como pequi, baru e buriti.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

