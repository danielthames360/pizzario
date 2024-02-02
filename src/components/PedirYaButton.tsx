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
      <button className='btn text-shadow' onClick={scrollDown}>
        Pedir Ya!
      </button>
    )
  }

  return (
    <>
      <button
        className='btn text-shadow'
        onClick={() => clickButtonPedirYa(sortedBranches[0].sucursalId)}
      >
        Pedir Ya!
      </button>
    </>
  )
}
