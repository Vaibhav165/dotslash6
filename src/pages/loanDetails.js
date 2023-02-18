import { TextField, Card, Typography, Button, Stack } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '../styles/Auth.module.css'

const loanDetails = () => {
	const router = useRouter();
	const [isBorrower, setIsBorrower] = useState(false);
	const [formData, setFormData] = useState({
		loanAmount: '',
		intersetRate: '',
		tenure: '',
		appliedBy: 'Ansh'
	});
	console.log(formData)
	// for signin and signup card
	const maxLoanAmount = 100000;
	const handleSubmit = (e) => {
		e.preventDefault();
		router.push('/success')
		console.log(formData)
		if (formData.loanAmount > maxLoanAmount) {
			alert('You can not apply for loan amount greater than mac loan amount')
		}
		if (formData.tenure <= 1) {
			toast.error('Tenure should be greater than 1 year', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			})
			alert('Tenure should be greater than 1 year');
		}

		console.log('I am clicked')
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
					marginBottom: '2em'
				}} className={styles.auth_card}>
					<Typography alignItems='center'>
						Loan Details
					</Typography>
					<Stack>
						<Typography variant='h4' marginTop='1em'>
							MAX LOAN AMOUNT
						</Typography>
						<Typography variant='h3'>
							1000000
						</Typography>
					</Stack>
					<TextField placeholder='Loan Amount' value={formData.loanAmount} name='loanAmount' onChange={handleChange} className={styles.textFields} type='number' />
					<TextField placeholder='Intrest Rate' value={formData.intersetRate} name='intersetRate' onChange={handleChange} className={styles.textFields} type='number' />
					<TextField placeholder='Tenure in years' value={formData.tenure} name='tenure' onChange={handleChange} className={styles.textFields} type='number' />
					<Typography variant='h5' margin='8px'>
						EMI: 1000/month
					</Typography>
					{/* only if signup is succssful then only */}

					<Button type='submit'>
						Submit
					</Button>
				</Card>
			</form>

		</>
	)
}

export default loanDetails