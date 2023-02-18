import React, { useState } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

function Navbar () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Stack direction='row' alignItems='center' justifyContent='space-between' className={styles.Navbar}>
        <Box>
          <Typography>
            <Link href='/' className={styles.nav_logo}>Loanify</Link>
          </Typography>
        </Box>
        <Stack direction='row'>
          <Typography sx={{
            padding: '10px'
          }}>
            <Link href='/' className={styles.nav_links}>Home</Link>
          </Typography>
          <Typography sx={{
            padding: '10px'
          }}>
            <Link href='/about' className={styles.nav_links}>About Us</Link>
          </Typography>
          <Typography sx={{
            padding: '10px'
          }}>
            <Link href='/contact' className={styles.nav_links}>Contact</Link>
          </Typography>
        </Stack>
        {isLoggedIn ? <><Typography>
          Name</Typography></> : <Box>
          <Link href='/signin' className={styles.signin_links}>
            <Button variant='contained'>
              Lender
            </Button>
          </Link>
          <Link href='/signin' className={styles.signin_links}>
            <Button>
              Borrower
            </Button>
          </Link>
        </Box>}
      </Stack>
    </div>
  );
}

export default Navbar;