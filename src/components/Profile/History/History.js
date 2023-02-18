import { Typography, List, ListItem } from '@mui/material'
import React from 'react'
import styles from '../../../styles/Profile.module.css';
const History = () => {
	return (
		<>
			<Typography variant='h4' sx={{
				fontWeight: '700',
				fontSize: '21px',
				color: '#1876d1',
				marginBottom: '24px'
			}}>
				Last Activities
			</Typography>
			<List className={styles.historyList}>
				<ListItem className={styles.historyItem}>
					<Typography>30 December</Typography>
					<Typography sx={{
						fontSize: '12px',
						fontWeight: '500',
						marginLeft: '32px'
					}}>
						Loan application number:10000</Typography>
					<Typography sx={{
						fontSize: '12px',
						fontWeight: '500',
						marginLeft: '32px'
					}}>Pending....</Typography>
				</ListItem>
				<ListItem className={styles.historyItem}>
					<Typography>30 December</Typography>
					<Typography sx={{
						fontSize: '12px',
						fontWeight: '500',
						marginLeft: '32px'
					}}>
						Loan application number:10000</Typography>
					<Typography sx={{
						fontSize: '12px',
						fontWeight: '500',
						marginLeft: '32px'
					}}>Approved</Typography>
				</ListItem>
			</List>
		</>
	)
}

export default History