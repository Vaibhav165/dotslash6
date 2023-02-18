import { Button, Card, Typography } from '@mui/material'
import React from 'react';
import Link from 'next/link';
import styles from '../styles/success.module.css'
const success = () => {
	return (
		<Card sx={{
			width: {
				xs: '95%',
				sm: '90%',
				md: '50%',
				lg: '40%'
			},
			margin: 'auto',
			padding: {
				xs: '1em',
				sm: '1em',
				md: '2em',
				lg: '3em'
			}

		}} className={styles.success_card}>
			<Typography margin='8px' variant='h4'>
				Loan details submitted successfully
			</Typography>
			<Typography margin='1em'>
				you will get notified as soon as your loan application is approved
			</Typography>
			<Link href='/profile' className={styles.profile_link}>
				<Button margin='1em' color='success' variant='contained'>
					Go to profile page
				</Button>
			</Link>
		</Card>
	)
}

export default success