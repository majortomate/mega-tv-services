import { Props } from '../interfaces/FormProps'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import useDebounce from '../hooks/useDebounce'
import AddressCard from './AddressCard'
import { DataContext } from '../context/DataContext'

function Second ({ handleSubmit }: Props) {
  const { dispatch, state }: any = useContext(DataContext)
  const [query, setQuery] = useState('')
  const [buildings, setBuildings] = useState<any>([])
  const debounceSearch = useDebounce(query, 500)

  useEffect(() => {
    const getBuildings = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_DEV}/?q=${debounceSearch}`)
      setBuildings(response.data.slice(0, 1))
      console.log(response.data)
    }
    if (debounceSearch.length > 0) void getBuildings()
  }, [debounceSearch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase())
  }

  const handleChangeApt = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'second',
      payload: {
        ...state,
        aptNumber: e.target.value
      }
    })
  }

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="lg:text-5xl md:text-3xl text-2xl text-center mt-10">Pleasure to meet you, Carlos!<br></br> What is your install address?</p>
        <form autoComplete="off">
        <div className="grid gap-6 mb-6 md:grid-cols-4 mt-5 lg:mt-20">
          <div className="col-span-4 lg:col-span-3">
            <label htmlFor="first_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Address</label>
            <input type="search" onChange={handleChange} id="address" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="STREET ADDRESS, CITY, STATE" value={state.address !== '' ? state.address : null} disabled={state.address !== ''}/>
            <div className='absolute'>
              {debounceSearch !== ''

                ? <AddressCard buildings={buildings}/>

                : null}
            </div>
            <div className="text-center">
              <a className="text-sm underline">I can't find my address </a>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-1">
            <label htmlFor="last_name" className="block mb-2 text-lg  font-medium text-gray-900 dark:text-gray-300">Apartment</label>
            <input type="number" onChange={handleChangeApt} id="aptNumber" name="aptNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="APT #"/>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" onClick={handleSubmit} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-6 py-3.5 text-center mr-2 mb-2 mt-20">NEXT</button>
        </div>
        <p className="text-center mx-auto text-gray-400 dark:text-white text-sm">STEP 2 OF 4</p>
        </form>
      </div>
  </>
  )
}

export default Second
