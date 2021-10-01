import React from 'react'
import Head from 'next/head'
import Galery from './../components/Local/Galery'
import AppNavbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import AppTable from '../components/Local/AppTable'

const Local = () => {
  return (
    <div>
      <Head>
        <title>Caravan - Locais</title>
      </Head>
      <AppNavbar />
      <Galery />
      <AppTable/>
      <Footer/>
    </div>
  )
}

export default Local
