import React from 'react'
import Layout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import Experties from '../../components/experties/Experties'
import Projects from '../../components/projects/Projects'
import About from '../../components/about/About'

function Home() {
  return (
    <Layout>
     <Hero/>
     <About/>
     <Experties/>
     {/* <Projects/> */}
    </Layout>
  )
}

export default Home
