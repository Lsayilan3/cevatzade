import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import DoctorsStyle2 from "../../../components/Doctors/DoctorsStyle2";

export default function Doctors2() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Hekimlerimiz"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Hekimlerimiz"
        imgClass="bg-3"
      />

      <DoctorsStyle2 />

      <Footer />
    </>
  );
}
