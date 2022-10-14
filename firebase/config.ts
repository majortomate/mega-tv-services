import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCr6fpUKixwSSGSmOX1EL4xuBR56cjGzY4',
  authDomain: 'mega-tv-services-db.firebaseapp.com',
  projectId: 'mega-tv-services-db',
  storageBucket: 'mega-tv-services-db.appspot.com',
  messagingSenderId: '73864584431',
  appId: '1:73864584431:web:dd49db20d4226efc0e4f1a'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
