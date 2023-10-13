'use client'

import { Scoreboard } from './components/ScoreBoard'
import Particles from './components/particles'
import DateBoard from '@/app/components/Date'
import Image from 'next/image'
import Footer  from '@/app/components/Footer'
import '@/../public/logo-bap-removebg.png'

export default function Home(children) {

  const logo = 'https://github.com/solidsnk86/tablero-369/blob/master/public/logo-bap-removebg.png?raw=true'
  return (
    <main className="flex relative min-h-screen justify-center m-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <DateBoard />
              <figure className='logo'>
                <Image src={logo} width={160} height={160} alt='Logo' />
              </figure>
        <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={133} />
        <Scoreboard />
        <Footer />
    </main>
  )
}
