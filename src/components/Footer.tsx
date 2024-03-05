import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className='h-[40vh] sm:h-[45vh] w-full overflow-hidden bg-black'>
        <div className='relative h-[70%] w-full overflow-hidden footer'>
          <div className='overflow-hidden w-4/5 h-full mx-auto flex flex-col justify-around items-center '>
            <Image
              src={'/images/footer/rioLovers.png'}
              width={1040}
              height={780}
              className='
              mt-5
                w-[180px]
                sm:w-[230px]
            md:w-[210px]
            lg:w-[270px]
            xl:w-[300px]'
              alt='footer'
            />

            <div
              className='h-[30%] flex flex-col items-center gap-2
          sm:flex-row'
            >
              <p className='text-white leading-6 text-md uppercase font-semibold'>
                Siguenos en nuestras redes
              </p>

              <div className='flex gap-2'>
                <a
                  href='https://www.tiktok.com/@pizzariobo'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='icon'
                >
                  <Image
                    src={'/images/footer/tiktok.png'}
                    alt='facebook'
                    width={30}
                    height={30}
                    className='xl:w-[30px]'
                  />
                </a>

                <a
                  href='https://www.facebook.com/pizzariosantacruz'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='icon'
                >
                  <Image
                    src={'/images/footer/facebook.png'}
                    alt='facebook'
                    width={30}
                    height={30}
                    className='xl:w-[30px]'
                  />
                </a>
                <a
                  href='https://www.instagram.com/pizzario.bolivia/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='icon'
                >
                  <Image
                    src={'/images/footer/instagram.png'}
                    alt='facebook'
                    width={30}
                    height={30}
                    className='xl:w-[33px]'
                  />
                </a>
              </div>
            </div>
          </div>

          <Image
            src={'/images/footer/blackPlant.png'}
            alt='deco'
            width={100}
            height={100}
            className='absolute -bottom-9 right-0
        sm:w-[110px] sm:-bottom-10 sm:right-[5%]
        md:w-[130px] md:-bottom-11
        lg:w-[150px] lg:-bottom-12 lg:right-[10%]
        xl:w-[200px] xl:-bottom-20 xl:right-[12%]'
          />

          <Image
            src={'/images/footer/blackPlants.png'}
            alt='deco'
            width={100}
            height={100}
            className='absolute -bottom-8 left-0
        sm:w-[140px] sm:-bottom-12 sm:left-[5%]
        md:w-[160px] md:left-[6%]
        lg:w-[180px] lg:-bottom-14 lg:left-[15%]
        xl:w-[230px] xl:-bottom-20 xl:left-[12%]'
          />
        </div>

        <div className='h-[30%] py-5 bg-black text-center flex justify-center items-center sm:pt-0'>
          <p className='text-white leading-6 text-md'>
            ©{new Date().getFullYear()} - Pizza Rio
            <br />
            <Link href={'/privacy'} className='underline hover:text-gray-300'>
              Política de privacidad
            </Link>
            <br />
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </>
  )
}
