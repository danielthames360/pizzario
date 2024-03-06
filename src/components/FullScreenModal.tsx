interface FullScreenModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const FullScreenModal = ({
  children,
  isOpen,
  onClose
}: FullScreenModalProps) => {
  if (!isOpen) return null

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-white z-50'>
      <button
        className='absolute top-0 right-0 m-2 z-50 bg-red-500 text-white font-bold border-red-400 border-2 rounded p-2'
        onClick={onClose}
      >
        Cerrar mapa
      </button>
      {children}
    </div>
  )
}
