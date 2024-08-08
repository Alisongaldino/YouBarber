import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Input } from "./_components/ui/input";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";


const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Alison</h2>
        <p>Terça-feira, 5 de Agosto </p>
        {/* Busca */}
        <div className="flex items-center gap-2 mt-24">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* banner */}
        <div className="relative mt-6 w-full h-[150px]">
          <Image
            alt="Agende nos melhores coma you barber"
            src="/Banner Pizza.png"
            fill
            className="object-cover rounded-kl"
          />
        </div>

        {/* Agendamento */}

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">

            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              {/* Avatar e nome */}

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia Woods</p>
              </div>
            </div>

            {/* Direita */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
