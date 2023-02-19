import { Typography, List, ListItem } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Profile.module.css";
import UserContext from "@/context/UserContext";

const History = () => {
  const { user, setUser } = useContext(UserContext);
  const [userLoans, setUserLoans] = useState();
  const fetchLoans = async () => {
    if (user) {
      const res = await fetch("/api/getLoansByUser", {
        method: "POST",
        body: JSON.stringify({
          userId: user._id,
          email: user.email,
        }),
      });
      const resjson = await res.json();
      console.log(resjson);
      if (resjson.success) {
        setUserLoans(resjson.data);
      }
    }
  };
  useEffect(() => {
    fetchLoans();
  }, [user]);
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "700",
          fontSize: "21px",
          color: "#1876d1",
          marginBottom: "24px",
        }}
      >
        Last Activities
        {console.log("userloans", userLoans)}
      </Typography>
      <List className={styles.historyList}>
        {userLoans &&
          userLoans.length &&
          userLoans.map((ul) => (
            <ListItem className={styles.historyItem}>
              <Typography>{ul.appliedAt}</Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  marginLeft: "32px",
                }}
              >
                Loan application number: {ul._id}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  marginLeft: "32px",
                }}
              >
                {ul.status}
              </Typography>
            </ListItem>
          ))}
        <ListItem className={styles.historyItem}>
          <Typography>30 December</Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              marginLeft: "32px",
            }}
          >
            Loan application number:10000
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              marginLeft: "32px",
            }}
          >
            Pending....
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default History;
