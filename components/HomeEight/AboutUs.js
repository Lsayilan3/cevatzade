import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-area-seven">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Hospital Doctors Examine Patients So That They Diagnose</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do sit amet,
                  consectetur.
                </p>

                <div className="about-btn">
                  <Link href="/about" className="default-btn">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-img-1"></div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="about-img mb-30">
                        <Image
                          src="/img/home-eight/home-eight-about2.jpg"
                          alt="Image"
                          width={570}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="about-img">
                        <Image
                          src="/img/home-eight/home-eight-about3.jpg"
                          alt="Image"
                          width={570}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
