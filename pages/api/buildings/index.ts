/* eslint-disable @typescript-eslint/dot-notation */
import { db } from '../../../firebase/config'
import { getDocs, collection, DocumentData } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { q }: any = req.query
  const buildings: DocumentData[] = []
  const querySnapshot = await getDocs(collection(db, 'buildings'))
  querySnapshot.forEach((doc) => {
    const newData = {
      ...doc.data(),
      id: doc.id
    }
    buildings.push(newData)
  })
  const search = (data: any[]) => {
    return data.filter((item) => Object.values(item).toString().toLowerCase().includes(q))
  }
  return res.status(200).json(search(buildings))
}
