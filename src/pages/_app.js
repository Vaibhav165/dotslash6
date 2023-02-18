import "@/styles/globals.css";
import { Provider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    // <Provider session={pageProps.session}>
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>

    // </Provider>
  );
}
