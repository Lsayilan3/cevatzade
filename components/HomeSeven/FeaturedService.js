import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedService = () => {
  return (
    <>
      <div className="second-facility-area seven pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <Image
                  src="/img/facility-img/facility-icon4.png"
                  alt="Image"
                  width={512}
                  height={512}
                />
                <h3>Laboratory Services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <Image
                  src="/img/facility-img/facility-icon5.png"
                  alt="Image"
                  width={512}
                  height={512}
                />
                <h3>Laboratory Accreditation</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <Image
                  src="/img/facility-img/facility-icon6.png"
                  alt="Image"
                  width={512}
                  height={512}
                />
                <h3>Leading Technology</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;
