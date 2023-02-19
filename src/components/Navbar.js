import React, { useState } from "react";
import { Stack, Box, Typography, Button, Card } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function Navbar () {
  const [isProfile, setIsProfile] = useState(false);
  const profileHandler = () => {
    setIsProfile(!isProfile)
  }
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
        </Stack>

        <Box>
          {session ? (
            <>
              <Stack direction='row'>
                <Button onClick={profileHandler}>
                  <img src={session.user.image} className={styles.navbar_img} />
                </Button>
                <Typography
                  sx={{
                    padding: "10px",
                  }}
                >
                  <Link href='/profile'>
                    {session && session.user?.name}
                  </Link>
                </Typography>
              </Stack>
              {isProfile && <Card sx={{
                flexDirection: 'column'
              }}>
                <Button onClick={() => signOut()}>Logout</Button>
                <Link href="/loans" className={styles.signin_links}>
                  <Button variant="contained">Lender</Button>
                </Link>
              </Card>}

            </>
          ) : (
            <Link href="/signup" className={styles.signin_links}>
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

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/sigin'
      }
    }
  }
  return {
    props: { session }
  }
}
