import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const TestimonialStyleOne = () => {
  return (
    <>
      <div className="client-area c-bg pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Görüşler</span>
            <h2>Müşterimiz Ne Diyor?</h2>
            <p>
            Diş kliniğimizde sağladığımız hizmetlerin kalitesi hakkında müşterilerimizin görüşlerine yer veriyoruz. 
            Aşağıda, tedavi süreçlerimizle ilgili gerçek müşteri yorumlarını bulabilirsiniz.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="client-slide"
          >
            <SwiperSlide>
              <div className="single-client">
                <Image
                  src="/img/client/client1.jpg"
                  alt="img"
                  width={60}
                  height={60}
                />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem Ipsum is simply dummy text of the printing and Quis
                  suspendisse typesetting ipsum dolor sit amet, consectetur
                </p>

                <ul>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>

                <h3>Steven Jony</h3>
                <span>CEO of Company</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-client">
                <Image
                  src="/img/client/client2.jpg"
                  alt="img"
                  width={60}
                  height={60}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem Ipsum is simply dummy text of the printing and Quis
                  suspendisse typesetting ipsum dolor sit amet, consectetur
                </p>

                <ul>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>

                <h3>Omit Jacson</h3>
                <span>Supervisor</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-client">
                <Image
                  src="/img/client/client3.jpg"
                  alt="img"
                  width={60}
                  height={60}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem Ipsum is simply dummy text of the printing and Quis
                  suspendisse typesetting ipsum dolor sit amet, consectetur
                </p>

                <ul>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>

                <h3>Johnson</h3>
                <span>Team Leader</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleOne;
