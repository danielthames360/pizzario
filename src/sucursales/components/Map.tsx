'use client'

import { calculateDistance, mapStyles } from '@/utils'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { SucursalesCard } from './SucursalesCard'
import { useMapContext } from '@/MapContext'

export const Map = () => {
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

  const ordenarSucursalesPorDistancia = useCallback(() => {
    if (currentLocation) {
      const sucursalesConDistancia = originBranches.map((sucursal) => ({
        ...sucursal,
        distance: calculateDistance(
          currentLocation.lat,
          currentLocation.lng,
          sucursal.latitude,
          sucursal.longitude
        )
      }))

      sucursalesConDistancia.sort((a, b) => a.distance - b.distance)
      const sucursalesFiltradas = sucursalesConDistancia.filter(
        (s) => s.city === sucursalesConDistancia[0].city
      )
      setSortedBranches(sucursalesFiltradas)
    }
  }, [currentLocation, originBranches, setSortedBranches])

  useEffect(() => {
    if ('geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        (error) => {
          console.error('Error Code = ' + error.code + ' - ' + error.message)
        }
      )

      return () => navigator.geolocation.clearWatch(watchId)
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  useEffect(() => {
    ordenarSucursalesPorDistancia()
  }, [ordenarSucursalesPorDistancia])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <GoogleMap
      mapContainerClassName='mx-auto h-full w-full'
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
  )
}
