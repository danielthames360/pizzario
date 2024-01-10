import Image from 'next/image'
import { Sucursal } from '../../sucursales'
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaCalendarAlt,
  FaWhatsapp
} from 'react-icons/fa'
import { PedirYaCard } from './PedirYaCard'

export const SucursalesCard = (branch: Sucursal) => {
  const whatsappUrl = `https://wa.me/${branch.phone}`

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='font-bold text-xl'>{branch.name}</h3>
        <Image
          className='w-10 h-10'
          src='/images/favicon-logo.png'
          alt='Pizza Rio Logo'
          width={50}
          height={50}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-gray-700 text-base'>
          <FaMapMarkerAlt className='inline text-red-400 mr-2' />
          {branch.address}
        </p>
        <p className='text-gray-700 text-base'>
          <FaClock className='inline text-red-400 mr-2' />
          {branch.hours}
        </p>
        <p className='text-gray-700 text-base'>
          <FaCalendarAlt className='inline text-red-400 mr-2' />
          {branch.days}
        </p>
        <a href={whatsappUrl} target='_blank' rel='noopener noreferrer'>
          <FaWhatsapp className='inline text-red-400 mr-2 ' />
          <span className='text-gray-700 text-base'>{branch.phone}</span>
        </a>

        {/* <div className='flex items-center'>
          <span className='text-sm'>Contactarse</span>
          <a
            href={whatsappUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-500 hover:text-green-600'
          >
            <Image
              src='/images/icons/icons8-whatsapp-50.png'
              alt='Whatsapp Icon'
              width={50}
              height={50}
            />
          </a>
        </div> */}
      </div>
      <div className='flex justify-between items-center mt-4'>
        <PedirYaCard />
        {branch.distance && (
          <span className='inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-red-600'>
            {branch.distance.toFixed(2)} Km
          </span>
        )}
      </div>
    </div>
  )
}
