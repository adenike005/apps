import React from 'react'
import Header from '../Component/Header'
import HeroSection from '../Component/HeroSection'
import About from '../Component/About'
import Skills from '../Component/Skills'
import Technologies from '../Component/Technologies'
import Footer from "../Component/Footer"
import Footers from "../Component/Footers"
import Project from "../Component/Project"

function Landing() {
  return (
    <>
        
        <Header/>
        <HeroSection/>
        <About/>
        <Technologies/>
        <Skills/>
        <Project/>
        <Footer/>
        <Footers/>
    </>
  )
}

export default Landing