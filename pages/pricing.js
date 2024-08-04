import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import PricingTable from "../components/Pricing/PricingTable";

export default function Pricing() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
        imgClass="bg-2"
      />

      <PricingTable />

      <Subscribe />

      <Footer />
    </>
  );
}
