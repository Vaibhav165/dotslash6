import React from 'react'
import { Box, Grid, Typography, Stack } from '@mui/material'
const Middle = () => {
	return (
		<Grid xs={12} container
			sx={{
				backgroundColor: "#80bfff",
				borderRadius: "3em",
				padding: {
					xs: '1em',
					sm: '1em',
					md: '2em',
					lg: '3em'
				},
				margin: "auto",
				width: "95%",
				marginBottom: '3em'
			}} >
			<Grid item xs={12} md={4} lg={4} padding="2em">
				<Typography variant='p' lineHeight={2} fontWeight='600' sx={{
					fontSize: {
						xs: '24px',
						sm: '24px',
						md: '28px',
						lg: '28px'
					},
					color: 'white'
				}}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry
				</Typography>
			</Grid>
			<Grid item xs={12} md={4} lg={4} padding="2em" >
				<Typography variant='p' lineHeight={2} fontWeight='600' sx={{
					fontSize: {
						xs: '24px',
						sm: '24px',
						md: '28px',
						lg: '28px'
					},
					color: 'white'
				}}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</Typography>
			</Grid>
			<Grid item xs={12} md={4} lg={4} padding="2em">
				<Typography variant='p' lineHeight={2} fontWeight='600' sx={{
					fontSize: {
						xs: '24px',
						sm: '24px',
						md: '28px',
						lg: '28px'
					},
					color: 'white'
				}}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Middle