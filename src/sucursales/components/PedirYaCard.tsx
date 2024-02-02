export const PedirYaCard = ({ id }: { id: string | undefined }) => {
  if (!id) return null
  return (
    <>
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        data-glf-cuid='d1feca7c-ffe6-4a02-ac9d-1eca3fb78dab'
        data-glf-ruid={id}
      >
        Pedir Ya!
      </button>
    </>
  )
}
