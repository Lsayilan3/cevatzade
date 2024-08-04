import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import DoctorDetailsContant from "../../../components/Doctors/DoctorDetailsContant";

export default function Details() {
  const router = useRouter();
  const { hekimId } = router.query; 

  return (
    <>
      <Navbar />
      
      <PageBanner
        pageTitle="Doktor Detayı"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Doktor Detayı"
        imgClass="bg-3"
      />

      <DoctorDetailsContant hekimId={hekimId} />

      <Footer />
    </>
  );
}
