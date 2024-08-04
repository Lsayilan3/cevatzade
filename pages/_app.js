import React, { useEffect, useState } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/meanmenu.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/bundle";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";
import Greeting from "../components/Greeting"; // Greeting bileşenini doğru bir yolla içe aktarın

import enMessages from '../components/locales/en/en.json';
import trMessages from '../components/locales/tr/tr.json';
import { IntlProvider } from "react-intl";
import Navbar from "../components/Layouts/Navbar";

const messages = {
  en: enMessages,
  tr: trMessages,
};

export default function App({ Component, pageProps }) {
  const [locale, setLocale] = useState('tr');

  useEffect(() => {
    const handleStorageChange = () => {
      const savedLocale = localStorage.getItem('Dil');
      setLocale(savedLocale === '2' ? 'en' : 'tr');
    };

    window.addEventListener('storage', handleStorageChange);

    // Initialize locale from localStorage
    handleStorageChange();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Cevatzade - Dental Clinic</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <IntlProvider locale={locale} messages={messages[locale]}>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <Component {...pageProps} />
        </div>
      </IntlProvider>

      {showWhatsApp && (
        <a
          id="wp"
          href="https://wa.me/905394076950?text=merhaba.."
          target="_blank"
          className="wayra-coc-floating-button wayra-coc-floating-style2"
        >
          <i
            className="fa-brands fa-whatsapp"
            style={{ fontSize: 38, color: "white", overflow: "hidden" }}
          ></i>
        </a>
      )}

      <GoTop />
    </>
  );
}
