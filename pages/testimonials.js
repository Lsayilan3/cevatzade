import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import TestimonialsContent from "../components/Testimonials/TestimonialsContent";

export default function Testimonials() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        imgClass="bg-3"
      />

      <TestimonialsContent />

      <Subscribe />

      <Footer />
    </>
  );
}
