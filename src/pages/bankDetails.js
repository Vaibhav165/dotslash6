import { TextField, Card, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import styles from "../styles/Auth.module.css";
import { useSession } from "next-auth/react";
import useToast from "/src/Hooks/useToast";
import UserContext from "@/context/UserContext";

const bankDetails = () => {
  const notify = useToast();
  const { user, setUser } = useContext(UserContext);
  //   console.log(user);
  const router = useRouter();
  const [formData, setFormData] = useState({
    holderName: "",
    accountNumber: "",
    IFC: "",
    bankName: "",
    salary: "",
    pdfFile: null,
  });
  const { data: session } = useSession();
  // for signin and signup card
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.IFC &&
      formData.accountNumber &&
      formData.holderName &&
      formData.bankName
    ) {
      console.log(formData);
      const res = await fetch("/api/bankDetails", {
        method: "Post",
        body: JSON.stringify({
          email: session.user.email,
          bankInfo: {
            accountNumber: formData.accountNumber,
            holderName: formData.holderName,
            bankName: formData.bankName,
            salary: formData.salary,
            ifsc: formData.IFC,
          },
        }),
      });
      const resjson = await res.json();
      console.log(resjson);
      if (resjson.success) {
        notify("success", "Bank details verified");
      } else {
        notify("error", resjson.message);
      }
      const salary = formData.salary;
      const resp = await fetch("/api/cibilscore", {
        method: "POST",
        body: JSON.stringify({
          salary: salary,
          balance: salary * 2,
          email: session.user.email,
        }),
      });
      const respjson = await resp.json();
      console.log(respjson);
      if (resjson.status) {
        notify("info", resjson.data.cibil);
        router.push("/profile");
      }

      //   router.push("/loanDetails");
    }
    // if (!(formData.pdfFile && formData.pdfFile.type === "application/pdf")) {
    //   alert("Please select a PDF file.");
    // }
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
          <Typography alignItems="center">Bank Details</Typography>
          <TextField
            placeholder="Account Number"
            value={
              formData.accountNumber
                ? formData.accountNumber
                : user?.bankInfo?.accountNumber
            }
            name="accountNumber"
            onChange={handleChange}
            className={styles.textFields}
          />

          <TextField
            placeholder="IFC"
            value={formData.IFC ? formData.IFC : user?.bankInfo?.ifc}
            name="IFC"
            onChange={handleChange}
            className={styles.textFields}
          />

          <TextField
            placeholder="Bank Name"
            value={
              formData.bankName ? formData.bankName : user?.bankInfo?.bankName
            }
            name="bankName"
            onChange={handleChange}
            className={styles.textFields}
          />

          <TextField
            placeholder="Holder Name"
            value={
              formData.holderName
                ? formData.holderName
                : user?.bankInfo?.holderName
            }
            name="holderName"
            onChange={handleChange}
            className={styles.textFields}
          />

          <TextField
            placeholder="Salary in numbers"
            value={formData.salary ? formData.salary : user?.bankInfo?.salary}
            name="salary"
            onChange={handleChange}
            className={styles.textFields}
            type="number"
          />

          <label htmlFor="pdf-file-input">Select a salary slip:</label>
          <input
            id="pdf-file-input"
            type="file"
            accept=".pdf"
            onChange={handleChange}
            name="pdfFile"
          />
          {/* only if signup is succssful then only */}
          {/* <Link href="/loanDetails"> */}
          <Button type="submit">Submit</Button>
          {/* </Link> */}
        </Card>
      </form>
    </>
  );
};

export default bankDetails;
