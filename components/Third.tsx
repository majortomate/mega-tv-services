import { Props } from '../interfaces/FormProps'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

function Third ({ handleSubmit }: Props) {
  const { dispatch, state }: any = useContext(DataContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'third',
      payload: {
        ...state,
        [e.target.name]: e.target.value
      }
    })
  }
  return (
    <>
      <div className=" lg:fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <p className="lg:text-5xl md:text-3xl text-2xl text-center mt-10">Please select the TV plan you want to enjoy:</p>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="grid grid-cols-2 gap-2 lg:gap-10 lg:grid-cols-2 lg:space-y-0">
                  <div className="lg:flex lg:flex-col col-span-1 p-6 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                      <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
                      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Service</p>
                      <div className="flex justify-center items-baseline my-8">
                          <span className="mr-2 text-5xl font-extrabold">$29</span>
                          <span className="text-gray-500 dark:text-gray-400">/month</span>
                      </div>
                      <ul role="list" className="mb-8 space-y-4 text-left">
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                              <span>60 Standar Channels</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                              <span>10 HD Channels</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                              <span>1 HD decoders</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                              <span>1 month Netflix Included</span>
                          </li>
                      </ul>
                      <input type="radio" onChange={handleChange} name="plans" id="basic" value="basic" className="h-8" required/>
                  </div>
                  <div className="lg:flex lg:flex-col col-span-1 p-6 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                      <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Service</p>
                      <div className="flex justify-center items-baseline my-8">
                          <span className="mr-2 text-5xl font-extrabold">$99</span>
                          <span className="text-gray-500 dark:text-gray-400">/month</span>
                      </div>
                      <ul role="list" className="mb-8 space-y-4 text-left">
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                              <span>97 Standar Channels</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                              <span>64 HD Channels</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                              <span>2 HD decoders</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                              <span>6 months Netflix Included</span>
                          </li>
                      </ul>
                      <input type="radio" onChange={handleChange} name="plans" id="premium" value="premium" className="h-8" required/>
                  </div>
              </div>
          </div>
          <div className="text-center">
          <button type="submit" onClick={handleSubmit} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-6 py-3.5 text-center mr-2 mb-2 mt-10">I AM READY!</button>
        </div>
        <p className="text-center mx-auto text-gray-400 dark:text-white text-sm">STEP 3 OF 4</p>
      </div>
  </>
  )
}

export default Third
