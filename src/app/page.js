'use client'

import { Scoreboard } from './components/ScoreBoard'
import Particles from './components/particles'
import Image from 'next/image'
import Footer  from '@/app/components/Footer'
import '@/../public/logo-bap-removebg.png'

export default function Home() {
  
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch(function(error) {
      console.log('Error al registrar el Service Worker:', error);
    });
}


  const logo = 'https://github.com/solidsnk86/tablero-369/blob/master/public/logo-bap-removebg.png?raw=true'
  return (
    <main className="flex relative min-h-screen justify-center m-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black">
              <figure className='logo'>
                <Image src={logo} width={160} height={160} alt='Logo' />
              </figure>
        <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={133} />
        <Scoreboard />
        <Footer />
    </main>
  )
}
