import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/ContactUs/ContactInfo";
import ContactForm from "../components/ContactUs/ContactForm";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import { FormattedMessage } from "react-intl";

export default function Contact({ name }) {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={<FormattedMessage id="iletisim" values={{ name }} />}
        homePageUrl="/"
        homePageText={<FormattedMessage id="anasayfa" values={{ name }} />}
        activePageText={<FormattedMessage id="iletisim" values={{ name }} />}
        imgClass="bg-1"
      />

      <ContactInfo />

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
