import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import BlogPost from "../../components/Blog/BlogPost";
import { FormattedMessage } from "react-intl";

export default function Blog({ name }) {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText={<FormattedMessage id="anasayfa" values={{ name }} />}
        activePageText="Blog Grid"
        imgClass="bg-2"
      />

      <BlogPost />


      <Footer />
    </>
  );
}
