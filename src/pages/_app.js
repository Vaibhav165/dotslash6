import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/context/UserContext";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  );
}
