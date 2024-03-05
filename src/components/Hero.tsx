import Image from 'next/image'
import { PedirYaButton, ScrollDownButton, TextoSucursal } from './'

export const Hero = () => {
  return (
    <div className='h-screen relative overflow-hidden
    sm:h-[35vh] lg:h-[30vh] xl:h-[45vh]'>

      <div className='hero h-full bg-left 
      sm:bg-[url(/images/background.png)] sm:bg-center'></div>

      <div className='w-4/5 mx-auto flex flex-col justify-center
      sm:h-full'>

        <div className='h-[90vh] pt-10 flex flex-col justify-between items-center sm:h-full sm:pt-0 sm:flex-row sm:justify-center
        md:justify-evenly
        lg:justify-around'>

          <div className='flex flex-col justify-evenly 
          sm:justify-stretch items-center
          xl:flex-row xl:w-[70%] xl:justify-evenly'>

            <Image
              src={'/images/logo.png'}
              width={90}
              height={90}
              alt='logo'
              className='sm:w-[75px] 
              md:w-[85px]
              lg:w-[100px]
              xl:w-[150px]'
            />

            <div className='flex flex-col'>
              <Image
              src={'/images/slogan.png'}
              width={350}
              height={350}
              alt='slogan'
              className='sm:w-[280px] 
              md:w-[300px] 
              lg:w-[350px] 
              xl:w-[480px]'
              />

              <PedirYaButton />
            </div>
            
          </div>
        
          <div className='relative'>
          <Image
            src={'/images/pizza.png'}
            width={280}
            height={280}
            priority
            alt='pizza'
            className='mx-2 
            sm:w-[190px] 
            md:w-[210px] 
            lg:w-[250px] 
            xl:w-[280px]'
            // className='animate-spin-slow opacity-90 lg:absolute md:-right-32 xl:right-64 lg:h-[550px] lg:w-[550px] lg:-z-10'
          />
          
          <Image
          src={'/images/deco.png'}
          alt='deco'
          width={50}
          height={50}
          className='absolute animationPizza bottom-7 -left-3 deco-animation
          sm:w-[40px] sm:h-[60px] sm:bottom-1 sm:-left-3
          md:w-[50px] md:h-[70px] md:-left-4
          lg:w-[60px] lg:h-[80px] lg:-left-5
          xl:w-[70px] xl:h-[90px] xl:-left-6'
          />

          <Image
          src={'/images/dino.gif'}
          width={230}
          height={90}
          alt='dino'
          className='absolute -rotate-[12deg] left-52 bottom-[9rem]
          sm:-rotate-[3deg] sm:bottom-[2.5rem] sm:left-[10rem]  
          md:w-[500px] h-[280px] md:bottom-[2rem] md:left-[11rem]
          lg:w-[350px] lg:h-[280px] lg:bottom-[3rem] lg:left-[13rem]
          xl:w-[380px] xl:h-[280px] xl:left-[16rem]'
          />
          </div>
          
        </div>

        <Image
        src={'/images/redPlantL.png'}
        width={85}
        height={85}
        alt='plant'
        className='absolute -bottom-16 left-2
        sm:w-[70px] sm:-bottom-11 sm:left-1 
        md:left-24
        lg:w-[85px] lg:-bottom-12 lg:left-10
        xl:w-[120px] xl:-bottom-16 xl:left-[5%]'
        />

        <Image
        src={'/images/redPlantL.png'}
        width={85}
        height={85}
        alt='plant'
        className='hidden
        xl:block xl:absolute xl:w-[70px] xl:-bottom-[4rem] xl:left-[30%]'
        />

        <Image
        src={'/images/redPlantR.png'}
        width={110}
        height={110}
        alt='plant'
        className='absolute -bottom-12 right-4
        sm:w-[60px] sm:-bottom-[3rem] sm:left-[19rem]
        md:left-[21rem]
        lg:w-[70px] lg:left-[30rem]
        xl:left-[60%]'
        />

        <Image
        src={'/images/redPlantBig.png'}
        width={75}
        height={75}
        alt='plant'
        className='hidden 
        sm:block sm:absolute sm:w-[85px] sm:-right-7 sm:-bottom-6 
        md:w-[90px] md:right-8 md:-bottom-7
        lg:w-[105px] lg:right-12 lg:-bottom-8
        xl:w-[150px] xl:-right-10 xl:-bottom-12'
        />

      </div>

      {/* <ScrollDownButton /> */}
    </div>
  )
}
