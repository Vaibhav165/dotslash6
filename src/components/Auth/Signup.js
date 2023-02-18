import { TextField, Card, Typography, Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Auth.module.css";

const SignupCard = () => {
  const [isBorrower, setIsBorrower] = useState(false);
  const handleSwitch = () => {
    setIsBorrower(!isBorrower);
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // for signin and signup card
  const [isSignup, setIsSignup] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const handleSubmit = async (e) => {
    // dispatch
    e.preventDefault();
    console.log(formData);
    if (formData.password === formData.confirmPassword) {
      setCheckPassword(true);
      console.log(formData);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ ...formData, Name: formData.username }),
      });
      const resjson = await res.json();
      console.log(resjson);
    } else {
      alert("Password must be same");
      setCheckPassword(false);
    }
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
          <Typography alignItems="center">Signup</Typography>
          <TextField
            placeholder="Username"
            value={formData.username}
            name="username"
            onChange={handleChange}
            className={styles.textFields}
          />
          <TextField
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            type="email"
            className={styles.textFields}
          />
          <TextField
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className={styles.textFields}
          />
          <TextField
            placeholder="Confirm password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            className={styles.textFields}
          />

          {/* only if signup is succssful then only */}
          {/* <Link href="/bankDetails"> */}
          <Button onClick={handleSubmit}>Submit</Button>
          {/* </Link> */}
          <Link href="/signin" className={styles.navigate_link}>
            Already have an account
          </Link>
        </Card>
      </form>
    </>
  );
};

export default SignupCard;
