import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import BlogWithRightSidebar from "../../../components/Blog/BlogWithRightSidebar";

export default function Blog() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Right Sidebar"
        imgClass="bg-1"
      />

      <BlogWithRightSidebar />


      <Footer />
    </>
  );
}
