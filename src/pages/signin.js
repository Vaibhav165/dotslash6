import SigninCard from '@/components/Auth/SigninCard'
import Authcard from '@/components/Auth/Signup'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const signin = () => {
	return (
		<>
			<Navbar />
			<SigninCard />
			<Contact />
			<Footer />
		</>
	)
}

export default signin