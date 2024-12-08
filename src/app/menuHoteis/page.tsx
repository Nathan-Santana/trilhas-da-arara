import { Calendar, Star, MapPin, Wifi, Coffee, Utensils } from 'lucide-react'
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

export default function MenuHoteisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8 mb-16">
        
        <div className="w-64 flex-shrink-0">
          <div className="space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-medium">Disponibilidade:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Check-in:</span>
                  <input
                    type="date"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Check-out:</span>
                  <input
                    type="date"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Ver Disponibilidade
              </Button>
            </div>

            
            <div className="space-y-4">
              <h3 className="font-medium">Tipo de Acomodação</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="hotel" />
                  <label htmlFor="hotel" className="text-sm">Hotel</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pousada" />
                  <label htmlFor="pousada" className="text-sm">Pousada</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="resort" />
                  <label htmlFor="resort" className="text-sm">Resort</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="camping" />
                  <label htmlFor="camping" className="text-sm">Camping</label>
                </div>
              </div>
            </div>

            
            <div className="space-y-4">
              <h3 className="font-medium">Comodidades</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="wifi" />
                  <label htmlFor="wifi" className="text-sm">Wi-Fi</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="piscina" />
                  <label htmlFor="piscina" className="text-sm">Piscina</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="estacionamento" />
                  <label htmlFor="estacionamento" className="text-sm">Estacionamento</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cafe-da-manha" />
                  <label htmlFor="cafe-da-manha" className="text-sm">Café da manhã</label>
                </div>
              </div>
              <Button variant="link" className="text-[#D85E1B] hover:text-[#C24E0F] p-0">
                Mostrar mais comodidades
              </Button>
            </div>

            
            <div className="space-y-4">
              <h3 className="font-medium">Faixa de Preço</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="economico" />
                  <label htmlFor="economico" className="text-sm">Econômico</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="moderado" />
                  <label htmlFor="moderado" className="text-sm">Moderado</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="luxo" />
                  <label htmlFor="luxo" className="text-sm">Luxo</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium">Hotéis em Taquaruçu</h1>
            <Select defaultValue="popularity">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularidade</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
                <SelectItem value="rating">Avaliação</SelectItem>
              </SelectContent>
            </Select>
          </div>

          
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Link href={`/hotel/${index + 1}`} key={index}>
                <Card className="flex overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Hotel"
                    width={200}
                    height={150}
                    className="object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-[#D85E1B]/10 text-[#D85E1B] text-xs rounded">
                            HOTEL
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
                          Hotel Cachoeira Dourada
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            2 km do centro
                          </div>
                          <div className="flex items-center gap-1">
                            <Wifi className="w-4 h-4" />
                            Wi-Fi grátis
                          </div>
                          <div className="flex items-center gap-1">
                            <Coffee className="w-4 h-4" />
                            Café da manhã
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-medium text-[#D85E1B]">
                          R$180,00
                        </div>
                        <div className="text-sm text-muted-foreground">
                          por noite
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-8">
            Ver mais hotéis
          </Button>

          
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Ofertas Especiais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Pacote Romântico",
                  description: "Jantar à luz de velas e spa para casal",
                  price: "R$350,00"
                },
                {
                  title: "Férias em Família",
                  description: "Atividades para crianças e descontos",
                  price: "R$450,00"
                },
                {
                  title: "Aventura na Natureza",
                  description: "Trilhas guiadas e equipamentos inclusos",
                  price: "R$280,00"
                }
              ].map((offer, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-medium mb-2">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#D85E1B]">{offer.price}</span>
                    <Button variant="outline" size="sm">Reservar</Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          
          <section className="mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium">Avaliações Recentes</h2>
              <Button variant="outline">Ver todas</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Mariana Oliveira",
                  date: "Janeiro 2024",
                  rating: 5,
                  comment: "Excelente estadia! O hotel superou nossas expectativas."
                },
                {
                  name: "Pedro Almeida",
                  date: "Dezembro 2023",
                  rating: 4,
                  comment: "Ótima localização e equipe muito atenciosa. Recomendo!"
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

          
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Informações Úteis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-medium mb-4">Política de Cancelamento</h3>
                <p className="text-sm text-muted-foreground">
                  Cancelamento gratuito até 48 horas antes do check-in na maioria dos hotéis.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-medium mb-4">Check-in e Check-out</h3>
                <p className="text-sm text-muted-foreground">
                  Check-in: a partir das 14h
                  <br />
                  Check-out: até as 12h
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-medium mb-4">Contato</h3>
                <p className="text-sm text-muted-foreground">
                  Central de Reservas: (63) 3123-4567
                  <br />
                  E-mail: reservas@trilhasarara.com
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

