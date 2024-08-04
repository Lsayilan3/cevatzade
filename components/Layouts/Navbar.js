import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";
import Image from "next/image";
import Greeting from "../Greeting";
import { FormattedMessage } from "react-intl";

const Navbar = ({ name }) => {

  const [selectedLocale, setSelectedLocale] = useState('tr'); 

  useEffect(() => {
    if (typeof window !== 'undefined') { // Tarayıcı ortamında olup olmadığını kontrol edin
      const locale = localStorage.getItem('Dil');
      if (locale === '2') {
        setSelectedLocale('en');
      } else {
        setSelectedLocale('tr');
      }
    }
  }, []);

  const handleChangeLocale = (newLocale) => {
    localStorage.setItem('Dil', newLocale === 'en' ? '2' : '1');
    window.dispatchEvent(new Event('storage'));
    setSelectedLocale(newLocale);
  };

  const getButtonText = () => {
    return selectedLocale === 'en' ? 'English' : 'Türkçe';
  };


  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        <TopHeader />

        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link href="/" className="navbar-brand">
                    {/* <Image
                      src="/img/logo.png"
                      alt="logo"
                      width={130}
                      height={38}
                    /> */}
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">

                        <Link
                          href="/"
                          className={`nav-link ${currentPath == "/" && "active"
                            }`}
                        >
                          <FormattedMessage
                            id="anasayfa"
                            values={{ name }}
                          />
                        </Link>


                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${currentPath == "/about/" && "active"
                            }`}
                        >
                          <FormattedMessage
                            id="hakkimizda"
                            values={{ name }}
                          />
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          <FormattedMessage
                            id="sayfalar"
                            values={{ name }}
                          />
                        </Link>

                        <ul className="dropdown-menu">

                          <li className="nav-item">
                            <Link
                              href="/appointment/"
                              className={`nav-link ${currentPath == "/appointment/" && "active"
                                }`}
                            >
                              <FormattedMessage
                                id="randevu"
                                values={{ name }}
                              />
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/privacy-policy/"
                              className={`nav-link ${currentPath == "/privacy-policy/" && "active"
                                }`}
                            >
                              <FormattedMessage
                                id="gizlilik"
                                values={{ name }}
                              />
                            </Link>
                          </li>


                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services/2/"
                          className={`nav-link ${currentPath == "/services/2/" && "active"
                            }`}
                        >
                          <FormattedMessage
                            id="hizmetlerimiz"
                            values={{ name }}
                          />
                          {/* <i className="bx bx-plus"></i> */}
                        </Link>

                      </li>

                      <li className="nav-item">
                        <Link
                          href="/doctors/2/"
                          className={`nav-link ${currentPath == "/doctors/2/" && "active"
                            }`}
                        >
                          <FormattedMessage
                            id="hekimlerimiz"
                            values={{ name }}
                          />
                          {/* <i className="bx bx-plus"></i> */}
                        </Link>

                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${currentPath == "/blog/" && "active"
                            }`}
                        >
                          Blog
                        </Link>


                      </li>

                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          className={`nav-link ${currentPath == "/contact/" && "active"
                            }`}
                        >
                          <FormattedMessage
                            id="iletisim"
                            values={{ name }}
                          />
                        </Link>

                      </li>


                      {/* DİL  */}

                      <li className="nav-item">
                        <a
                          style={{cursor:"pointer"}}
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          <i  className="fa-regular fa-font-awesome flag-icon"></i>
                          {getButtonText()}
                        </a>

                        <ul className="dropdown-menu">

                          <li className="nav-item">
                            <a style={{cursor:"pointer"}}
                              className={`nav-link  ${selectedLocale === 'tr' ? 'selected' : ''}`}
                              onClick={() => handleChangeLocale('tr')}
                            >
                              Türkçe
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              style={{cursor:"pointer"}}
                              className={`nav-link ${selectedLocale === 'en' ? 'selected' : ''}`}
                              onClick={() => handleChangeLocale('en')}
                            >
                              
                              English
                            </a>
                          </li>
                        </ul>
                      </li>


                    </ul>
                  </div>

                  {/* <div className="others-option">
                    <div className="subscribe">
                      <Link href="/contact" className="default-btn">
                         Teklif Al
                      </Link>
                    </div>
                  </div> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
