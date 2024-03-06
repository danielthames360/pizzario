import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className='h-[28rem] w-full overflow-hidden bg-black'>
        <div className='relative h-[70%] w-full overflow-hidden footer'>
          <div className='overflow-hidden w-4/5 h-full mx-auto flex flex-col justify-around items-center '>
            <Image
              src={'/images/footer/rioLovers.png'}
              width={980}
              height={688}
              className=' mt-5 w-[220px]
              sm:w-[260px]
              md:w-[280px]
              lg:w-[300px]
              xl:w-[340px]'
              alt='footer'
            />

            <div
              className='pb-5 flex flex-col items-center gap-2
          sm:flex-row'
            >
              <p className='text-white leading-6 text-base uppercase font-semibold lg:text-xl z-10'>
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
                    width={115}
                    height={125}
                    className='w-[30px]'
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
                    width={115}
                    height={125}
                    className='w-[30px]'
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
                    width={115}
                    height={125}
                    className='w-[30px]'
                  />
                </a>
              </div>
            </div>
          </div>

          <Image
            src={'/images/footer/blackPlant.png'}
            alt='deco'
            width={502}
            height={633}
            className='absolute -bottom-9 right-0 w-[100px]
        sm:w-[110px] sm:-bottom-10 sm:right-[5%]
        md:w-[130px] md:-bottom-11
        lg:w-[150px] lg:-bottom-12 lg:right-[10%]
        xl:w-[200px] xl:-bottom-20 xl:right-[12%]'
          />

          <Image
            src={'/images/footer/blackPlants.png'}
            alt='deco'
            width={599}
            height={610}
            className='absolute -bottom-8 left-0 w-[100px]
        sm:w-[140px] sm:-bottom-12
        md:w-[160px] md:left-16
        lg:w-[180px] lg:-bottom-14 lg:left-24
        xl:w-[230px] xl:-bottom-20 xl:left-52'
          />
        </div>

        <div className='h-[30%] py-5 bg-black text-center flex justify-center items-center'>
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
