import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { getHizmetById, getHizmetDilIdDil } from "../../services/homeservices/hizmetlerimiz";

const ServiceDetailsContent = ({ hizmetId }) => {

  const [hizmetData, setHizmetData] = useState(null);
  const defaultDil = 'tr';
  const [dil, setDil] = useState(defaultDil);

  const fetchHizmetData = async (hizmetId, dil) => {
    const data = await getHizmetDilIdDil(hizmetId, dil);
    if (data && data.length > 0) {
      setHizmetData(data[0]);
    } else {
      setHizmetData(null);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchHizmetData(hizmetId, storedDil);
    }
  }, [hizmetId]); // hizmetId'yi dependency olarak ekleyin
  
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchHizmetData(hizmetId, newDil);
      }
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
  
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchHizmetData(hizmetId, currentDil);
        }
      }, 1000);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil, hizmetId]);


  if (!hizmetData) return <p>Loading...</p>; 
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
           
         
          </div>

          <div className="services-details-text">
          <span dangerouslySetInnerHTML={{ __html: hizmetData.editor }}></span>
          </div>

        
          <div className="scrives-item-3 mt-4">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="social">
                  <ul className="social-link">
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
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
