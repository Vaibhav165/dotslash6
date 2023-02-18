import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

function auth() {
  const [loading, setLoading] = useState(true);
  // const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        console.log(session);
        // router.replace("/");
      } else {
        console.log("no");
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return <div>auth</div>;
}

export default auth;
