import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import OurServices from "../../../components/Services/OurServices";
import FirstFacility from "../../../components/Services/FirstFacility";
import SecondFacility from "../../../components/Services/SecondFacility";
import { FormattedMessage } from "react-intl";

export default function Services2({name}) {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={<FormattedMessage id="hizmetlerimiz" values={{ name }} />}
        homePageUrl="/"
        homePageText={<FormattedMessage id="anasayfa" values={{ name }} />}
        activePageText={<FormattedMessage id="hizmetlerimiz" values={{ name }} />}
        imgClass="bg-3"
      />

      <OurServices />

      <SecondFacility />

      <div className="pt-70 pb-100">
        <FirstFacility />
      </div>

      <Footer />
    </>
  );
}
