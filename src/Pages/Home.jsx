import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import JobLIsting from '../Component/JobLIsting'
import AppDownload from '../Component/AppDownload'
import Footer from '../Component/Footer'
import AddJob from './AddJob'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JobLIsting />
        <AppDownload />
        <Footer/>

    </div>
  )
}

export default Home