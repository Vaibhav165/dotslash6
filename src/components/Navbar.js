import React, { useState } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className={styles.Navbar}
      >
        <Box>
          <Typography>
            <Link href="/" className={styles.nav_logo}>
              Loanify
            </Link>
          </Typography>
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
        </Stack>
        {isLoggedIn ? (
          <>
            <Typography>Name</Typography>
          </>
        ) : (
          <Box>
            <Link href="/loans" className={styles.signin_links}>
              <Button variant="contained">Lender</Button>
            </Link>
            <Link href="/loanDetails" className={styles.signin_links}>
              <Button>Borrower</Button>
            </Link>
          </Box>
        )}
      </Stack>
    </div>
  );
}

export default Navbar;
