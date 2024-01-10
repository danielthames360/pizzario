'use client'

import { useMapContext } from '@/MapContext'

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight + window.innerHeight / 4, // 100vh
    left: 0,
    behavior: 'smooth' // Esto hará que el desplazamiento sea suave (smooth scrolling)
  })
}

export const PedirYaButton = () => {
  const { sortedBranches } = useMapContext()

  return (
    <button
      className='btn text-shadow'
      onClick={
        !sortedBranches || sortedBranches.length === 0
          ? scrollDown
          : () => {
              alert('Ready for order')
            }
      }
    >
      !Pedir Ya!
    </button>
  )
}
