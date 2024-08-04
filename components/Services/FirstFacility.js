import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const FirstFacility = ({ name }) => {
  return (
    <>
      <div className="first-facility-area services-page-one mt-0 mb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-care"></i>
                <h3>
                  <FormattedMessage
                    id="gelismisB"
                    values={{ name }}
                  /></h3>
                <p>
                  <FormattedMessage
                    id="gelismisBaciklama"
                    values={{ name }}
                  />
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-online-learning"></i>
                <h3>
                  <FormattedMessage
                    id="cevrimiciD"
                    values={{ name }}
                  />
                </h3>
                <p>
                  <FormattedMessage
                    id="cevrimiciDaciklama"
                    values={{ name }}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="shape">
            <Image
              src="/img/shape/shape1.png"
              alt="Image"
              width={165}
              height={108}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstFacility;
