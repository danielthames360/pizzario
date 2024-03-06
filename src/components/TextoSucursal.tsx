import { useMapContext } from '@/MapContext'

export const TextoSucursal = () => {
  const { sortedBranches } = useMapContext()

  if (!sortedBranches || sortedBranches.length === 0) return null

  return (
    <p className='text-md font-bold text-[#444] lg:text-lg text-center sm:mt-1 z-50'>
      Pedido desde {sortedBranches[0].name}
    </p>
  )
}
