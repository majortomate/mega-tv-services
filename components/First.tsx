import { Props } from '../interfaces/FormProps'

function First ({ handleSubmit, handleChange }: Props) {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="lg:text-5xl md:text-3xl text-2xl text-center mt-10">Awesome! Let's get started with the basics!</p>
        <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" onChange={handleChange} name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-lg  font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" onChange={handleChange} id="last_name" name="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" onClick={handleSubmit} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-6 py-3.5 text-center mr-2 mb-2 mt-20">NEXT</button>
        </div>
        <p className="text-center mx-auto text-gray-400 dark:text-white text-sm">STEP 1 OF 4</p>
        </form>
      </div>
  </>
  )
}

export default First
