import React from "react";
import NavbarFive from "../components/Layouts/NavbarFive";
import MainBanner from "../components/HomeSix/MainBanner";
import FeaturedService from "../components/HomeSix/FeaturedService";
import OurMission from "../components/HomeSix/OurMission";
import UpcomingCampaign from "../components/HomeSix/UpcomingCampaign";
import BestService from "../components/HomeSix/BestService";
import DoctorsStyleThree from "../components/Common/DoctorsStyleThree";
import AboutUs from "../components/HomeSix/AboutUs";
import AppointmentForm from "../components/HomeSix/AppointmentForm";
import NewsStyleOne from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";

export default function Home6() {
  return (
    <>
      <NavbarFive />

      <MainBanner />

      <FeaturedService />

      <OurMission />

      <UpcomingCampaign />

      <BestService />

      <DoctorsStyleThree />

      <AboutUs />

      <AppointmentForm />

      <NewsStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
}
