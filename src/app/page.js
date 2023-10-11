'use client'

import { Scoreboard } from './components/ScoreBoard'
import Particles from './particles'


export default function Home() {

  const logo = ''
  return (
    <main className="flex min-h-screen justify-center m-auto">
        <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={133} />
        <figure>
          <img src='' width={60} height={60} />
        </figure>
        <Scoreboard />
    </main>
  )
}
