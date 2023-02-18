import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "/src/styles/LoanDetails.module.css";

function LoanDetails({ loan }) {
  const applyLoan = async () => {
    const res = await fetch("/api/applyLoan", {
      method: "POST",
      body: JSON.stringify({
        loanId: loan._id,
        giverInfo: {
          userId: "userid",
          name: "name",
          email: "email",
        },
      }),
    });
    const resjson = await res.json();
    console.log(resjson);
  };
  return (
    <div className={styles.loanDetails}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography>Amount: {loan.loanAmount}</Typography>
              <Typography>Tenure: {loan.tenure} years</Typography>
              <Typography>Applied At: {loan.appliedAt}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                Interest Rate: {loan.interestRate} % per anum
              </Typography>
              <Typography>Applied By: {loan.appliedBy.name}</Typography>
              <Typography>Contact: {loan.appliedBy.phoneNumber}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button variant="contained" onClick={applyLoan}>
            Apply for this loan
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoanDetails;
