import { TextField, Card, Typography, Button } from '@mui/material'
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Auth.module.css'

const bankDetails = () => {
	const [isBorrower, setIsBorrower] = useState(false);
	const [formData, setFormData] = useState({
		holderName: '',
		accountNumber: '',
		IFC: '',
		bankName: '',
		pdfFile: null
	});
	// for signin and signup card
	const handleSubmit = (e) => {
		// dispatch
		// const selectedFile = e.target.files[0];
		// if (selectedFile && selectedFile.type === 'application/pdf') {
		// 	setPdfFile(selectedFile);
		// } else {
		// 	setPdfFile(null);
		// 	alert('Please select a PDF file.');
		// }
		e.preventDefault();
		if (!formData.IFC && !formData.accountNumber && !formData.accountNumber && !formData.bankName) {
			alert('Fill the right information')
		}
		if (!(formData.pdfFile && formData.pdfFile.type === 'application/pdf')) {
			alert('Please select a PDF file.');
		}

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
						Bank Details
					</Typography>
					<TextField placeholder='Account Number' value={formData.accountNumber} name='accountNumber' onChange={handleChange} className={styles.textFields} />
					<TextField placeholder='IFC' value={formData.IFC} name='IFC' onChange={handleChange} className={styles.textFields} />
					<TextField placeholder='Bank Name' value={formData.bankName} name='bankName' onChange={handleChange} className={styles.textFields} />
					<TextField placeholder='Holder Name' value={formData.holderName} name='holderName' onChange={handleChange} className={styles.textFields} />
					<TextField placeholder='Salary in numbers' value={formData.holderName} name='holderName' onChange={handleChange} className={styles.textFields} />
					<label htmlFor="pdf-file-input">Select a salary slip:</label>
					<input id="pdf-file-input" type="file" accept=".pdf" onChange={handleChange} name='pdfFile' />
					{/* only if signup is succssful then only */}
					<Link href='/loanDetails'>
						<Button type='submit'>
							Submit
						</Button>
					</Link>
				</Card>
			</form>

		</>
	)
}

export default bankDetails