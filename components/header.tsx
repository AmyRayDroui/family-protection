import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import NavBar from './navbar'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  return (
    <>
      <header className="z-10 pt-4 px-4">
        <div className="grid grid-cols-auto-1fr mx-auto max-w-[1420px] max-h-[73px] p-1 bg-light rounded-lg">
          <Logo />
          <NavBar data={data}></NavBar>
        </div>
      </header>
    </>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <img
        className="object-contain max-w-[142px]"
        src="family_protection.png"
        alt="Logo"
      />
    </Link>
  )
}
