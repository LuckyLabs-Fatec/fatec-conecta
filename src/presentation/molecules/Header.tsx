import Image from 'next/image'

export const Header = () => (
  <header className="bg-red-800 px-16 py-4 flex justify-between items-center">
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
      <ul className="flex gap-2 text-white font-semibold">
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
      </ul>
    </nav>
  </header>
)