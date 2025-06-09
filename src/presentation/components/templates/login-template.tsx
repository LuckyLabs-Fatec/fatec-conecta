'use client'
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import { Checkbox } from "../atoms/checkbox";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { AsideBranding } from "../organisms/aside-branding";

export const LoginTemplate = () => {
  return (
    <main className="flex flex-col min-h-screen md:flex-row">
      <AsideBranding />
      <section className="pb-10 flex-1 flex mt-20 md:mt-0 md:items-center md:pb-0">
        <form action="" className="px-8 flex flex-col gap-4 w-full md:px-[20%]">
          <span>
            <h1 className="text-center md:text-left text-2xl">Login</h1>
            <h2 className="pt-2">Se você ainda não possui uma conta! Pode <Link href="/register-user" style={{ color: "#AD0F0A" }}>se cadastrar aqui!</Link></h2>
          </span>
          <div className="grid items-center gap-3 w-full mt-4 md:mt-6">
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
            <Link href="/forgot-password" className="text-sm text-stone-950 hover:underline">
                Esqueceu a senha?
            </Link>
          </div>
          <hr className="w-full border-t-2 border-stone-300" />
          <Button type="submit" className="uppercase py-6 mt-4">Entrar<LogIn /></Button>
        </form>
      </section>
    </main>
  )
}