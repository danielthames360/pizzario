'use client'

import { useMapContext } from '@/MapContext'
import { clickButtonPedirYa } from '@/utils/clickButtonPedirYa'
import { useEffect } from 'react'

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight + window.innerHeight / 4, // 100vh
    left: 0,
    behavior: 'smooth' // Esto hará que el desplazamiento sea suave (smooth scrolling)
  })
}

export const PedirYaButton = () => {
  const { sortedBranches } = useMapContext()

  useEffect(() => {
    // Esta función no hace nada por sí misma, pero al tener `sortedBranches`
    // como una dependencia, el componente se volverá a renderizar cuando
    // `sortedBranches` cambie.
  }, [sortedBranches])

  if (sortedBranches == null || sortedBranches.length === 0) {
    return (
      <button className='btn mx-auto rounded-3xl text-white text-[1.4rem] text-shadow font-bold px-5 py-3
      sm:text-[1rem]
      lg:text-[1.3rem]
      xl:text-[1.6rem]' 
      onClick={scrollDown}>
        ¡Pide ahora!
      </button>
    )
  }

  return (
    <>
      <button
        className='btn mx-auto mb-2 rounded-3xl text-white text-[1.4rem] text-shadow font-bold px-5 py-3
        sm:text-[1rem]
        lg:text-[1.3rem] lg:px-4 lg:py-2'
        onClick={() => clickButtonPedirYa(sortedBranches[0].sucursalId)}
      >
        ¡Pide ahora!
      </button>
    </>
  )
}
