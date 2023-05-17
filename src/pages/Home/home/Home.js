import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../../Contact/Contact'
import Products from '../../Product/Products'
import PeopleWork from '../../PeopleWork/PeopleWork'
import Company from '../../Company/Company'

const Home = () => {
  return (
    <div>
        <Banner/>
        <About/>
        <Services/>
        <Contact/>
        <Products/>
        <PeopleWork/>
        <Company/>
    </div>
  )
}

export default Home