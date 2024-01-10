'use client'

import { FaAnglesDown } from 'react-icons/fa6'
import { useMapContext } from '@/MapContext'

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight, // 100vh
    left: 0,
    behavior: 'smooth' // Esto hará que el desplazamiento sea suave (smooth scrolling)
  })
}

export const ScrollDownButton = () => {
  const { sortedBranches } = useMapContext()

  return (
    <div className='h-[15vh] flex flex-col  items-center text-center justify-end animate-bounce'>
      <p
        className='text-xl text-red-500 font-bold cursor-pointer text-shadow-sm'
        onClick={scrollDown}
      >
        {!sortedBranches || sortedBranches.length === 0
          ? 'Ver sucursales'
          : 'Ver más sucursales'}
      </p>
      <FaAnglesDown
        className='text-3xl text-red-500  cursor-pointer'
        onClick={scrollDown}
      />
    </div>
  )
}
