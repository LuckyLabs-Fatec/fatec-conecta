import Image from 'next/image'
import { Button } from '../atoms/button'

export const Header = () => (
  <header className="bg-[#AD0F0A] px-16 py-4 flex justify-between items-center">
    <span className='flex items-center gap-1'>
      <Image 
        src="./logo.svg"
        width={50}
        height={50}
        alt='logo fatec conecta'
      />
      <h1 className="text-white uppercase font-bold">Conecta</h1>
    </span>
    <nav>
      <ul className="flex items-center gap-4 text-white font-semibold">
        <li data-testid="home">
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
          <Button className="btn-enter">Entrar</Button>
        </li>
      </ul>
    </nav>
  </header>
)