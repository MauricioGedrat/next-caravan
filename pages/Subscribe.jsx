import React from 'react'
import Head from 'next/head'
import AppSubscribeForm from '../components/Subscribe/SubscribeForm'
import AppNavbar from '../components/Home/Navbar'
import Footer from './../components/Home/Footer';

const Subscribe = () => {
    return (
        <div>
        <Head>
        <title>Caravan - Inscrição</title>
      </Head> 
      <AppNavbar/>
     <AppSubscribeForm/>
    <Footer/>
        </div>
    )
}

export default Subscribe
