import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const Footer = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Link href="/">
                  {/* <Image
                    src="/img/logo.png"
                    alt="Image"
                    width={130}
                    height={38}
                  /> */}
                </Link>

                <p>
                  <FormattedMessage
                    id="footerA"
                    values={{ name }}
                  />
                </p>

                <div className="social-area">
                  <ul>
                    {/* <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebyoutubeook.com/"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.instagram.com/dt_arzucevatzade?igsh=MWxuNmZ4NzFnaXdtNw==dt_arzucevatzade?igsh=MWxuNmZ4NzFnaXdtNw==" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>
                  <FormattedMessage
                    id="bolumler"
                    values={{ name }}
                  />
                </h3>
                <ul>
                  <li>
                    <Link href="#">HollywoodSimile</Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FormattedMessage
                        id="periondonti"
                        values={{ name }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FormattedMessage
                        id="pedodonti"
                        values={{ name }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FormattedMessage
                        id="disIplant"
                        values={{ name }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FormattedMessage
                        id="ortodonti"
                        values={{ name }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-widget open-time"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h3>
                  <FormattedMessage
                    id="acilisS"
                    values={{ name }}
                  />
                </h3>
                <ul>
                  <li>
                    <span>
                    <FormattedMessage
                    id="gunB"
                    values={{ name }}
                  />
                    </span>
                    <span className="right">
                    <FormattedMessage
                    id="gunBs"
                    values={{ name }}
                  />
                    </span>
                  </li>
                  <li>
                    <span>
                    <FormattedMessage
                    id="gunI"
                    values={{ name }}
                  />
                    </span>
                    <span className="right">
                    <FormattedMessage
                    id="gunIs"
                    values={{ name }}
                  />
                    </span>
                  </li>
                  <li>
                    <span>
                    <FormattedMessage
                    id="gunU"
                    values={{ name }}
                  />
                    </span>
                    <span className="right">
                    <FormattedMessage
                    id="gunUs"
                    values={{ name }}
                  />
                    </span>
                  </li>
                  <li>
                    <span>
                    <FormattedMessage
                    id="gunD"
                    values={{ name }}
                  />
                    </span>
                    <span className="right">
                      <FormattedMessage
                        id="kapali"
                        values={{ name }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FormattedMessage
                        id="resmiT"
                        values={{ name }}
                      />
                    </span>
                    <span className="right">
                      <FormattedMessage
                        id="kapali"
                        values={{ name }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <h3>
                  <FormattedMessage
                    id="iletisim"
                    values={{ name }}
                  />
                </h3>
                <ul>
                  <li>
                    <a href="tel:0539 407 69 50">
                      <i className="bx bx-phone-call"></i>
                      <span>
                        <FormattedMessage
                          id="yardimH"
                          values={{ name }}
                        />
                      </span>
                      <FormattedMessage
                        id="tel"
                        values={{ name }}
                      /> 0384 333 09 09 <br />
                      <FormattedMessage
                        id="mobil"
                        values={{ name }}
                      /> 0539 407 69 50
                    </a>
                  </li>
                  <li>
                    <a href="mailto:cevatzadef@gmail.com">
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                      cevatzadef@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>
                      <FormattedMessage
                        id="adres"
                        values={{ name }}
                      />
                    </span>
                    15 Temmuz mah., Vefa Küçük Cd. No:128/A, 50100 Merkez/Nevşehir
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              <FormattedMessage
                id="telif"
                values={{ name }}
              /> &copy; {currentYear} Cevatzade Dental Clinik{" "}
              <a href="/" target="blank">
                Cevatzadental
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
