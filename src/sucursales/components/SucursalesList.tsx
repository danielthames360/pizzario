import { SucursalesCard } from './SucursalesCard'
import { useMapContext } from '@/MapContext'
import { RadioCity } from './RadioCity'

export const SucursalesList = () => {
  const {
    setActiveBranch,
    sortedBranches,
    branches: originBranches
  } = useMapContext()

  const branches = sortedBranches ?? originBranches

  return (
    <div className='p-4 max-h-[55vh] w-[90vw] sm:w-[20rem] lg:w-[28rem] mx-auto sm:p-6 sm:max-h-screen overflow-auto transition-all'>
      {(!sortedBranches || sortedBranches.length === 0) && <RadioCity />}

      {branches &&
        branches.map((sucursal, index) => (
          <div
            key={index}
            onClick={() => setActiveBranch(sucursal)}
            className='max-w-sm cursor-pointer rounded overflow-hidden shadow-lg bg-white mb-2 sm:mb-4 p-4 flex flex-col lg:hover:scale-105 transition-all hover:transition'
          >
            <SucursalesCard {...sucursal} />
          </div>
        ))}
    </div>
  )
}
