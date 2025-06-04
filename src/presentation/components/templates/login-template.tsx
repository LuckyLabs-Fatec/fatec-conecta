'use client'
import Image from "next/image";
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import { Checkbox } from "../atoms/checkbox";
import { useRouter } from "next/navigation";

export const LoginTemplate = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen">
      <section className="flex-1 flex flex-col justify-center items-center bg-[#AD0F0A]">
        <span>
          <Image src="./logo.svg" width={285} height={285} alt="fatec conecta logo"/>
          <h1 className="text-white uppercase text-center font-bold text-2xl">Conecta</h1>
        </span>
      </section>
      <section className="flex-1 flex items-center">
        <form action="" className="px-[20%] flex flex-col gap-4 w-full">
          <span>
            <h1 className="text-2xl">Login</h1>
            <h2 className="pt-2">Se você ainda não possui uma conta! Pode <a style={{ color: "#AD0F0A" }}>se cadastrar aqui!</a></h2>
          </span>
          <div className="grid items-center gap-3 w-full">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid items-center gap-3 w-full">
            <Label htmlFor="password">Senha</Label>
            <Input type="password" id="password" placeholder="Senha" />
          </div>
          <div className="w-full flex justify-between">
              <div className="flex items-center gap-3">
                <Checkbox className="btn-check" id="terms" />
                <Label htmlFor="terms">Lembre-se de mim</Label>
              </div>
              <a className="text-sm text-stone-950 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          <Button className="uppercase py-6 rounded-3xl">Entrar</Button>
          <Button onClick={() => router.push("/")} className="btn-goback uppercase py-6 rounded-3xl">Voltar para o Início</Button>
        </form>
      </section>
    </main>
  )
}