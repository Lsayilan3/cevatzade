import React from "react";
import Image from "next/image";

const ForAnyHelpContactUs = () => {
  return (
    <>
      <div className="emergency-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="emergency-content ptb-100">
                <h2>Emergency? For any Help Contact Us Now</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li className="active">
                    <i className="bx bx-phone-call"></i>
                    <span>Tel</span>
                    <h3>0384 333 09 09</h3>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>Mail Us</span>
                    <h3>cevatzadef@gmail.com</h3>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="emergency-img"></div>
            </div>
          </div>
        </div>

        <div className="shape">
          <Image
            src="/img/shape/emergency-shape.png"
            alt="Image"
            width={366}
            height={335}
          />
        </div>
      </div>
    </>
  );
};

export default ForAnyHelpContactUs;
