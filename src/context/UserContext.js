import { createContext, useState, useEffect, useContext } from "react";
import { useSession } from "next-auth/react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { data: session } = useSession();
  const fetchUserByEmail = async () => {
    const res = await fetch("/api/getUserByEmail", {
      method: "POST",
      body: JSON.stringify({
        email: session.user.email,
      }),
    });
    const resjson = await res.json();
    console.log(resjson);
    // if (resjson.success) {
    setUser(resjson.data);
    // }
  };
  const fetchUser = async () => {
    const res = await fetch("/api/users", {
      method: "GET",
    });
    const resjson = await res.json();
    console.log(resjson);
    resjson.data.map((user) => {
      if (user.email === session.user.email) {
        setUser(user);
      }
    });
  };
  useEffect(() => {
    if (session && !user) {
      console.log(session);
      fetchUserByEmail();
      // fetchUser();
    }
  }, [session]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
