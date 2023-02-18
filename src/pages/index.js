import Middle from "@/components/Procedure";
import Footer from "@/components/Footer";
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact/Contact";

function Home() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <div>
      <Navbar />
      <Hero />
      <Middle />
      <Contact />
      <Footer />
    </div>
    // </Suspense>

    // <Head>

    // </Head>
  );
}

export default Home;
