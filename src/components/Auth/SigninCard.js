import { TextField, Card, Typography, Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import styles from "../../styles/Auth.module.css";
import { useRouter } from "next/router";
import useToast from "@/Hooks/useToast";

const SigninCard = () => {
  const router = useRouter();
  const [isBorrower, setIsBorrower] = useState(false);
  const handleSwitch = () => {
    setIsBorrower(!isBorrower);
  };

  const notify = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // for signin and signup card
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrormessage] = useState('');
  const handleSubmit = async (e) => {
    // dispatch
    e.preventDefault();
    const payload = { email, password }
    const result = await signIn('credentials', { ...payload, redirect: false })
    console.log(result)

    if (!result.error) {
      router.push('/');
      notify('success', 'Login successfull')
    }
    else {
      setErrormessage(result.error);
    }
  };
  const { data: session } = useSession();
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
          }}
          className={styles.auth_card}
        >
          <Typography alignItems="center">Signin</Typography>
          <TextField
            placeholder="Email"
            value={email}
            name="email"
            onChange={e => setEmail(e.target.value)}
            type="email"
            className={styles.textFields}
          />
          <TextField
            placeholder="Password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
            className={styles.textFields}
          />
          {/* only if signup is succssful then only */}
          <Button type="submit">Submit</Button>

          <Link href="/signup" className={styles.navigate_link}>
            New? Create one
          </Link>
        </Card>
      </form>
    </>
  );
};

export default SigninCard;
