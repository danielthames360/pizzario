import { useMapContext } from '@/MapContext'
import { sucursales } from '@/sucursales'
import { ChangeEvent, useState } from 'react'

export const RadioCity = () => {
  const { setBranches } = useMapContext()
  const [selectedCity, setSelectedCity] = useState<string>('SCZ')

  const onSelectedCityChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setBranches(sucursales.filter((s) => s.city === e.target.value))
    setSelectedCity(e.target.value)
  }

  return (
    <div className='flex flex-row mb-4 flex-wrap w-full gap-3'>
      <label className='inline-flex items-center cursor-pointer'>
        <input
          type='radio'
          className='form-radio text-red-600 radio-custom'
          name='city'
          value='SCZ'
          checked={selectedCity === 'SCZ'}
          onChange={onSelectedCityChanged}
        />
        <span className='ml-2 text-gray-700'>Santa Cruz</span>
      </label>
      <label className='inline-flex items-center cursor-pointer'>
        <input
          type='radio'
          className='form-radio text-red-600 radio-custom '
          name='city'
          value='LP'
          checked={selectedCity === 'LP'}
          onChange={onSelectedCityChanged}
        />
        <span className='ml-2 text-gray-700'>La Paz</span>
      </label>
    </div>
  )
}
