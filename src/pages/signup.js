import SignupCard from '@/components/Auth/Signup'
import Authcard from '@/components/Auth/Signup'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const signup = () => {
  return (
    <>
      <Navbar />
      <SignupCard />
      <Contact />
      <Footer />
    </>
  )
}

export default signup