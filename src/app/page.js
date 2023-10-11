'use client'

import { Scoreboard } from './components/ScoreBoard'
import Particles from './particles'


export default function Home() {

  const logo = 'https://github.com/solidsnk86/tablero-369/blob/master/public/logo-bap-removebg.png?raw=true'
  return (
    <main className="flex relative min-h-screen justify-center m-auto">
        <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={133} />
        <figure className='logo felx absolute left-[45%]'>
          <img src={logo} width={90} height={90} />
        </figure>
        <Scoreboard />
    </main>
  )
}
