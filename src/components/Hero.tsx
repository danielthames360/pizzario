import Image from 'next/image'
import { PedirYaButton, ScrollDownButton, TextoSucursal } from './'

export const Hero = () => {
  return (
    <div
      className='h-screen max-h-[-webkit-fill-available] sm:max-h-none relative overflow-hidden
    sm:h-[40vh] lg:h-[45vh] xl:h-[54vh]'
    >
      <div
        className='hero h-full bg-left 
      sm:bg-[url(/images/background.png)] sm:bg-center'
      ></div>

      <div className='w-4/5 lg:w-4/6 h-full mx-auto flex flex-col justify-center items-center'>
        {/* Contenedor del medio */}
        <div
          className='h-[80vh] flex flex-col justify-between items-center 
        sm:h-full sm:flex-row sm:justify-center sm:gap-12
        md:justify-evenly md:gap-0
        lg:justify-around xl:gap-52'
        >
          {/* LOGO */}
          <div
            className='flex flex-col justify-evenly 
          sm:justify-stretch items-center gap-2 sm:gap-0
          '
          >
            <Image
              src={'/images/logo.png'}
              width={90}
              height={90}
              priority
              alt='logo'
              className='sm:w-[75px] 
              md:w-[85px]
              lg:w-[100px]
              xl:w-[150px]'
            />

            <div className='flex flex-col gap-2 sm:gap-0'>
              <Image
                src={'/images/slogan.png'}
                priority
                width={350}
                height={350}
                alt='slogan'
                className='sm:w-[280px] 
              md:w-[300px] 
              lg:w-[350px] 
              xl:w-[480px]'
              />

              <PedirYaButton />
              <TextoSucursal />
            </div>
          </div>

          {/* Pizza */}
          <div className='relative sm:flex-1 md:flex-initial'>
            <Image
              src={'/images/pizza.png'}
              width={300}
              height={300}
              priority
              alt='pizza'
              className='mx-2
            sm:w-[210px] 
            md:w-[210px] 
            lg:w-[250px] 
            xl:w-[350px]'
              // className='animate-spin-slow opacity-90 lg:absolute md:-right-32 xl:right-64 lg:h-[550px] lg:w-[550px] lg:-z-10'
            />

            <Image
              src={'/images/deco.png'}
              alt='deco'
              width={50}
              height={50}
              priority
              className='absolute animationPizza bottom-10 -left-3 deco-animation
          sm:w-[40px] sm:h-[60px] sm:bottom-1 sm:-left-3
          md:w-[50px] md:h-[70px] md:-left-4
          lg:w-[60px] lg:h-[80px] lg:-left-5
          xl:w-[80px] xl:h-[110px] xl:-left-6'
            />
          </div>
        </div>

        <Image
          src={'/images/dino.gif'}
          width={230}
          height={90}
          priority
          alt='dino'
          className='absolute z-[-1] -rotate-[25deg] top-[45%] -right-32 h-[230px]
          sm:-right-32 sm:top-20 sm:-rotate-[16deg] sm:-translate-y-1/2
          md:w-[280px] md:-rotate-[6deg] md:top-24
          lg:w-[350px] lg:h-[280px] lg:top-32
          xl:w-[380px] xl:h-[280px]'
        />

        <Image
          src={'/images/redPlantL.png'}
          width={85}
          height={85}
          alt='plant'
          priority
          className='absolute -bottom-16 left-2
        sm:w-[70px] sm:-bottom-11 sm:left-1 
        md:left-24
        lg:w-[85px] lg:-bottom-12 lg:left-10
        xl:w-[110px] xl:-bottom-16 xl:left-[5%]'
        />

        <Image
          src={'/images/redPlantR.png'}
          width={110}
          height={110}
          alt='plant'
          priority
          className='absolute -bottom-12 right-0
        sm:w-[60px] sm:-bottom-[3rem] sm:left-[19rem]
        md:left-1/2 md:-translate-x-1/2
        lg:w-[70px]'
        />

        <Image
          src={'/images/redPlantBig.png'}
          width={75}
          height={75}
          priority
          alt='plant'
          className='invisible h-0 
        sm:visible sm:h-auto sm:absolute sm:w-[85px] sm:-right-7 sm:-bottom-6 
        md:w-[90px] md:right-8 md:-bottom-7
        lg:w-[105px] lg:right-12 lg:-bottom-8
        xl:w-[130px] xl:right-20 xl:-bottom-12'
        />
      </div>

      {/* <ScrollDownButton /> */}
    </div>
  )
}
