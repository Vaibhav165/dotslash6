import { TextField, Card, Typography, Button } from '@mui/material'
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../../styles/Auth.module.css'

const SigninCard = () => {
	const [isBorrower, setIsBorrower] = useState(false);
	const handleSwitch = () => {
		setIsBorrower(!isBorrower)
	}
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	// for signin and signup card
	const [isSignup, setIsSignup] = useState(false);
	const [checkPassword, setCheckPassword] = useState(false);
	const handleSubmit = (e) => {
		// dispatch
		e.preventDefault();
		console.log(formData)
	}
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Card sx={{
					width: {
						xs: '100%',
						md: '50%',
						lg: '40%'
					},
				}} className={styles.auth_card}>
					<Typography alignItems='center'>
						Signin
					</Typography>
					<TextField placeholder='Email' value={formData.email} name='email' onChange={handleChange} type='email' className={styles.textFields} />
					<TextField placeholder='Password' value={formData.password} name='password' onChange={handleChange} className={styles.textFields} />
					{/* only if signup is succssful then only */}
					<Button type='submit'>
						Submit
					</Button>

					<Link href='/signup' className={styles.navigate_link}>
						New? Create one
					</Link>
				</Card>
			</form>

		</>
	)
}

export default SigninCard 