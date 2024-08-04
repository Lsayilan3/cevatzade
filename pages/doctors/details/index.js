import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import DoctorDetailsContant from "../../../components/Doctors/DoctorDetailsContant";

export default function Details() {


  return (
    <>
      <Navbar />
      
      <PageBanner
        pageTitle="Doctors Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors Details"
        imgClass="bg-3"
      />

      <DoctorDetailsContant  />

      <Subscribe />

      <Footer />
    </>
  );
}
