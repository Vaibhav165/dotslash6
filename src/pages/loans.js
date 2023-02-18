import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import LoanDetails from "/src/components/LoanDetails";

function Loans() {
  const [loans, setLoans] = useState();
  const fetchAllLoans = async () => {
    const res = await fetch("/api/getLoans", {
      method: "GET",
    });
    const resjson = await res.json();
    console.log(resjson);
    setLoans(resjson.data);
  };
  const loansByStatus = async () => {
    const res = await fetch("/api/getLoanByStatus", {
      method: "POST",
      body: JSON.stringify({
        status: "new",
      }),
    });
    const resjson = await res.json();
    setLoans(resjson.data);
  };
  useEffect(() => {
    // fetchAllLoans();
    loansByStatus();
  }, []);
  return (
    <div>
      <Typography variant="h4">Loans</Typography>
      {loans && loans.map((loan) => <LoanDetails loan={loan} />)}
    </div>
  );
}

export default Loans;
