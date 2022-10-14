import { db } from '../../../firebase/config'
import { getDocs, collection } from 'firebase/firestore'

/* const building = {
  name: 'Casa Ojeda',
  city: 'Ojeda',
  state: 'Zulia',
  zip_code: 666,
  address: 'Barrio Paraiso #123',
  apt: [
    12,
    22,
    23,
    24
  ]
} */

export const querySnapshot = await getDocs(collection(db, 'buildings'))
querySnapshot.forEach((doc) => {
  console.log(doc.data())
})
