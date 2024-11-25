import { Calendar, Star } from 'lucide-react'
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
      <div className="flex gap-8">
        {/* Sidebar com filtros */}
        <div className="w-64 flex-shrink-0">
          <div className="space-y-6">
            {/* Disponibilidade */}
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

            {/* Pontos Turísticos */}
            <div className="space-y-4">
              <h3 className="font-medium">Pontos Turísticos</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="cachoeiras" />
                  <label
                    htmlFor="cachoeiras"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Cachoeiras
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="trilhas" />
                  <label
                    htmlFor="trilhas"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Trilhas
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cultural" />
                  <label
                    htmlFor="cultural"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Cultural
                  </label>
                </div>
              </div>
              <Button variant="link" className="text-[#D85E1B] hover:text-[#C24E0F]">
                Mostrar mais destinos
              </Button>
            </div>

            {/* Hospedagem */}
            <div className="space-y-4">
              <h3 className="font-medium">Hospedagem</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="camping" />
                  <label
                    htmlFor="camping"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Camping
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pousada" />
                  <label
                    htmlFor="pousada"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pousada
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hotel" />
                  <label
                    htmlFor="hotel"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hotel
                  </label>
                </div>
              </div>
            </div>

            {/* Restaurantes */}
            <div className="space-y-4">
              <h3 className="font-medium">Restaurantes</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pizza" />
                  <label
                    htmlFor="pizza"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pizza
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hamburguer" />
                  <label
                    htmlFor="hamburguer"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hambúrguer
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="regional" />
                  <label
                    htmlFor="regional"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Comida Regional
                  </label>
                </div>
              </div>
              <Button variant="link" className="text-[#D85E1B] hover:text-[#C24E0F]">
                Mostrar mais destinos
              </Button>
            </div>
          </div>
        </div>

        {/* Área principal de resultados */}
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
            {/* Card de resultado */}
            {Array.from({ length: 5 }).map((_, index) => (
              <Link href={`/destino/${index + 1}`} key={index}>
                <Card className="flex overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/roncadeira.png"
                    alt="Local"
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
                            <Calendar className="w-4 h-4" />
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

          <Button
            variant="outline"
            className="w-full mt-8"
          >
            Ver mais
          </Button>
        </div>
      </div>
    </div>
  )
}

