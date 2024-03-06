import Image from 'next/image'
import { PedirYaButton, ScrollDownButton, TextoSucursal } from './'

export const Hero = () => {
  return (
    <div
      className='h-screen max-h-[-webkit-fill-available] sm:max-h-none relative overflow-hidden
      sm:h-[20rem] lg:h-[25rem] xl:h-[25rem] 2xl:h-[27rem]'
    >
      <div
        className='hero h-full bg-left 
      sm:bg-[url(/images/background.png)] sm:bg-center'
      ></div>

      <div className='w-4/5 lg:w-4/6 h-full mx-auto flex flex-col justify-center items-center sm:justify-between'>
        {/* Contenedor del medio */}
        <div
          className='h-[80vh] flex flex-col justify-between items-center gap-4
        sm:h-full sm:flex-row sm:justify-center sm:gap-12
        md:gap-20
        xl:gap-52'
        >
          {/* LOGO */}
          <div
            className='flex flex-col
          sm:justify-stretch items-center 
          '
          >
            <Image
              src={'/images/logo.png'}
              width={279}
              height={279}
              priority
              alt='logo'
              className='w-[100px] sm:w-[75px] 
              md:w-[90px]
              lg:w-[100px]
              xl:w-[120px]'
            />

            

            <div className='flex flex-col '>
            <Image
                src={'/images/slogan.png'}
                priority
                width={1228}
                height={471}
                alt='slogan'
                className='w-[350px] sm:w-[280px]
                md:w-[300px] 
                lg:w-[340px] 
                xl:w-[370px]
                2xl:w-[450px]'
              />

              <PedirYaButton />
              <TextoSucursal />
            </div>
          </div>

          {/* Pizza */}
          <div className='relative sm:flex-1 md:flex-initial'>
            <Image
              src={'/images/pizza.png'}
              width={822}
              height={774}
              priority
              alt='pizza'
              className='w-[270px]
              sm:w-[210px] 
              md:w-[210px] 
              lg:w-[250px] 
              xl:w-[290px]
              2xl:w-[340px]'
              // className='animate-spin-slow opacity-90 lg:absolute md:-right-32 xl:right-64 lg:h-[550px] lg:w-[550px] lg:-z-10'
            />

            <Image
              src={'/images/deco.png'}
              alt='deco'
              width={173}
              height={271}
              priority
              className='absolute animationPizza bottom-3 -left-4 deco-animation w-[50px]
              sm:w-[40px] sm:h-[60px] sm:bottom-1 sm:-left-3
              md:w-[50px] md:h-[70px] md:-left-5
              lg:w-[60px] lg:h-[80px] lg:-left-7
              xl:w-[80px] xl:h-[110px] xl:-left-8 2xl:-left-6'
            />
          </div>
        </div>

        <Image
          src={'/images/dino.gif'}
          width={1451}
          height={1265}
          priority
          alt='dino'
          className='absolute w-[280px] -rotate-[12deg] top-[45%] -right-40
          sm:-right-32 sm:top-20 sm:-rotate-[16deg] sm:-translate-y-1/2 sm:w-[250px]
          md:-rotate-[6deg] md:top-24 md:-right-28
          lg:w-[340px] lg:top-36
          xl:w-[380px] xl:-right-32
          2xl:w-[400px] 2xl:top-44 2xl:-right-28'
        />

        <Image
          src={'/images/redPlantL.png'}
          width={285}
          height={490}
          alt='plant'
          priority
          className='absolute -bottom-16 left-0 w-[85px]
          sm:w-[70px] sm:-bottom-11 sm:left-1 
          md:left-20
          lg:w-[85px] lg:-bottom-12 lg:left-10
          xl:w-[110px] xl:-bottom-16 xl:left-[5%]'
        />

        <Image
          src={'/images/redPlantR.png'}
          width={360}
          height={530}
          alt='plant'
          priority
          className='absolute -bottom-12 right-0 w-[110px]
        sm:w-[60px] sm:-bottom-[3rem] sm:left-[19rem]
        md:left-1/2 md:-translate-x-1/2
        lg:w-[70px]'
        />

        <Image
          src={'/images/redPlantBig.png'}
          width={264}
          height={390}
          priority
          alt='plant'
          className='invisible h-0 w-[75px]
          sm:visible sm:h-auto sm:absolute sm:w-[85px] sm:right-2 sm:-bottom-6 
          md:w-[90px] md:right-8 md:-bottom-7
          lg:w-[105px] lg:right-12 lg:-bottom-8
          xl:w-[130px] xl:right-20 xl:-bottom-12'
        />
      </div>

      {/* <ScrollDownButton /> */}
    </div>
  )
}
