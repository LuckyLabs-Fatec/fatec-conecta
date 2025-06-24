'use client';
import VLibras from "vlibras-nextjs";
import Link from "next/link";

import { Label } from "@/presentation/components/atoms/label";
import { Input } from "@/presentation/components//atoms/input";
import { Button } from "@/presentation/components//atoms/button";
import { Checkbox } from "@/presentation/components//atoms/checkbox";
import { LoginTemplate } from "@/presentation/components/templates/login-template";

import { LogIn } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "@/presentation/store";
import { mockAuthenticateUserModel } from "@/domain/test";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter()
  const [loginParams, setLoginParams] = useState({
    email: "",
    password: ""
  });

  const { setCurrentUser } = useAuthStore()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (loginParams.email && loginParams.password) {
      setCurrentUser(mockAuthenticateUserModel());
      router.push("/")

    } else {
      toast.error("Por favor preencha os campos antes de autenticar");
    }
  }

  return (
    <>
      <LoginTemplate>
        <form onSubmit={handleSubmit} className="px-8 flex flex-col gap-4 w-full md:px-[20%]">
          <span>
            <h1 className="text-center md:text-left text-2xl">Login</h1>
            <h2 className="pt-2">Se você ainda não possui uma conta! Pode <Link href="/register-user" style={{ color: "#AD0F0A" }}>se cadastrar aqui!</Link></h2>
          </span>
          <div className="grid items-center gap-3 w-full mt-4 md:mt-6">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => {
                setLoginParams({
                  ...loginParams,
                  email: e.target.value
                })
              }}
              value={loginParams.email}
            />
          </div>
          <div className="grid items-center gap-3 w-full">
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => {
                setLoginParams({
                  ...loginParams,
                  password: e.target.value
                })
              }}
              value={loginParams.password}
            />
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
      </LoginTemplate>
      <VLibras forceOnload />
    </>
  );
}
