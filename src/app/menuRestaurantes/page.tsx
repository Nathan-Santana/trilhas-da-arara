import { Calendar, Star, MapPin, Utensils, DollarSign, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8 mb-16">
        {/* Sidebar com filtros */}
        <div className="w-64 flex-shrink-0">
          <div className="space-y-6">
            {/* Tipo de Cozinha */}
            <div className="space-y-4">
              <h3 className="font-medium">Tipo de Cozinha</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="regional" />
                  <label htmlFor="regional" className="text-sm">Regional</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="italiana" />
                  <label htmlFor="italiana" className="text-sm">Italiana</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="japonesa" />
                  <label htmlFor="japonesa" className="text-sm">Japonesa</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vegetariana" />
                  <label htmlFor="vegetariana" className="text-sm">Vegetariana</label>
                </div>
              </div>
              <Button variant="link" className="text-[#D85E1B] hover:text-[#C24E0F] p-0">
                Mostrar mais tipos de cozinha
              </Button>
            </div>

            {/* Faixa de Preço */}
            <div className="space-y-4">
              <h3 className="font-medium">Faixa de Preço</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="economico" />
                  <label htmlFor="economico" className="text-sm">$ (Econômico)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="moderado" />
                  <label htmlFor="moderado" className="text-sm">$$ (Moderado)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="fino" />
                  <label htmlFor="fino" className="text-sm">$$$ (Fino)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="luxo" />
                  <label htmlFor="luxo" className="text-sm">$$$$ (Luxo)</label>
                </div>
              </div>
            </div>

            {/* Refeições */}
            <div className="space-y-4">
              <h3 className="font-medium">Refeições</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="cafe-da-manha" />
                  <label htmlFor="cafe-da-manha" className="text-sm">Café da manhã</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="almoco" />
                  <label htmlFor="almoco" className="text-sm">Almoço</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="jantar" />
                  <label htmlFor="jantar" className="text-sm">Jantar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="brunch" />
                  <label htmlFor="brunch" className="text-sm">Brunch</label>
                </div>
              </div>
            </div>

            {/* Características */}
            <div className="space-y-4">
              <h3 className="font-medium">Características</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="delivery" />
                  <label htmlFor="delivery" className="text-sm">Delivery</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="reservas" />
                  <label htmlFor="reservas" className="text-sm">Aceita reservas</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vista" />
                  <label htmlFor="vista" className="text-sm">Vista panorâmica</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ao-ar-livre" />
                  <label htmlFor="ao-ar-livre" className="text-sm">Área ao ar livre</label>
                </div>
              </div>
              <Button variant="link" className="text-[#D85E1B] hover:text-[#C24E0F] p-0">
                Mostrar mais características
              </Button>
            </div>
          </div>
        </div>

        {/* Área principal de resultados */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium">Restaurantes em Taquaruçu</h1>
            <Select defaultValue="popularity">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularidade</SelectItem>
                <SelectItem value="rating">Avaliação</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de Restaurantes */}
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Link href={`/restaurante/${index + 1}`} key={index}>
                <Card className="flex overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Restaurante"
                    width={200}
                    height={150}
                    className="object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-[#D85E1B]/10 text-[#D85E1B] text-xs rounded">
                            REGIONAL
                          </span>
                          <div className="flex">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            (128 avaliações)
                          </span>
                        </div>
                        <h3 className="text-lg font-medium mb-2">
                          Restaurante Sabor do Cerrado
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            1 km do centro
                          </div>
                          <div className="flex items-center gap-1">
                            <Utensils className="w-4 h-4" />
                            Culinária regional
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            $$
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-2">
                          Aberto agora
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          11:00 - 23:00
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-8">
            Ver mais restaurantes
          </Button>

          {/* Seção de Destaques Culinários */}
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Destaques Culinários</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Peixe na Folha de Bananeira",
                  description: "Prato típico da culinária local",
                  image: "peixe-bananeira.jpg"
                },
                {
                  title: "Paçoca de Carne Seca",
                  description: "Iguaria tradicional do cerrado",
                  image: "pacoca-carne.jpg"
                },
                {
                  title: "Galinhada com Pequi",
                  description: "Sabor autêntico da região",
                  image: "galinhada-pequi.jpg"
                }
              ].map((dish, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=${dish.title}`}
                    alt={dish.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{dish.title}</h3>
                    <p className="text-sm text-muted-foreground">{dish.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Seção de Avaliações Recentes */}
          <section className="mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium">Avaliações Recentes</h2>
              <Button variant="outline">Ver todas</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Carlos Silva",
                  date: "Fevereiro 2024",
                  rating: 5,
                  comment: "A comida regional é simplesmente incrível! Recomendo o peixe na folha de bananeira."
                },
                {
                  name: "Ana Oliveira",
                  date: "Janeiro 2024",
                  rating: 4,
                  comment: "Ótimo atendimento e ambiente aconchegante. A paçoca de carne seca é um must-try!"
                }
              ].map((review, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Seção de Informações Úteis */}
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Informações Úteis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-medium mb-4">Horários de Pico</h3>
                <p className="text-sm text-muted-foreground">
                  Almoço: 12h às 14h
                  <br />
                  Jantar: 19h às 21h
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-medium mb-4">Reservas</h3>
                <p className="text-sm text-muted-foreground">
                  Recomendamos fazer reservas para os restaurantes mais populares, especialmente nos fins de semana.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-medium mb-4">Dicas Locais</h3>
                <p className="text-sm text-muted-foreground">
                  Experimente os pratos com ingredientes típicos do cerrado, como pequi, baru e buriti.
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

