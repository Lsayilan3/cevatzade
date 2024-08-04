import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { getHizmet, getHizmetDilId } from "../../services/homeservices/hizmetlerimiz";
import { getPhotoUrl } from "../../services/homeservices/mainBanner";
import { FormattedMessage } from "react-intl";

const Services = ({name}) => {

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
    // services-area-eight pt-100 pb-70
    <>
      <div className="services-area bg pt-100 pb-70">
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
                  <span>
                    <Image
                      src={photoUrl + data.photo}
                      alt="Image"
                      width={512}
                      height={512}
                    />
                  </span>
                  <h3>{data.baslik}</h3>
                  <p>{data.aciklama}</p>

                  <Link href={`/services/details/${data.hizmetId}`}>
                    <FormattedMessage
                      id="devaminiOku"
                      values={{ name }}
                    />
                    <i className="bx bx-plus"></i>
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

export default Services;
