import { Grid, Box, Stack, Typography, Button, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { MailOutline } from "@mui/icons-material";
import History from "./History/History";
import styles from "../../styles/Profile.module.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession({ required: true });
  const [name, setName] = useState(session.user.name);
  const [email, setEmail] = useState(session.user.email);

  const router = useRouter();
  // const dispatch = useDispatch();
  // const userDetails = useSelector((state) => state.userDetails)
  // const { loading, error, user } = userDetails;

  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin;
  // const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  // const { success } = userUpdateProfile

  // useEffect(() => {
  //   if (!userInfo) {
  //     router.push('/signin')
  //   } else {
  //     if (!user || !user.name || success) {
  //       // dispatch({ type: USER_UPDATE_PROFILE_RESET })
  //       // dispatch(getUserDetails('profile'));
  //     } else {
  //       setName(user.name)
  //       setEmail(user.email)
  //     }
  //   }
  // }, [dispatch, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(updateUserProfile({ id: user._id, username: name, email }));
    toast.success("Profile Updated successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setName("");
    setEmail("");
  };
  if (status === "authenticated") {
    return (
      <Box>
        <Grid container padding="2em" className="profileDetails_container">
          <Grid item xs={12} md={9} lg={9}>
            <Stack className={styles.profileDetails}>
              <Box className={styles.profileCover}></Box>
              <img
                className={styles.profile_image}
                src={session.user.image}
                alt="profile"
              />
              <Stack
                justifyContent="space-between"
                padding="60px"
                marginTop="-6em"
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                  alignItems: {
                    xs: "flex-start",
                    sm: "flex-start",
                    md: "center",
                    lg: "center",
                  },
                }}
              >
                <Box className={styles.profileName}>
                  <Typography variant="h3" fontWeight="700" color="#1876d1">
                    {name}
                  </Typography>
                  <Typography variant="p" fontWeight="600" color="#3f62cd">
                    {email}
                  </Typography>
                </Box>
                <Stack spacing="14px">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1876d1",
                      borderRadius: "2em",
                      textTransform: "initial",
                    }}
                  >
                    <ShareIcon />
                    Share Profile
                  </Button>
                  {/* <Delete id={userInfo._id} /> */}
                </Stack>
              </Stack>
            </Stack>
            <Stack className={styles.profileSetting_container} spacing={3}>
              <Typography variant="h5" fontWeight="700" color="#1876d1">
                Profile Setting
              </Typography>
              <Box className={styles.emailSetting}>
                <Typography variant="h6" fontWeight="700" marginBottom="1em">
                  Email Address
                </Typography>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                    },
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                      lg: "90%",
                    },
                  }}
                  justifyContent="space-between"
                >
                  <Stack
                    direction="row"
                    className={styles.emailChange_inpu}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "70%",
                        lg: "70%",
                      },
                      margin: {
                        xs: "10px 0",
                        sm: "10px 0",
                        md: "0 10px",
                        lg: "0 10px",
                      },
                    }}
                  >
                    <Button sx={{ color: "#1876d1" }}>
                      <MailOutline />
                    </Button>
                    <InputBase
                      placeholder="Write new email address"
                      type="email"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Stack>
                  {/* <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1876d1",
                      borderRadius: "10px",
                      textTransform: "initial",
                      width: "30%",
                    }}
                    onClick={submitHandler}
                  >
                    Submit
                  </Button> */}
                </Stack>
              </Box>
              <Box
                className={styles.nameSetting}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                }}
              >
                <Typography variant="h6" fontWeight="700" marginBottom="1em">
                  Name
                </Typography>
                <Stack
                  justifyContent="space-between"
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                    },
                    justifyContent: "space-around",
                  }}
                >
                  <InputBase
                    placeholder="Write new Name"
                    className={styles.newName_input}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "70%",
                        lg: "70%",
                      },
                      margin: {
                        xs: "10px 0",
                        sm: "10px 0",
                        md: "0 10px",
                        lg: "0 10px",
                      },
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1876d1",
                      borderRadius: "10px",
                      textTransform: "initial",
                      width: "30%",
                    }}
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Stack>
            <Stack
              className={styles.historyContainer}
              sx={{
                padding: {
                  xs: "16px",
                  sm: "16px",
                  md: "60px",
                  lg: "60px",
                },
              }}
            >
              <History />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default Profile;
