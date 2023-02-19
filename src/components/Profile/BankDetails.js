import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import UserContext from "@/context/UserContext";

const BankDetails = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <Grid container spacing={6} sx={{ padding: "20px" }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4">Bank Details</Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography>
              Account Holder Name: {user?.bankInfo.holderName}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography>Bank Name: {user?.bankInfo.bankName}</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography>
              Account Number: {user?.bankInfo.accountNumber}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography>IFSC Code: {user?.bankInfo.ifsc}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BankDetails;
