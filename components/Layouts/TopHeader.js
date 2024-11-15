import React from "react";
import { FormattedMessage } from "react-intl";

const TopHeader = ({ name }) => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9 col-sm-6">
              <ul className="header-content-left">
                <li>
                  <i className="bx bx-time"></i>
                  <FormattedMessage
                    id="gunn"
                    values={{ name }}
                  />
                </li>
                <li>
                  <a href="tel:+822456974">
                    <i className="bx bx-phone-call"></i>
                    <FormattedMessage
                      id="telH"
                      values={{ name }}
                    /> 0384 333 09 09
                  </a>
                </li>
                <li>
                  <a href="mailto:cevatzadef@gmail.com">
                    <i className="bx bxs-paper-plane"></i>
                    Email: cevatzadef@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <ul className="header-content-right">
                <li>
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
                  <a href="https://www.pinterest.com/" target="_blank">
                    <i className="bx bxl-pinterest-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dt_arzucevatzade?igsh=MWxuNmZ4NzFnaXdtNw==" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
