import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import RecoverPasswordForm from "../components/Auth/RecoverPasswordForm";

export default function RecoverPassword() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Recover Password!"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Recover Password!"
        imgClass="bg-3"
      />

      <RecoverPasswordForm />

      <Subscribe />

      <Footer />
    </>
  );
};
