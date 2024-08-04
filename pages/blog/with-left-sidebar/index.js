import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import BlogWithLeftSidebar from "../../../components/Blog/BlogWithLeftSidebar";

export default function Blog() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Left Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Left Sidebar"
        imgClass="bg-3"
      />

      <BlogWithLeftSidebar />


      <Footer />
    </>
  );
}
