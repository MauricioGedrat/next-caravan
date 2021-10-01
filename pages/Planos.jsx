import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Prices from '../components/Planos/Prices'
import AppNavbar from './../components/Home/Navbar';
import Footer from './../components/Home/Footer';

const Planos = () => {
  return (
    <>
      <Head>
        <title>Caravan - Planos</title>
      </Head>
      <AppNavbar/>
      <Prices/>
      <Footer/>
    </>
  )
}

export default Planos
