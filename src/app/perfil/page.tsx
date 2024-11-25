import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Edit2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function PerfilPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-[#D85E1B]">
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground">Meu Perfil</span>
      </nav>

      <div className="grid md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Info */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="/Ellipse 67.png"
                  alt="Foto do perfil"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <button className="absolute bottom-4 right-0 p-2 bg-[#D85E1B] rounded-full text-white">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <h2 className="font-medium text-lg">Masum Rana</h2>
            <div className="text-sm text-muted-foreground">
              <div>Gothenburg</div>
              <div>15 de Fevereiro</div>
            </div>
          </div>

          <Separator />

          {/* Navigation */}
          <nav className="space-y-2">
            <Link
              href="/perfil/historico"
              className="block px-4 py-2 rounded-lg hover:bg-muted text-sm"
            >
              Histórico De Viagens
            </Link>
            <Link
              href="/perfil/privacidade"
              className="block px-4 py-2 rounded-lg hover:bg-muted text-sm"
            >
              Configurações De Privacidade
            </Link>
            <Link
              href="/perfil/notificacoes"
              className="block px-4 py-2 rounded-lg hover:bg-muted text-sm"
            >
              Gerenciar Notificações
            </Link>
            <Link
              href="/logout"
              className="block px-4 py-2 rounded-lg hover:bg-muted text-sm text-red-500"
            >
              Sair
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Personal Information */}
          <div className="bg-[#FDF7F2] p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-6">Informações Pessoais</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm">Nome:</label>
                <Input defaultValue="Masum Rana" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Data De Nascimento:</label>
                <Input type="date" defaultValue="1986-03-15" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Telefone:</label>
                <Input defaultValue="+46-7544 394 68" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Localização:</label>
                <Input defaultValue="Gothenburg" />
              </div>
              <Button className="bg-[#3F3F3F] hover:bg-[#2F2F2F] text-white">
                Salvar
              </Button>
            </div>
          </div>

          {/* Security */}
          <div className="bg-[#FDF7F2] p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-6">Segurança:</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm">Endereço De Email:</label>
                <Input type="email" defaultValue="masumrana15@gmail.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Senha:</label>
                <Input type="password" defaultValue="********" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Confirmar Senha:</label>
                <Input type="password" defaultValue="********" />
              </div>
              <Button className="bg-[#3F3F3F] hover:bg-[#2F2F2F] text-white">
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

