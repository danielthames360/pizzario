'use client'
import { Map, SucursalesList } from '@/sucursales/components'
export const Sucursales = () => {
  return (
    <>
      <div className=' w-[90vw] sm:w-full mx-auto my-24 sm:my-24'>
        <p className='my-9 text-center font-semibold text-xl sm:text-3xl w-9/12 m-auto'>
          Pedí tu pizza favorita en la sucursal más cercana
        </p>
        <div className='flex flex-col sm:flex-row min-h-screen h-full bg-[#efefef] sm:h-screen rounded-2xl sm:my-0 w-[90vw] m-auto'>
          <SucursalesList />
          <Map />
        </div>
      </div>
    </>
  )
}
