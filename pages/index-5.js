import React from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import MainBanner from "../components/HomeFive/MainBanner";
import SearchForm from "../components/HomeFive/SearchForm";
import Facilities from "../components/HomeFive/Facilities";
import AboutUs from "../components/HomeFive/AboutUs";
import SpecialistDoctors from "../components/HomeFive/SpecialistDoctors";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import NewsStyleOne from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import FunFactStyleThree from "../components/Common/FunFactStyleThree";

export default function Home5() {
  return (
    <>
      <NavbarThree />

      <MainBanner />

      <SearchForm />

      <Facilities />

      <AboutUs />

      <SpecialistDoctors />

      <FunFactStyleThree />

      <DoctorsStyleOne />

      <Subscribe />

      <NewsStyleOne />

      <Footer />
    </>
  );
}
