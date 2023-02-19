import { TextField, Card, Typography, Button } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import styles from "../../styles/Auth.module.css";
import { useRouter } from "next/router";

const SigninCard = () => {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
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

    if (formData.password === formData.confirmPassword) {
      setCheckPassword(true);

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
  const registerUser = async (e) => {
    if (session) {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          email: session.user.email,
          Name: session.user.name,
          maxLoanAmount: 1000,
        }),
      });
      const resjson = await res.json();
      console.log(resjson);
    }
  };
  useEffect(() => {
    if (session) {
      console.log(session);
      registerUser();
      console.log("resg");
    }
  }, [4]);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  });

  const signGoogle = async () => {
    signIn();
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
          {/* <TextField
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            type="email"
            className={styles.textFields}
          /> */}
          {/* <TextField
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className={styles.textFields}
          /> */}

          {/* only if signup is succssful then only */}
          {/* <Link href="/bankDetails"> */}
          {/* <Button onClick={handleSubmit}>Submit</Button> */}
          {/* </Link> */}
          <Typography variant="h4" textAlign='center'>
            Loanify
          </Typography>

          <Button type="submit" onClick={signGoogle} variant='contained'>
            Signin with google
          </Button>
        </Card>
      </form>
    </>
  );
};

export default SigninCard;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/sigin",
      },
    };
  }
  return {
    props: { session },
  };
};
