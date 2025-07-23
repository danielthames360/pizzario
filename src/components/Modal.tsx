'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      onClick={handleOverlayClick}
    >
      <div className='relative'>
        <Image
          src='/images/banners/souvenir.jpeg'
          alt='Welcome'
          width={800}
          height={600}
          className='max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl'
          onClick={closeModal}
        />
        <button
          onClick={closeModal}
          className='absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full w-8 h-7 flex items-center justify-center'
        >
          X
        </button>
      </div>
    </div>
  )
}
