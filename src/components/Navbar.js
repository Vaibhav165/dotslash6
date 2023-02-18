import React, { useState } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: session } = useSession();
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className={styles.Navbar}
      >
        <Box>
          <p>
            <Link href="/" className={styles.nav_logo}>
              Loanify
            </Link>
          </p>
        </Box>
        <Stack direction="row">
          <Link href="/" className={styles.nav_links}>
            <p
              sx={{
                padding: "10px",
              }}
            >
              Home
            </p>
          </Link>
          <Link href="/about" className={styles.nav_links}>
            <p
              sx={{
                padding: "10px",
              }}
            >
              About Us
            </p>
          </Link>
          <Link href="/contact" className={styles.nav_links}>
            <p
              sx={{
                padding: "10px",
              }}
            >
              Contact
            </p>
          </Link>

          <Typography
            sx={{
              padding: "10px",
            }}
          >
            {session && session.user.name}
          </Typography>
        </Stack>
        {/* {isLoggedIn ? (
          <>
            <Typography>Name</Typography>
          </> */}

        <Box>
          {session ? (
            <Link href="/loans" className={styles.signin_links}>
              <Button variant="contained">Lender</Button>
            </Link>
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
