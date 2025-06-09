'use client';
import { ForgotPasswordTemplate } from "@/presentation/components/templates/forgot-password-template";
import VLibras from "vlibras-nextjs";

export default function LoginPage() {
  return (
    <>
      <ForgotPasswordTemplate />
      <VLibras forceOnload />
    </>
  );
}
