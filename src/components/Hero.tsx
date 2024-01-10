import Image from 'next/image'
import { PedirYaButton, ScrollDownButton, TextoSucursal } from './'

export const Hero = () => {
  return (
    <div className='h-screen relative'>
      <div className='hero'></div>
      <div className='w-4/5 mx-auto flex flex-col justify-center gap-6 items-center lg:items-start'>
        <div className='h-[85vh] flex flex-col justify-evenly lg:justify-center lg:gap-10 items-center lg:w-1/3 lg:ml-16 text-center'>
          <Image
            src={'/images/favicon-logo.png'}
            width={170}
            height={170}
            alt='logo'
            className='lg:h-[250px] lg:w-[250px]'
          />

          <h1 className='text-3xl text-red-500 font-extrabold text-shadow  text-animation'>
            #ConVosEnTodas
          </h1>
          <Image
            src={'/images/pizza.png'}
            width={300}
            height={300}
            priority
            alt='logo'
            className='animate-spin-slow opacity-90 lg:absolute md:-right-32 xl:right-64 lg:h-[550px] lg:w-[550px] lg:-z-10'
          />
          <div className='flex flex-col text-center gap-1 justify-center items-center lg:mt-11'>
            {/* <button className='rounded-xl bg-red-500 text-white py-2 w-8/12 text-xl'> */}
            <PedirYaButton />
            <TextoSucursal />
          </div>
        </div>
      </div>
      <ScrollDownButton />
    </div>
  )
}
