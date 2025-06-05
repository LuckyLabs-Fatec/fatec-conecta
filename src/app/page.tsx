'use client'
import { Footer } from "@/presentation/components/atoms/footer";
import { Header } from "@/presentation/components/molecules/header";
import { HomeTemplate } from "@/presentation/components/templates/home-template";
import VLibras from "vlibras-nextjs";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-grow">
        <HomeTemplate />
      </div>
      <Footer />
      <VLibras forceOnload />
    </>
  );
}
