import Hero from '@/components/About/Hero'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Middle from '@/components/Procedure'
import React from 'react'

const about = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Middle />
			<Contact />
			<Footer />
		</div>
	)
}

export default about