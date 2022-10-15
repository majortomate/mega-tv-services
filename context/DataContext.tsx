/* eslint-disable @typescript-eslint/naming-convention */
import { createContext, ReactNode, useReducer } from 'react'

export const DataContext = createContext({})

interface InitialState {
  first_name: string
  last_name: string
  address: string
  aptNumber: string
  plans: string
  email: string
  phone: string
}
interface Children {
  children: ReactNode
}
const initialState: InitialState = {
  first_name: '',
  last_name: '',
  address: '',
  aptNumber: '',
  plans: '',
  email: '',
  phone: ''
}

function reducer (state: InitialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case 'first':
      return { ...state, first_name: payload.first_name, last_name: payload.last_name }
    case 'second':
      return { ...state, address: payload.address, aptNumber: payload.aptNumber }
    case 'third':
      return { ...state, plans: payload.plans }
    case 'fourth':
      return { ...state, email: payload.email, phone: payload.phone }
    case 'subscribe': return state
    default:
      return state
  }
}
export const DataProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const store = {
    state,
    dispatch
  }
  return (
    <DataContext.Provider value={ store }>
      { children }
    </DataContext.Provider>
  )
}
