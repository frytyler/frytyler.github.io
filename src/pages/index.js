import React from 'react'
import 'normalize.css'
import '../global.styled'
import Header from '../components/header/header'
import Footer from '../components/footer'
import About from '../components/about/about'
import CoreValues from '../components/core-values/core-values'
import KeyPractices from '../components/key-practices/key-practices'
import Experience from '../components/experience/experience'

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <About />
    <CoreValues />
    <KeyPractices />
    <Experience />
    <Footer />
  </React.Fragment>
)

export default IndexPage
