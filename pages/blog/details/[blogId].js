import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

export default function Details({ name }) {

    const router = useRouter();
    const { blogId } = router.query; 
    
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={<FormattedMessage id="bilgiMakale" values={{ name }} />}
        homePageUrl="/"
        homePageText={<FormattedMessage id="anasayfa" values={{ name }} />}
        activePageText={<FormattedMessage id="blogDetay" values={{ name }} />}
        imgClass="bg-3"
      />

      <BlogDetailsContent blogId={blogId} />


      <Footer />
    </>
  );
}
