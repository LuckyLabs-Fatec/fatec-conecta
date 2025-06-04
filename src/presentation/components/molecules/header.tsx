'use client'
import Image from 'next/image'
import { Button } from '../atoms/button'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()

  return (
    <header className="bg-[#AD0F0A] px-16 py-4 flex flex-col md:flex-row justify-between items-center">
      <span className='flex items-center gap-1'>
        <Image
          src="./logo.svg"
          width={50}
          height={50}
          alt='logo fatec conecta'
        />
        <h1 className="text-white uppercase font-bold">Conecta</h1>
      </span>
      <nav className="border-t-2 border-white pt-2 md:border-t-0">
        <ul className="flex items-center gap-4 text-white font-semibold">
          <li data-testid="home-menu-item">
            <a href="">
              Início
            </a>
          </li>
          <li data-testid="projects">
            <a href="">
              Projetos
            </a>
          </li>
          <li className="border-l-2 border-white pl-6">
            <a href="">Registre-se</a>
          </li>
          <li>
            <Button onClick={() => router.push("/login")} className="btn-enter">Entrar</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}