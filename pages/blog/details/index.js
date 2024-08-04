import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";

export default function Details() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Bilgi Makalesi"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Blog Detayı"
        imgClass="bg-3"
      />

      <BlogDetailsContent />


      <Footer />
    </>
  );
}
