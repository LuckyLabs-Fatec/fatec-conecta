import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/presentation/providers/providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatec Conecta",
  description: "Programe o futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${roboto.variable} flex flex-col min-h-screen`}>
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
