import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import SignInForm from "../components/Auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign In"
        imgClass="bg-1"
      />

      <SignInForm />

      <Subscribe />

      <Footer />
    </>
  );
}
