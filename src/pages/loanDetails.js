import { TextField, Card, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "../styles/Auth.module.css";
import useToast from "/src/Hooks/useToast";

const loanDetails = () => {
  const router = useRouter();
  const [isBorrower, setIsBorrower] = useState(false);
  const [formData, setFormData] = useState({
    loanAmount: "",
    interestRate: "",
    tenure: "",
    appliedBy: "Ansh",
  });

  const notify = useToast();

  // for signin and signup card
  const maxLoanAmount = 10000;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // router.push("/success");
    console.log(formData);
    if (formData.loanAmount && parseInt(formData.loanAmount) > maxLoanAmount) {
      notify("error", "Applied Amount cannot exceed max amount");
    } else {
      const res = await fetch("/api/createLoan", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          appliedBy: {
            userID: "63f07026ebbbe0901c409167",
            name: "name",
            email: "email",
            phoneNumber: "12121212",
          },
        }),
      });
      const resjson = await res.json();
      console.log(resjson);
      if (resjson.success) {
        notify("success", "Loan applied successfully");
      } else {
        notify("error", resjson.message);
      }
    }
    // if (parseInt(formData.tenure) <= 1) {
    //   toast.error("Tenure should be greater than 1 year", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   alert("Tenure should be greater than 1 year");
    // }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card
          sx={{
            width: {
              xs: "100%",
              md: "50%",
              lg: "40%",
            },
            marginBottom: "2em",
          }}
          className={styles.auth_card}
        >
          <Typography alignItems="center">Loan Details</Typography>
          <Stack>
            <Typography variant="h4" marginTop="1em">
              MAX LOAN AMOUNT
            </Typography>
            <Typography variant="h3">1000</Typography>
          </Stack>
          <TextField
            placeholder="Loan Amount"
            value={formData.loanAmount}
            name="loanAmount"
            onChange={handleChange}
            className={styles.textFields}
            type="number"
          />
          <TextField
            placeholder="Intrest Rate"
            value={formData.interestRate}
            name="interestRate"
            onChange={handleChange}
            className={styles.textFields}
            type="number"
          />
          <TextField
            placeholder="Tenure in years"
            value={formData.tenure}
            name="tenure"
            onChange={handleChange}
            className={styles.textFields}
            type="number"
          />
          <Typography variant="h5" margin="8px">
            EMI: 1000/month
          </Typography>
          {/* only if signup is succssful then only */}

          <Button type="submit">Submit</Button>
        </Card>
      </form>
    </>
  );
};

export default loanDetails;
