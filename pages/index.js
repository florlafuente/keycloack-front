import React from 'react'
import Link from 'next/link'
import Head from '../components/head'

const Home = () => (
  <div>
    <Head title='Home' />
    <div>
      <Link href='/secured'>
        <button>
          Ruta protegida
        </button>
      </Link>
      <div>
        Hola mundo!
      </div>
    </div>
  </div>
)

export default Home
