import React from "react";
import { FormattedMessage } from "react-intl";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-12 p-0">
              <div className="single-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.681100561093!2d34.73306312143724!3d38.655690020745375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6f0c7a80930f%3A0x11ac131a4c55a903!2zUmFnxLFwIMOcbmVyLCBWZWZhIEvDvMOnw7xrIENkLiBObzoxMjgsIDUwMzAwIE5ldsWfZWhpciBNZXJrZXovTmV2xZ9laGly!5e0!3m2!1str!2str!4v1718787493923!5m2!1str!2str"></iframe>
              </div>
            </div>

            <div className="col-lg-12 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Nevşehir/Merkez</h3>
                <p>15 Temmuz mah., Vefa Küçük Cd. No:128/A, 50100 </p>
                <span>Email: cevatzadef@gmail.com</span>
                <span>
                  <FormattedMessage
                    id="contactIsyeri"
                    values={{ name }}
                  />
                  0384 333 09 09</span>
                <span>
                  <FormattedMessage
                    id="mobil"
                    values={{ name }}
                  />
                  0539 407 69 50</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;