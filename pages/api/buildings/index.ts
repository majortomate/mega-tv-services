import { db } from '../../../firebase/config'
import { getDocs, collection, DocumentData } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

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

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query
  const buildings: DocumentData[] = []
  const querySnapshot = await getDocs(collection(db, 'buildings'))
  querySnapshot.forEach((doc) => {
    buildings.push(doc.data())
  })

  const search = (data: any[]) => {
    return data.filter((item) => item.name.toLowerCase().includes(q))
  }
  return res.status(200).json(search(buildings))
}
