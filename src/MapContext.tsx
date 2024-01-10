import { createContext, useContext, useState, ReactNode } from 'react'
import { Sucursal, sucursales } from './sucursales'

type MapContextType = {
  activeBranch: Sucursal | null
  branches: Sucursal[]
  sortedBranches: Sucursal[] | null
  setActiveBranch: (sucursal: Sucursal | null) => void
  setBranches: (sucursales: Sucursal[]) => void
  setSortedBranches: (sucursales: Sucursal[] | null) => void
}

export const MapContext = createContext<MapContextType | undefined>(undefined)

export const useMapContext = () => useContext(MapContext)!

type MapProviderProps = {
  children: ReactNode
}

export const MapProvider = ({ children }: MapProviderProps) => {
  const [activeBranch, setActiveBranch] = useState<Sucursal | null>(null)
  const [branches, setBranches] = useState<Sucursal[]>(sucursales)
  const [sortedBranches, setSortedBranches] = useState<Sucursal[] | null>(null)

  return (
    <MapContext.Provider
      value={{
        activeBranch,
        setActiveBranch,
        sortedBranches,
        setSortedBranches,
        branches,
        setBranches
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
