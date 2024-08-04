import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomeFour/MainBanner";
import AboutUs from "../components/HomeFour/AboutUs";
import OurMission from "../components/HomeFour/OurMission";
import VaccinationSchedule from "../components/HomeFour/VaccinationSchedule";
import OurDoctors from "../components/HomeFour/OurDoctors";
import NewsStyleOne from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";

export default function Home4() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <AboutUs />

      <OurMission />

      <VaccinationSchedule />

      <OurDoctors />

      <NewsStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
}
