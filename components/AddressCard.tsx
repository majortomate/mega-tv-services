import SelectButton from './SelectButton'

interface Props {
  buildings: Array<{
    address: string
    apt: number[]
    city: string
    name: string
    state: string
    zip_code: string
    id: string
  }>
}

function AddressCard ({ buildings }: Props) {
  return (
    <>
    {buildings.map((building: any) => (
          <div className="bg-gray-200 rounded-lg shadow-lg p-5 grid-cols-5 grid items-center m-2" key={building.id}>
          <div className="col-span-4">
            <p className="font-bold text-blue-700">{building.name}</p>
            <p>{building.address}</p>
          </div>
          <div className="col-span-1">
            <SelectButton building={building} buildings={buildings}/>
          </div>
      </div>
    ))}

    </>
  )
}

export default AddressCard
