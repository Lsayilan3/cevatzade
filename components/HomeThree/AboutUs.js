import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-area-three pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">COVID-19 Testing</span>
                <h2>The clinic will be testing and treating COVID-19 cases </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <h3>Criteria For testing:</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Odio magnam recusandae doloribus facere. Distinctio
                      nesciunt unde facere rerum natus eveniet nam
                    </p>
                  </li>
                  <li>
                    <h3>High-risk staff testing:</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Odio magnam recusandae doloribus facere. Distinctio
                      nesciunt unde facere rerum natus eveniet nam
                    </p>
                  </li>
                </ul>

                <Link href="/about" className="default-btn">
                  About Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img">
                <Swiper
                  navigation={true}
                  effect={"fade"}
                  modules={[Navigation, EffectFade]}
                  className="about-img-slide"
                >
                  <SwiperSlide>
                    <div className="about-item">
                      <Image
                        src="/img/home-three/home-three-about1.jpg"
                        alt="Image"
                        width={570}
                        height={600}
                      />
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className="about-item">
                      <Image
                        src="/img/home-three/home-three-about2.jpg"
                        alt="Image"
                        width={570}
                        height={600}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="shape-3">
                  <Image
                    src="/img/about/about-shape-3.png"
                    alt="Image"
                    width={185}
                    height={185}
                  />
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
