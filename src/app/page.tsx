import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20">
      <h1 className="text-5xl md:text-6xl font-serif text-center mb-12">
        Siga as asas do cerrado
      </h1>
      
      <div className="relative max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Lugares para curtir, comer, hotéis..."
          className="w-full px-6 py-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D85E1B]"
        />
        <Link href="/menuLocais" className="absolute right-2 top-1/2 -translate-y-1/2">
          <button className="px-6 py-2 bg-[#D85E1B] text-white rounded-full hover:bg-[#C24E0F] transition-colors">
            Buscar
          </button>
        </Link>
      </div>

      <div className="overflow-hidden shadow-lg">
        <Image
          src="/dunas.png"
          alt="Paisagem do cerrado"
          width={800}
          height={400}
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  )
}