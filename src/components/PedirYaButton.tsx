import { useMapContext } from '@/MapContext'
import Script from 'next/script'

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight + window.innerHeight / 4, // 100vh
    left: 0,
    behavior: 'smooth' // Esto hará que el desplazamiento sea suave (smooth scrolling)
  })
}

export const PedirYaButton = () => {
  const { sortedBranches } = useMapContext()

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
        data-glf-cuid='d1feca7c-ffe6-4a02-ac9d-1eca3fb78dab'
        data-glf-ruid={sortedBranches[0].sucursalId}
      >
        Pedir Ya!
      </button>
      <Script
        src='https://www.fbgcdn.com/embedder/js/ewm2.js'
        strategy='lazyOnload'
      />
    </>
  )
}
