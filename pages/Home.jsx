import React from 'react'
import ContainerFluid from './../components/Home/ContainerFluid'
import Benefits from './../components/Home/Benefits'
import Blockquote from './../components/Home/Blockquote'
import Doubts from './../components/Home/Doubts'
import Footer from './../components/Home/Footer'
import AppNavbar from './../components/Home/Navbar'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Caravan</title>
      </Head>
      <AppNavbar />
      <ContainerFluid />
      <Benefits />
      <Blockquote />
      <Doubts />
      <Footer />
    </>
  )
}

export default Home
