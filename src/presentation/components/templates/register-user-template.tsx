'use client'
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import Link from "next/link";
import { AsideBranding } from "../organisms/aside-branding";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../atoms/select";
import { Separator } from "../atoms/separator";

export const RegisterUserTemplate = () => {
  return (
    <main className="flex flex-col min-h-screen md:flex-row">
      <AsideBranding />
      <section className="pb-10 flex-1 flex mt-20 md:mt-0 md:items-center md:pb-0">
        <form action="" className="px-8 flex flex-col gap-4 w-full md:px-[20%]">
          <span>
            <h1 className="text-center md:text-left text-2xl">Registrar</h1>
            <h2 className="pt-2">Insira seus dados para se registrar.</h2>
          </span>
          <div className="grid items-center gap-3 w-full mt-4 md:mt-2">
            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" placeholder="Nome" />
          </div>
          <div className="grid items-center gap-3 w-full">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid items-center gap-3 w-full">
            <Label htmlFor="password">Senha</Label>
            <Input type="password" id="password" placeholder="Senha" />
          </div>
          <div className="grid items-center gap-3 w-full">
            <Label htmlFor="passwordConfirmation">Confirmação de senha:</Label>
            <Input type="password" id="passwordConfirmation" placeholder="Confirmar Senha" />
          </div>
          <Separator />
          <div className="grid items-center gap-3 w-full">
            <Label htmlFor="account-type">Tipo de conta:</Label>
            <Select defaultValue="CM">
              <SelectTrigger className="w-full bg-white!">
                <SelectValue placeholder="Selecione o tipo de cona" />
              </SelectTrigger>
              <SelectContent id="account-type">
                <SelectItem value="CM">Comunidade</SelectItem>
                <SelectItem value="CF">Coordenação Fatec</SelectItem>
                <SelectItem value="AF">Aluno Fatec</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="uppercase py-6 mt-4">Registrar</Button>
          <Link href="/login" className="text-center">Já tem cadastro? Clique aqui!</Link>
        </form>
      </section>
    </main>
  )
}