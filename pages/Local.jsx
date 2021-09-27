import React from 'react'
import Head from 'next/head'
import Galery from './../components/Local/Galery'
import AppNavbar from '../components/Home/Navbar'

const Local = () => {
  return (
    <div>
      <Head>
        <title>Caravan - Locais</title>
      </Head>
      <AppNavbar />
      <Galery />
    </div>
  )
}

export default Local
