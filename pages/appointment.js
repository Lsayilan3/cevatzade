import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import Features from "../components/Appointment/Features";
import AppointmentForm from "../components/Appointment/AppointmentForm";
import OurServices from "../components/Services/OurServices";
import SecondFacility from "../components/Services/SecondFacility";
import FirstFacility from "../components/Services/FirstFacility";

export default function Appointment() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Randevu"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Randevu"
        imgClass="bg-1"
      />

      <div className="pt-70 pb-100">
      <SecondFacility />
      </div>

      <AppointmentForm />

      <Footer />
    </>
  );
}
