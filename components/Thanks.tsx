import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
function Thanks () {
  const { state }: any = useContext(DataContext)

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-bold text-5xl lg:text-7xl text-center text-black">Thanks for trusting us! </h1>
        <p className="text-3xl text-center mt-10">You're now subscribed. In a few days we will visit you to install your cable service. </p>
        <div className='text-center border border-gray-700 p-5 mt-5'>
        <p>Member: {state.first_name} {state.last_name}</p>
        <p>Address: {state.address} - {state.aptNumber}</p>
        <p>Email: {state.email} - phone: {state.phone}</p>
        <p>Plan Adquired: {state.address}</p>
        </div>
          <button type="button" onClick={() => window.location.reload()} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-6 py-3.5 text-center mr-2 mb-2 mt-20">Back to Home</button>
      </div>
    </>
  )
}

export default Thanks
