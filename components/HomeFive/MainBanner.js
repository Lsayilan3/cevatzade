import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area-five">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-7">
                  <div className="banner-text">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      Diş Kliniği’ne! Hoş geldiniz,
                    </span>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      Emergency The World’s Wait for Find Doctor Easy Way
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua gravida. Risus commodo.
                    </p>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      <Link href="/appointment" className="default-btn">
                        Book An Appointment
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 pr-0">
                  <div className="banner-img-wrap">
                    <div
                      className="banner-img"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1200"
                    >
                      <Image
                        src="/img/home-five/home-five-banner.png"
                        alt="Image"
                        width={496}
                        height={811}
                      />
                    </div>

                    <div className="shapes">
                      <Image
                        src="/img/home-five/home-five-shape-3.png"
                        alt="Image"
                        width={321}
                        height={680}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape">
          <Image
            src="/img/home-five/home-five-shape-1.png"
            alt="Image"
            width={377}
            height={566}
          />
        </div>
        <div className="shape-2">
          <Image
            src="/img/home-five/home-five-shape-2.png"
            alt="Image"
            width={657}
            height={917}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
