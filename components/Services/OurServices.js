import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPhotoUrl } from "../../services/homeservices/mainBanner";
import { getHizmet, getHizmetDilId } from "../../services/homeservices/hizmetlerimiz";
import { FormattedMessage } from "react-intl";

const OurServices = ({ name }) => {

  const [data, setData] = useState([]);
  const defaultDil = 'tr'; // Varsayılan dil değeri
  const [dil, setDil] = useState(defaultDil);

  const fetchData = async (selectedDil) => {
    try {
      const response = await getHizmetDilId(selectedDil);
      // Verileri sıralayarak ve sira değeri 0 olanları filtreleyerek ayarlayın
      const sortedData = (response || [])
        .filter(item => item.sira !== 0)
        .sort((a, b) => a.sira - b.sira);
      setData(sortedData);
    } catch (error) {
      console.error("Hizmet get api hatası", error);
      setData([]);
    }
  };

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
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">
              <FormattedMessage
                id="hizmetlerimiz"
                values={{ name }}
              />
            </span>
            <h2>
              <FormattedMessage
                id="disHizmetlerimiz"
                values={{ name }}
              />
            </h2>
            <p>
              <FormattedMessage
                id="disHizmetlerimizA"
                values={{ name }}
              />
            </p>
          </div>

          <div className="row">
            {data.map((data, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <div className="single-services">
                  <span className="flaticon-man"></span>
                  <h3>{data.baslik}</h3>
                  <p>{data.aciklama}</p>

                  <Link href={`/services/details/${data.hizmetId}`} className="read-more">
                    <FormattedMessage
                      id="devaminiOku"
                      values={{ name }}
                    /> <i className="bx bx-plus"></i>
                  </Link>

                  <div className="services-shape">
                    <Image
                      src="/img/services-card-shape.png"
                      alt="Image"
                      width={252}
                      height={223}
                    />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
