import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import InfoMessage from './components/InfoMessage/InfoMessage'
import Services from './components/Services/Services'
import Affair from './components/Affair/Affair'
import Info from './components/Info/Info'
import Faq from './components/FAQ/FAQ'
import Support from './components/Support/Support'
import Footer from './components/Footer/Footer'
import Message from './components/Message/Message'

function App() {

  return (
    <>
      <Header />
      <Message />
      <Hero />
      <About />
      <InfoMessage />
      <Services />
      <Affair />
      <Info />
      <Faq />
      <Support />
      <Footer />
    </>
  )
}

export default App
