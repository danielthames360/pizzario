'use client'

import { FullScreenModal } from '@/components/FullScreenModal'
import { Map, SucursalesList } from '@/sucursales/components'
import { useState } from 'react'
export const Sucursales = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <>
      <div className=' w-[90vw] sm:w-full mx-auto my-24'>
        <p className='my-9 text-center font-semibold text-xl sm:text-3xl w-9/12 m-auto'>
          Pedí tu pizza favorita en la sucursal más cercana
        </p>
        <div className='flex flex-col sm:flex-row min-h-screen h-full bg-[#efefef] sm:h-screen rounded-2xl sm:my-0 w-[90vw] m-auto'>
          <SucursalesList />
          <div className='flex-grow h-0 sm:h-full pb-4 sm:pb-0'>
            <Map />
          </div>
          <button
            onClick={openModal}
            className='bg-red-500 hover:bg-red-700 text-white text-lg font-bold py-4 px-4 rounded cursor-pointer sm:hidden'
          >
            Ver Mapa
          </button>
        </div>
      </div>
      <FullScreenModal isOpen={isModalOpen} onClose={closeModal}>
        <Map />
      </FullScreenModal>
    </>
  )
}
