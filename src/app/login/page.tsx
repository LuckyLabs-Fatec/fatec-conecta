'use client';
import { LoginTemplate } from "@/presentation/components/templates/login-template";
import VLibras from "vlibras-nextjs";

export default function LoginPage() {
  return (
    <>
      <LoginTemplate />
      <VLibras forceOnload />
    </>
  );
}
