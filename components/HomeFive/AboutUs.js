import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src="/img/home-five/home-five-about1.jpg"
                  alt="Image"
                  width={635}
                  height={555}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About Us</span>
                <h2>We are trusted The Best Certificate Healthcare</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Scientific skills for getting a better result
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>A good environment for work
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Professional doctors
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Emergency services
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Digital laboratory
                  </li>
                </ul>

                <Link href="/about" className="default-btn">
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
