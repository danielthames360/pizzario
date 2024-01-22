'use client'

import { sucursales } from '@/sucursales'
import { calculateDistance, mapStyles } from '@/utils'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api'
import { memo, useEffect, useMemo, useState } from 'react'
import { SucursalesCard } from './SucursalesCard'
import { useMapContext } from '@/MapContext'

function Map() {
  const {
    activeBranch,
    setActiveBranch,
    sortedBranches,
    setSortedBranches,
    branches: originBranches
  } = useMapContext()

  const defaultCenter = {
    lat: originBranches[0].latitude,
    lng: originBranches[0].longitude
  }

  const branches = useMemo(
    () => sortedBranches ?? originBranches,
    [originBranches, sortedBranches]
  )

  const [currentLocation, setCurrentLocation] = useState<{
    lat: number
    lng: number
  } | null>(null)
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
  })

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        function (error) {
          console.error('Error Code = ' + error.code + ' - ' + error.message)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  useEffect(() => {
    if (currentLocation) {
      const sucursalesConDistancia = sucursales.map((sucursal) => ({
        ...sucursal,
        distance: calculateDistance(
          currentLocation.lat,
          currentLocation.lng,
          sucursal.latitude,
          sucursal.longitude
        )
      }))

      // Ordena las sucursales por distancia
      sucursalesConDistancia.sort((a, b) => a.distance - b.distance)

      // Filtrar por ciudad
      const sucursalesFiltradas = [
        ...sucursalesConDistancia.filter(
          (s) => s.city === sucursalesConDistancia[0].city
        )
      ]

      // Actualiza tu estado con las sucursales ordenadas
      setSortedBranches(sucursalesFiltradas)
    }
  }, [currentLocation, setSortedBranches])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex-grow h-[70vh] sm:h-full pb-4 sm:pb-0'>
      <GoogleMap
        mapContainerClassName='w-[85vw] mx-auto h-full sm:w-full'
        center={currentLocation || defaultCenter}
        zoom={12}
        options={{
          streetViewControl: false,
          styles: mapStyles
        }}
      >
        {currentLocation && (
          <Marker
            position={currentLocation}
            icon={{ url: '/images/icons/me-pin.png' }}
          />
        )}
        {branches.map((sucursal) => (
          <Marker
            key={sucursal.name}
            position={{ lat: sucursal.latitude, lng: sucursal.longitude }}
            icon={{
              url: '/images/icons/default.png'
            }}
            onClick={() => setActiveBranch(sucursal)}
          />
        ))}

        {activeBranch && (
          <InfoWindow
            position={{
              lat: activeBranch.latitude,
              lng: activeBranch.longitude
            }}
            onCloseClick={() => setActiveBranch(null)}
          >
            <SucursalesCard branch={activeBranch} fromMap={true} />
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  )
}

export default memo(Map)
