import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { getHekim, getHekimDilId } from "../../services/homeservices/hekimlerimiz";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPhotoUrl } from "../../services/homeservices/mainBanner";
import { FormattedMessage } from "react-intl";

const DoctorsStyleOne = ({name}) => {

  const router = useRouter();
  const { hekimId } = router.query;

  const [data, setData] = useState([]);
  
  const defaultDil = 'tr'; 
  const [dil, setDil] = useState(defaultDil);

  const fetchData = async (dil) => {
    try {
      const response = await getHekimDilId(dil);
      setData(response || []);
    } catch (error) {
      console.log("Hekim get api hatası", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchData(storedDil);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchData(newDil);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);

      // Dil değişikliğini manuel olarak kontrol etmek için
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchData(currentDil);
        }
      }, 1000); // Her 1 saniyede bir kontrol eder

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil]);

  const photoUrl = getPhotoUrl();

  return (
    <>
      <div className="doctors-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">
              <FormattedMessage
                id="hekimlerimiz"
                values={{ name }}
              />
            </span>
            <h2>
              <FormattedMessage
                id="uzmanHekimlerimiz"
                values={{ name }}
              />
            </h2>
            <p>
              <FormattedMessage
                id="uzmanHekimlerimizTa"
                values={{ name }}
              />
            </p>
          </div>

          <div className="row justify-content-center">
            {data.map((data, index) => (
              <div key={index} style={{ cursor: "pointer" }} className="col-lg-4 col-sm-6">

                <div className="single-doctors-two">

                  <div className="doctor-img">
                    <Image
                      src={photoUrl + data.photo}
                      alt="Image"
                      width={570}
                      height={600}
                    />
                    <ul className="doctors-link">
                      <li>
                        <a href={data.sosyalFace} target="_blank" rel="noopener noreferrer">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href={data.sosyalTwitter} target="_blank" rel="noopener noreferrer">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={data.sosyalingstagram} target="_blank" rel="noopener noreferrer">
                          <i className="bx bxl-pinterest-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href={data.sosyalMail} target="_blank" rel="noopener noreferrer">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Link href={`/doctors/details/${data.hekimId}`}>
                    <div className="doctors-content">
                      <h3>{data.ad}</h3>
                      <span>{data.uzmanlik}</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsStyleOne;
