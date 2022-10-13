import React, { useState } from 'react'
import Start from './Start'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'

function Form () {
  const [page, setPage] = useState(0)
  const [form, setForm] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setPage(page + 1)
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <Start handleSubmit={handleSubmit}/>
      case 1:
        return <First handleSubmit={handleSubmit} handleChange={handleChange}/>
      case 2:
        return <Second handleSubmit={handleSubmit} handleChange={handleChange}/>
      case 3:
        return <Third handleSubmit={handleSubmit} handleChange={handleChange}/>
      case 4:
        return <Fourth handleSubmit={handleSubmit}/>
      default:
        return <First />
    }
  }
  return (
    <>
      {conditionalComponent()}
    </>
  )
}
export default Form
