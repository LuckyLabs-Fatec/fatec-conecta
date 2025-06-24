'use client'

import { AsideBranding } from "../organisms/aside-branding";
import { ReactNode } from "react";

interface LoginTemplateProps {
  children: ReactNode;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = ({
  children
}) => {
  return (
    <main className="flex flex-col min-h-screen md:flex-row">
      <AsideBranding />
      <section className="pb-10 flex-1 flex mt-20 md:mt-0 md:items-center md:pb-0">
        {children}
      </section>
    </main>
  )
}