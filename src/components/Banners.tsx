'use client'

import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

export const Banners = () => {
  const banners = [
    '/images/banners/banner2.jpeg',
    '/images/banners/banner1.jpeg'
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) {
    return (
      <div className='w-full flex flex-col'>
        {banners.map((banner, index) => (
          <div key={index} className='relative w-full'>
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              width={1200}
              height={400}
              className='w-full h-auto object-cover'
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      interval={4000}
    >
      {banners.map((banner, index) => (
        <div key={index} className='relative'>
          <Image
            src={banner}
            alt={`Banner ${index + 1}`}
            width={1200}
            height={400}
            className='w-full h-auto object-cover'
          />
        </div>
      ))}
    </Carousel>
  )
}
