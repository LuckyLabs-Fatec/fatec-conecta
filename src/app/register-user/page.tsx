'use client';
import { RegisterUserTemplate } from "@/presentation/components/templates/register-user-template";
import VLibras from "vlibras-nextjs";

export default function LoginPage() {
  return (
    <>
      <RegisterUserTemplate />
      <VLibras forceOnload />
    </>
  );
}
