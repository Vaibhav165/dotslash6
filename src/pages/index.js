import Middle from "@/components/Procedure";
import Footer from "@/components/Footer";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact/Contact";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

function Home () {
  return (
    <Head>
      <Navbar />
      <Hero />
      <Middle />
      <Contact />
      <Footer />
      <ToastContainer />
    </Head>
  );
}

export default Home;
