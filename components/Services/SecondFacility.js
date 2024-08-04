import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const SecondFacility = ({ name }) => {
  return (
    <>
      <div className="second-facility-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <Image
                  src="/img/facility-img/facility-icon6.png"
                  alt="Image"
                  width={512}
                  height={512}
                />
                <h3>
                  <FormattedMessage
                    id="ulasilabilir"
                    values={{ name }}
                  />
                </h3>
                <p>
                  <FormattedMessage
                    id="ulasilabilirA"
                    values={{ name }}
                  />
                </p>


              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <Image
                  src="/img/facility-img/facility-icon1.png"
                  alt="Image"
                  width={512}
                  height={512}
                />
                <h3>
                  <FormattedMessage
                    id="vizyonlu"
                    values={{ name }}
                  />
                </h3>
                <p>
                  <FormattedMessage
                    id="vizyonluA"
                    values={{ name }}
                  />
                </p>

              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <Image
                  src="/img/facility-img/facility-icon3.png"
                  alt="Image"
                  width={512}
                  height={512}
                />
                <h3>
                  <FormattedMessage
                    id="liderT"
                    values={{ name }}
                  />
                </h3>
                <p>
                  <FormattedMessage
                    id="liderTa"
                    values={{ name }}
                  />
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondFacility;
