import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <>
      <div className='h-full footer pt-8 pb-12 flex flex-col justify-center items-center gap-5'>
        <Image
          src={'/images/footer/logoFooter.png'}
          width={190}
          height={190}
          className='w-auto h-auto  sm:w-[350px] sm:h-[240px]'
          alt='footer'
        />
        <p className='text-white text-lg sm:text-2xl'>
          Síguenos en nuestras redes
        </p>
        <div className='flex gap-4'>
          <a
            href='https://www.facebook.com/pizzariosantacruz'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook className='text-white text-3xl sm:text-4xl' />
          </a>
          <a
            href='https://www.instagram.com/pizzario.bolivia/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='text-white text-3xl sm:text-4xl' />
          </a>
          <a
            href='https://www.tiktok.com/@pizzariobo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTiktok className='text-white text-3xl sm:text-4xl' />
          </a>
        </div>
      </div>
      <div className='bg-black text-center p-4'>
        <p className='w-10/12 text-white mx-auto leading-5 sm:text-lg'>
          ©{new Date().getFullYear()} - Pizza Rio
          <br />
          Todos los derechos reservados
        </p>
      </div>
    </>
  )
}
