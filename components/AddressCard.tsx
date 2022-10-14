interface Props {
  buildings: Array<{
    address: string
    apt: number[]
    city: string
    name: string
    state: string
    zip_code: string
  }>
}

function AddressCard ({ buildings }: Props) {
  return (
    <>
    {buildings.map((building: any) => (
          <div className="bg-gray-200 rounded-lg shadow-lg p-5 grid-cols-5 grid items-center m-2" key={building.name}>
          <div className="col-span-4">
            <p className="font-bold text-blue-700">{building.name}</p>
            <p>{building.address}</p>
          </div>
          <div className="col-span-1">
            <button className="text-white bg-blue-700 font-medium rounded-lg text-sm px-4 py-1.5 text-center">
              SELECT
            </button>
            <button className="text-white border border-gray-600 font-medium rounded-full text-sm p-2 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x text-gray-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
      </div>
    ))}

    </>
  )
}

export default AddressCard
