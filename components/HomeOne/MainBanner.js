import React, { useEffect, useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import { getAnasayfa, getAnasayfaDilId, getAnasayfaFotoUrl, getPhotoUrl } from "../../services/homeservices/mainBanner";
import { FormattedMessage } from "react-intl";

const MainBanner = ({ photo, data }) => {
  const { rotaId, foto, baslik, aciklama } = data || {};

  const [isOpen, setOpen] = useState(false);

  const [anasayfaData, setAnasayfaData] = useState(null);
  const defaultDil = 'tr'; 
  const [dil, setDil] = useState(defaultDil);

  const fetchAnasayfaData = async (dil) => {
    const data = await getAnasayfaDilId(dil);
    if (data && data.length > 0) {
      setAnasayfaData(data[0]);
    } else {
      setAnasayfaData(null);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchAnasayfaData(storedDil);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchAnasayfaData(newDil);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);

      // Dil değişikliğini manuel olarak kontrol etmek için
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchAnasayfaData(currentDil);
        }
      }, 1000); // Her 1 saniyede bir kontrol eder

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil]);



  const [anasayfaDataFotoUrl, setAnasayfaDataFotoUrl] = useState();


  useEffect(() => {
    const fetchAnasayfaDataFotoUrl = async () => {
      const data = await getAnasayfaFotoUrl();
      if (data && data.length > 0) {
        setAnasayfaDataFotoUrl(data[0]);
      } else {
        setAnasayfaDataFotoUrl(null);
      }
    };

    fetchAnasayfaDataFotoUrl();
  }, []);

  if (!anasayfaData) return <p></p>;

  const photoUrl = getPhotoUrl();

  return (
    <>
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />
      {/* style={{ backgroundImage: `url(${photoUrl + dataDurum.photo})` }} */}
      <div className="main-banner-area" style={{
        backgroundImage: anasayfaDataFotoUrl
          ? `url(${photoUrl + anasayfaDataFotoUrl.photo})`
          : 'url("/img/home-eight/department2.jpg")'
      }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-text">

                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      <span>
                        {anasayfaData.baslik}
                      </span>
                    </span>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      <h1
                      >{anasayfaData.baslikYazi}</h1>
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      <p
                      >{anasayfaData.aciklama}</p>
                    </div>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      <Link href="https://wa.me/905394076950?text=merhaba.." target="_blank" className="default-btn">
                        <FormattedMessage
                          id="randevuAlin"
                          values={{ name }}
                        />
                      </Link>

                      {/* <div
                        onClick={() => setOpen(true)}
                        className="default-btn active popup-youtube"
                      >
                        Şimdi Oyna
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 pr-0">
                  <div className="banner-img-wrap">
                    <div
                      className="banner-img"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1200"
                    >
                      <Image
                        src={photoUrl + anasayfaData.photo} alt={photo}
                        width={663}
                        height={1033}
                      />
                    </div>


                    <div className="banner-shape">
                      <Image
                        src="/img/home-one/home-one-shape.png"
                        alt="Image"
                        width={944}
                        height={900}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="first-facility-area">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-support"></i>
                      <h3>
                        <FormattedMessage
                          id="gelismisB"
                          values={{ name }}
                        />
                      </h3>
                      <p>
                        <FormattedMessage
                          id="gelismisBaciklama"
                          values={{ name }}
                        />
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
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

                {/* <div className="shape">
                  <Image
                    src="/img/shape/shape1.png"
                    alt="Image"
                    width={165}
                    height={108}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
