import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import AboutCorona from "../components/AboutUs/AboutCorona";
import FreeMedicalCamp from "../components/AboutUs/FreeMedicalCamp";
import { FormattedMessage } from "react-intl";

export default function About({name}) {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={<FormattedMessage id="hakkimizda" values={{ name }} />}
        homePageUrl="/"
        homePageText={<FormattedMessage id="anasayfa" values={{ name }} />}
        activePageText={<FormattedMessage id="hakkimizda" values={{ name }} />}
        imgClass="bg-1"
      />

      <AboutUsContent />

      <Footer />
    </>
  );
}
