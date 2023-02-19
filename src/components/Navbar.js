import React, { useState, useContext } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserContext from "@/context/UserContext";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: session } = useSession();
  const { user, setUser } = useContext(UserContext);
  console.log("from an", user);
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className={styles.Navbar}
      >
        <Box>
          {/* <p> */}
          <Link href="/" className={styles.nav_logo}>
            Loanify
          </Link>
          {/* </p> */}
        </Box>
        <Stack direction="row">
          <Link href="/" className={styles.nav_links}>
            <Typography
              sx={{
                padding: "10px",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/about" className={styles.nav_links}>
            <Typography
              sx={{
                padding: "10px",
              }}
            >
              About Us
            </Typography>
          </Link>
          <Link href="/contact" className={styles.nav_links}>
            <Typography
              sx={{
                padding: "10px",
              }}
            >
              Contact
            </Typography>
          </Link>
          <Link href="/profile" className={styles.nav_links}>
            <Typography
              sx={{
                padding: "10px",
              }}
            >
              {session && session.user.name}
            </Typography>
          </Link>
        </Stack>
        {/* {isLoggedIn ? (
          <>
            <Typography>Name</Typography>
          </> */}

        <Box>
          {session ? (
            user?.bankInfo ? (
              <Link href="/loans" className={styles.signin_links}>
                <Button variant="contained">Lender</Button>
              </Link>
            ) : (
              <Link href="/bankDetails" className={styles.signin_links}>
                <Button variant="contained">Lender</Button>
              </Link>
            )
          ) : (
            <Link href="/" className={styles.signin_links}>
              <Button variant="contained">Lender</Button>
            </Link>
          )}

          {session ? (
            <Link href="/loanDetails" className={styles.signin_links}>
              <Button>Borrower</Button>
            </Link>
          ) : (
            <Link href="/" className={styles.signin_links}>
              <Button>Borrower</Button>
            </Link>
          )}
        </Box>
        {/* )} */}
      </Stack>
    </div>
  );
}

export default Navbar;
