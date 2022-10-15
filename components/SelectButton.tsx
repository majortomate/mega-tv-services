import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'

interface Props {
  building: any
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

function SelectButton ({ building, buildings }: Props) {
  const [selected, setSelected] = useState(false)
  const { dispatch, state }: any = useContext(DataContext)
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>, key: string) => {
    e.preventDefault()
    const match = buildings.filter(building => building.id === key)
    setSelected(true)
    dispatch({
      type: 'second',
      payload: {
        ...state,
        address: match[0].address
      }
    })
  }
  const handleDeselect = (e: React.MouseEvent<HTMLButtonElement>, key: string) => {
    e.preventDefault()
    setSelected(false)
    dispatch({
      type: 'second',
      payload: {
        ...state,
        address: ''
      }
    })
  }
  return (
    <button onClick={!selected ? (e) => handleSelect(e, building.id) : (e) => handleDeselect(e, building.id)} className={!selected ? 'text-white bg-blue-700 font-medium rounded-lg text-sm px-4 py-1.5 text-center ml-5' : 'text-white bg-blue-900 font-medium rounded-lg text-sm px-4 py-1.5 text-center'}>
    {!selected ? 'SELECT' : 'DESELECT'}
  </button>
  )
}

export default SelectButton
