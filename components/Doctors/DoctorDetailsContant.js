import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Link from "next/link";
import Image from "next/image";
import { getHekimById, getHekimDetailDilId } from "../../services/homeservices/hekimlerimiz";
import { getPhotoUrl } from "../../services/homeservices/mainBanner";

const DoctorDetailsContant = ({ hekimId }) => {
  const [startDate, setStartDate] = useState(new Date());

  const [hekimData, setHekimData] = useState(null); 

  const defaultDil = 'tr';
  const [dil, setDil] = useState(defaultDil);

  const fetchHekimData = async (hekimId, dil) => {
    const data = await getHekimDetailDilId(hekimId, dil);
    if (data && data.length > 0) {
      setHekimData(data[0]);
    } else {
      setHekimData(null);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchHekimData(hekimId, storedDil);
    }
  }, [hekimId]); // hizmetId'yi dependency olarak ekleyin
  
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchHekimData(hekimId, newDil);
      }
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
  
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchHekimData(hekimId, currentDil);
        }
      }, 1000);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil, hekimId]);

  if (!hekimData) return <p>Loading...</p>; 

  const photoUrl = getPhotoUrl();

  return (
    <>
      <div className="doctors-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="doctors-sidebar">
                <div className="doctors-img">
                  <Image
                    style={{ borderBottom: "3px solid #0cb8b6" }}
                    src={photoUrl + hekimData.photo}
                    alt="Image"
                    width={570}
                    height={600}
                  />

                  <ul>
                    <li>
                      <a href={hekimData.sosyalFace} target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={hekimData.sosyalTwitter} target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={hekimData.sosyalMail} target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href={hekimData.sosyalingstagram} target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="doctors-detailss">
                <div className="doctors-history">
                  <h2>{hekimData.ad}</h2>
                  <span>{hekimData.uzmanlik}</span>
                  <p>
                    {hekimData.aciklama}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetailsContant;
