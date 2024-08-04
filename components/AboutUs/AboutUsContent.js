import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAbout } from "../../services/aboutservices/aboutservice";
import { getPhotoUrl } from "../../services/homeservices/mainBanner";
import { FormattedMessage } from "react-intl";

const AboutUsContent = ({ name }) => {

  const [dataHakkimizda, setDataHakkimizde] = useState([]);

  useEffect(() => {
    const fetchDurumData = async () => {
      const data = await getAbout();
      if (data && data.length > 0) {
        setDataHakkimizde(data[0]);
      } else {
        setDataHakkimizde(null);
      }
      console.log(data);
    };

    fetchDurumData();
  }, []);

  if (!dataHakkimizda) return <p></p>;

  const photoUrl = getPhotoUrl();

  return (
    <>
      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src="/img/about/about1.jpg"
                  alt="Image"
                  width={570}
                  height={604}
                />

                <div className="shape-1">
                  <Image
                    src="/img/about/about-shape-1.png"
                    alt="Image"
                    width={570}
                    height={605}
                  />
                </div>

                <div className="shape-2">
                  <Image
                    src="/img/about/about-shape-2.png"
                    alt="Image"
                    width={289}
                    height={610}
                  />
                </div>

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

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">
                  <FormattedMessage
                    id="hakkimizda"
                    values={{ name }}
                  />
                </span>
                <h2>
                  <FormattedMessage
                    id="hakkimizdaB"
                    values={{ name }}
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="hakkimizdaBa"
                    values={{ name }}
                  />
                </p>

                <ul>
                  <li>
                  <i className="flaticon-tick"></i>
                    <FormattedMessage
                      id="hakkimizdaBbir"
                      values={{ name }}
                    />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    <FormattedMessage
                      id="hakkimizdaBiki"
                      values={{ name }}
                    />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    <FormattedMessage
                    id="hakkimizdaBuc"
                    values={{ name }}
                  />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    <FormattedMessage
                    id="hakkimizdaBdort"
                    values={{ name }}
                  />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    <FormattedMessage
                    id="hakkimizdaBbes"
                    values={{ name }}
                  />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="terms-conditions ptb-100">
        <div className="container">
          <div className="single-privacy">
            <div className="services-details-text">
              <span dangerouslySetInnerHTML={{ __html: dataHakkimizda.editor }}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
