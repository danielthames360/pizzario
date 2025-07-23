'use client'

import { MapProvider } from '@/MapContext'
import { Bubbles, Footer, Hero, Modal, Banners } from '@/components'
import { Sucursales } from '@/sucursales/Sucursales'
import Script from 'next/script'

export default function Home() {
  return (
    <MapProvider>
      <div className='overflow-x-hidden'>
        <Hero />
        <Banners />
        <Sucursales />
        <Modal />
        <Footer />
      </div>
      <Bubbles />
      <Script
        src='https://www.fbgcdn.com/embedder/js/ewm2.js'
        strategy='lazyOnload'
      />
    </MapProvider>
  )
}
