import { useMapContext } from '@/MapContext'

export const TextoSucursal = () => {
  const { sortedBranches } = useMapContext()

  if (!sortedBranches || sortedBranches.length === 0) return null

  return (
    <p className='w-[80%] m-auto text-md font-bold text-[#444] text-center z-50 mt-1 
     sm:mt-2
     md:text-lg md:leading-5
     xl:w-[90%] xl:text-xl'>
      Desde {sortedBranches[0].name}
    </p>
  )
}
