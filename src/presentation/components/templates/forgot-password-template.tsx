'use client'
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import { AsideBranding } from "../organisms/aside-branding";
import { useState } from "react";
import { toast } from "react-toastify";

export const ForgotPasswordTemplate = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info(`Enviamos um email de recuperação de senha para: ${email}`);
  }
  return (
    <main className="flex flex-col min-h-screen md:flex-row">
      <AsideBranding />
      <section className="pb-10 flex-1 flex mt-20 md:mt-0 md:items-center md:pb-0">
        <form onSubmit={handleSubmit} className="px-8 flex flex-col gap-4 w-full md:px-[20%]">
          <span>
            <h1 className="text-center md:text-left text-2xl">Esqueceu a Senha!</h1>
            <h2 className="pt-2">Caso tenha esquecido sua senha digite seu email abaixo para recupera-lá!</h2>
          </span>
          <div className="grid items-center gap-3 w-full mt-4 md:mt-6">
            <Label htmlFor="email">Email</Label>
            <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" id="email" placeholder="Email" />
          </div>
          <hr className="w-full border-t-2 border-stone-300" />
          <Button type="submit" className="uppercase py-6 mt-4">Enviar email</Button>
        </form>
      </section>
    </main>
  )
}