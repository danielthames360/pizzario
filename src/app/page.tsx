'use client'

import { MapProvider } from '@/MapContext'
import { Bubbles, Footer, Hero } from '@/components'
import { Sucursales } from '@/sucursales/Sucursales'

export default function Home() {
  return (
    <MapProvider>
      <div className='overflow-x-hidden'>
        <Hero />
        <Sucursales />
        <Footer />
      </div>
      <Bubbles />
    </MapProvider>
  )
}
