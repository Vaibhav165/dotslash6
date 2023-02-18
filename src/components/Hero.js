import { Card, Grid, Stack, Typography, Button } from '@mui/material'
import ReactPlayer from 'react-player'
import React from 'react'
import Link from 'next/link';
import styles from '../styles/Hero.module.css'

const Hero = () => {
	return (
		<Grid container>
			<Grid md={6} lg={6} xs={12}
				item
				sx={{
					margin: "auto",
					padding: {
						xs: '1.5em',
						sm: '1em',
						md: '3em',
						lg: '5em'
					}
				}} >
				<Stack spacing={3} justifyContent='center' >
					<Typography
						variant='p'
						fontWeight="600"
						sx={{
							fontSize: {
								xs: '32px',
								sm: '36px',
								md: '42px',
								lg: '42px'
							}
						}}>
						Digital Lending with Personal Service
					</Typography>
					<Typography
						variant='p'
						fontWeight="600"
						color="#80bfff"
						sx={{
							fontSize: {
								xs: '22px',
								sm: '26px',
								md: '22px',
								lg: '22px'
							}
						}}>
						Simple Online procedure to get or give loans
					</Typography>

					{/* If signup nhi h toh else loan window */}
					<Link href='/signup' className={styles.apply_btn} >
						<Button variant='contained' sx={{
							margin: 'auto',
							textDecoration: 'none'
						}}>
							Apply Now
						</Button>
					</Link>
				</Stack>
			</Grid>
			<Grid md={6} lg={6} xs={12} item justifyContent="center" sx={{
				padding: {
					xs: '1em',
					sm: '2em',
					md: '5em',
					lg: '5em'
				},
				marginBottom: {
					xs: '2em'
				},
			}}>
				<Card sx={{
					width: {
						xs: '85%',
						sm: '85%',
						md: '80%',
						lg: '80%'
					},
					height: "90%",
					display: "flex",
					flexDirection: "column",
					padding: 2,
					margin: "auto",
					backgroundColor: "#80bfff"
				}}>
					<Typography variant='h5' fontWeight="600" textAlign="left" marginBottom={3} color='white'>
						How it works
					</Typography>
					<ReactPlayer url="https://www.youtube.com/watch?v=GGo3MVBFr1A" width="100%" height="80%" />
				</Card>
			</Grid>
		</Grid>
	)
}

export default Hero