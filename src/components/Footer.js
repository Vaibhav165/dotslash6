import { MailOutline } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack, Box, Typography, List, ListItem, Grid, TextField, Button, InputBase } from '@mui/material'
import React from 'react'
import Link from "next/link";
import styles from '../styles/Footer.module.css'
const Footer = () => {
	return (
		<Stack
			direction="row"
			className={styles.footer_container}
			spacing={5}
			justifyContent="space-around"
			sx={{
				display: {
					xs: 'none',
					sm: 'none',
					md: 'flex',
					lg: 'flex'
				}
			}}>
			<Box className={styles.footer_right} >
				<Typography variant='h4' marginBottom={1.5}>
					Loanify
				</Typography>
				<Typography variant='h6'>
					Better way to get loans easily
				</Typography>
			</Box>
			<Box className={styles.footer_mid}>
				<List>
					<ListItem>
						<Link href="/" className={styles.footer_link}>
							Home
						</Link>
					</ListItem>
					<ListItem>
						<Link href="/about" className={styles.footer_link}>
							About
						</Link>
					</ListItem>
					<ListItem>
						<Link href="/post" className={styles.footer_link}>
							Contact
						</Link>
					</ListItem>
				</List>
			</Box>
			<Stack className={styles.footer_lef} spacing={2}>
				<Typography variant='h4' fontWeight="700">
					Get our newsletter
				</Typography>
				<Stack direction="row" spacing={2}>
					<Stack direction="row" className={styles.newsletter_input} >
						<Button sx={{ color: '#1876d1' }}>
							<MailOutline />
						</Button>
						<InputBase placeholder={styles.Label} />
					</Stack>
					<Button variant='contained' sx={{ backgroundColor: 'white', color: '#1876d1' }}>
						Submit
					</Button>
				</Stack>
				<Stack direction="row">
					<Link href="#">
						<Button sx={{ color: "white" }}>
							<InstagramIcon />
						</Button>
					</Link>
					<Link href="#">
						<Button sx={{ color: "white" }}>
							<FacebookIcon />
						</Button>
					</Link>
					<Link href="#">
						<Button sx={{ color: "white" }}>
							<TwitterIcon />
						</Button>
					</Link>
				</Stack>
			</Stack >
		</Stack >
	)
}

export default Footer