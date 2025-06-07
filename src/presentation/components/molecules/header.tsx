'use client'
import Image from 'next/image'
import { Button } from '../atoms/button'

import Link from 'next/link';

import { useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()

  return (
    <header className="bg-[#AD0F0A] px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      <Link href="/">
        <span className='flex items-center gap-1'>
          <Image
            src="./logo.svg"
            width={50}
            height={50}
            alt='logo fatec conecta'
          />
          <h1 className="text-white uppercase font-bold">Conecta</h1>
        </span>
      </Link>
      <nav className="border-t-2 border-white pt-2 md:border-t-0">
        <ul className="flex items-center gap-4 text-white font-semibold">
          <li className="pl-6">
            <Link href="/register-user">Registre-se</Link>
          </li>
          <li>
            <Button onClick={() => router.push("/login")} className="btn-enter">Entrar</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}