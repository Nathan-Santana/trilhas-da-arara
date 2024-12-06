import { Calendar, Star, MapPin, Clock, Users, Camera } from 'lucide-react'
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

export default function ResultadosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="flex gap-8 mb-16">
        
        <div className="w-64 flex-shrink-0">
          <div className="space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-medium">Disponibilidade:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">De:</span>
                  <input
                    type="date"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Até:</span>
                  <input
                    type="date"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Ver a Disponibilidade
              </Button>
            </div>

            
            <div className="space-y-4">
              <h3 className="font-medium">Pontos Turísticos</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="cachoeiras" />
                  <label htmlFor="cachoeiras" className="text-sm">Cachoeiras</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="trilhas" />
                  <label htmlFor="trilhas" className="text-sm">Trilhas</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cultural" />
                  <label htmlFor="cultural" className="text-sm">Cultural</label>
                </div>
              </div>
              <Button variant="link" className="text-[#D85E1B] hover:text-[#C24E0F] p-0">
                Mostrar mais destinos
              </Button>
            </div>

            
            <div className="space-y-4">
              <h3 className="font-medium">Hospedagem</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="camping" />
                  <label htmlFor="camping" className="text-sm">Camping</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pousada" />
                  <label htmlFor="pousada" className="text-sm">Pousada</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hotel" />
                  <label htmlFor="hotel" className="text-sm">Hotel</label>
                </div>
              </div>
            </div>

            
            <div className="space-y-4">
              <h3 className="font-medium">Restaurantes</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pizza" />
                  <label htmlFor="pizza" className="text-sm">Pizza</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hamburguer" />
                  <label htmlFor="hamburguer" className="text-sm">Hambúrguer</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="regional" />
                  <label htmlFor="regional" className="text-sm">Comida Regional</label>
                </div>
              </div>
              <Button variant="link" className="text-[#D85E1B] hover:text-[#C24E0F] p-0">
                Mostrar mais destinos
              </Button>
            </div>
          </div>
        </div>

        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium">Coisas para fazer em Taquaruçu</h1>
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
              <Link href={`/destino/${index + 1}`} key={index}>
                <Card className="flex overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/roncadeira.png"
                    alt="Cachoeira da Roncadeira"
                    width={200}
                    height={150}
                    className="object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-[#D85E1B]/10 text-[#D85E1B] text-xs rounded">
                            CACHOEIRAS
                          </span>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            (256 reviews)
                          </span>
                        </div>
                        <h3 className="text-lg font-medium mb-2">
                          Cachoeira da Roncadeira
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            2 horas
                          </div>
                          <span>Transporte</span>
                          <span>Roteiro de Família</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-medium text-[#D85E1B]">
                          R$20,00
                        </div>
                        <div className="text-sm text-muted-foreground">
                          por pessoa
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-8">
            Ver mais
          </Button>

          
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Experiências Populares</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Tour Fotográfico",
                  description: "Capture as melhores paisagens",
                  icon: <Camera className="w-6 h-6" />,
                  price: "R$150,00"
                },
                {
                  title: "Trilha Guiada",
                  description: "Explore com especialistas locais",
                  icon: <MapPin className="w-6 h-6" />,
                  price: "R$80,00"
                },
                {
                  title: "Workshop Culinário",
                  description: "Aprenda pratos regionais",
                  icon: <Users className="w-6 h-6" />,
                  price: "R$120,00"
                }
              ].map((experience, index) => (
                <Card key={index} className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#D85E1B]/10 flex items-center justify-center text-[#D85E1B] mb-4">
                    {experience.icon}
                  </div>
                  <h3 className="font-medium mb-2">{experience.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#D85E1B]">{experience.price}</span>
                    <Button variant="outline" size="sm">Reservar</Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

         
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Dicas de Viagem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-medium mb-4">Melhor Época para Visitar</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Abril a Outubro: Temporada Ideal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span>Novembro a Março: Época de Chuvas</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="font-medium mb-4">O que Levar</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Protetor solar e repelente</li>
                  <li>• Roupas leves e tênis para trilha</li>
                  <li>• Garrafa de água</li>
                  <li>• Câmera para fotos</li>
                </ul>
              </Card>
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
                  name: "Ana Silva",
                  date: "Dezembro 2023",
                  rating: 5,
                  comment: "Experiência incrível! As cachoeiras são ainda mais bonitas pessoalmente."
                },
                {
                  name: "Carlos Santos",
                  date: "Novembro 2023",
                  rating: 5,
                  comment: "Guias muito preparados e trilhas bem sinalizadas. Recomendo!"
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
                <h3 className="font-medium mb-4">Como Chegar</h3>
                <p className="text-sm text-muted-foreground">
                  Taquaruçu está localizada a 32km de Palmas. Acesso pela rodovia TO-030.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-medium mb-4">Horário de Funcionamento</h3>
                <p className="text-sm text-muted-foreground">
                  Cachoeiras: 8h às 17h
                  <br />
                  Restaurantes: 11h às 22h
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-medium mb-4">Contatos Úteis</h3>
                <p className="text-sm text-muted-foreground">
                  Emergência: 192
                  <br />
                  Bombeiros: 193
                  <br />
                  Polícia: 190
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

