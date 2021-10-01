import React from 'react'
import Head from 'next/dist/shared/lib/head'
import AppNavbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import Doubts from '../components/Home/Doubts'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Caravan - Contato</title>
      </Head>
      <AppNavbar/>
      <ContactForm/>
      <Doubts/>
      <Footer/>
    </div>
  )
}

export default Contact
