import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero-section/Hero'
import Company from '../components/Company-section/Company'
import AboutUs from '../components/About-us/AboutUs'
import Courses from '../components/Courses-section/Courses'
import ChooseUs from '../components/Choose-us/ChooseUs'
import Feature from '../components/Feature-section/Feature'
import FreeCourse from '../components/Free-courses-section/FreeCourse'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <Company/>
   <AboutUs/>
   <Courses/>
   <ChooseUs/>
   <Feature/>
   <FreeCourse/>
   <Testimonial/>
   <Newsletter/>
   <Footer/>
   </>
  )
}

export default Home