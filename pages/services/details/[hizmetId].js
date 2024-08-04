import React from "react";
import { useRouter } from "next/router";
import Navbar from '../../../components/Layouts/Navbar'
import ServiceDetailsContent from '../../../components/Services/ServiceDetailsContent'
import Footer from "../../../components/Layouts/Footer";
import PageBanner from "../../../components/Common/PageBanner";

export default function Details() {
    const router = useRouter();
    const { hizmetId } = router.query; 
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Hizmet Detayı"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Hizmet Detayı"
        imgClass="bg-1"
      />

      <ServiceDetailsContent hizmetId={hizmetId}  />

      <Footer />
    </>
  );
}


