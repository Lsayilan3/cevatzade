import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import SignUpForm from "../components/Auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign Up"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign Up"
        imgClass="bg-2"
      />

      <SignUpForm />

      <Subscribe />

      <Footer />
    </>
  );
}
