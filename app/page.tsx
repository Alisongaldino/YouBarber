
import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Input } from "./_components/ui/input"
const Home = () => {
  return <div>
    {  }
    <Header/>
    <div className="p-5">
    <h2 className="text-xl font-bold">Olá, Alison</h2>
    <p>Terça-feira, 5 de Agosto </p>

    <div className="flex items-center gap-2 mt-24">
    <Input placeholder="Faça sua busca..."/>
    <Button>
      <SearchIcon/>
    </Button>
      </div>

      <div className="relative mt-6 w-full h-[150px]">
      <Image 
      alt="Agende nos melhores coma you barber"
      src="/Banner Pizza.png" 
      fill 
      className="object-cover rounded-kl"/>
      </div>
    </div>
  </div>
}

export default Home