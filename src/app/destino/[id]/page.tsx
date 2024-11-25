import Image from "next/image"
import { Star, Share2, Clock, Ticket, Award, Heart, ShieldCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function DestinoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Coluna principal */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-serif mb-4">Cachoeira da Roncadeira</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Tocantins</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(256 reviews)</span>
          </div>

          {/* Galeria de imagens */}
          <div className="space-y-4 mb-8">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
              <Image
                src="/roncadeira.png"
                alt="Cachoeira da Roncadeira"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/roncadeira.png"
                    alt={`Imagem ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Benefícios */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-start gap-2 p-4 bg-muted rounded-lg">
              <ShieldCheck className="w-5 h-5 text-[#D85E1B]" />
              <div>
                <h3 className="font-medium text-sm">Cancelamento Gratuito</h3>
                <p className="text-xs text-muted-foreground">Cancele com 24 horas de antecedência</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-4 bg-muted rounded-lg">
              <Clock className="w-5 h-5 text-[#D85E1B]" />
              <div>
                <h3 className="font-medium text-sm">Duração 3,5 Horas</h3>
                <p className="text-xs text-muted-foreground">Verifique a disponibilidade</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-4 bg-muted rounded-lg">
              <Ticket className="w-5 h-5 text-[#D85E1B]" />
              <div>
                <h3 className="font-medium text-sm">Mobile Ticketing</h3>
                <p className="text-xs text-muted-foreground">Use seu telefone ou imprima seu voucher</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-4 bg-muted rounded-lg">
              <Award className="w-5 h-5 text-[#D85E1B]" />
              <div>
                <h3 className="font-medium text-sm">Guia Turístico</h3>
                <p className="text-xs text-muted-foreground">Inglês e Português</p>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-serif">Descrição</h2>
            <div className="prose max-w-none">
              <p>A Cachoeira da Roncadeira é um dos lugares naturais mais impressionantes do região do Tocantins, Brasil. Situada no Parque Estadual do Jalapão, esta cachoeira é um verdadeiro paraíso para os amantes da natureza e da aventura.</p>
              <p>Com uma queda d'água de aproximadamente 50 metros, a Roncadeira proporciona uma experiência única aos visitantes. A água cristalina despenca em uma sequência de quedas, formando um belo espetáculo natural e refrescante.</p>
              <p>O acesso à cachoeira é feito através de uma trilha bem sinalizada com cerca de 2km de extensão. Durante o percurso, os visitantes podem apreciar a rica biodiversidade do cerrado brasileiro, com sua vegetação típica e fauna diversificada.</p>
            </div>
          </div>

          {/* Atividades */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Atividades</h2>
            <div className="space-y-4">
              <h3 className="font-medium">O Que Tem Pra Fazer?</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Trilhas ecológicas</li>
                <li>Banho de cachoeira</li>
                <li>Fotografia</li>
                <li>Observação da natureza</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coluna lateral - Reservas */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-4">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Reservas</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm">De:</label>
                    <input
                      type="date"
                      className="w-full rounded-md border px-3 py-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Até:</label>
                    <input
                      type="date"
                      className="w-full rounded-md border px-3 py-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Quantidade De Pessoas:</label>
                    <Select defaultValue="2">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 adulto</SelectItem>
                        <SelectItem value="2">2 adultos</SelectItem>
                        <SelectItem value="3">3 adultos</SelectItem>
                        <SelectItem value="4">4 adultos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Transporte:</label>
                    <Select defaultValue="mini-onibus">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mini-onibus">Mini-Ônibus</SelectItem>
                        <SelectItem value="van">Van</SelectItem>
                        <SelectItem value="carro">Carro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-2xl font-bold text-[#D85E1B]">R$40,00</span>
                </div>
                <Button className="w-full bg-[#D85E1B] hover:bg-[#C24E0F]">
                  Confirmar Reserva
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Heart className="w-4 h-4 mr-2" />
                    Lista de Desejos
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

