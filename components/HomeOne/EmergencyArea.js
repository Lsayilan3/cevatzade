import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getDurums, getDurumsDilId } from "../../services/homeservices/emergencyArea";
import { getPhotoUrl } from "../../services/homeservices/mainBanner";
import { FormattedMessage } from "react-intl";

const EmergencyArea = ({ name }) => {

  const [dataDurum, setDataDurum] = useState([]);
  
  const defaultDil = 'tr'; 
  const [dil, setDil] = useState(defaultDil);

  const fetchDurumData = async (dil) => {
    const data = await getDurumsDilId(dil);
    if (data && data.length > 0) {
      setDataDurum(data[0]);
    } else {
      setDataDurum(null);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchDurumData(storedDil);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchDurumData(newDil);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);

      // Dil değişikliğini manuel olarak kontrol etmek için
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchDurumData(currentDil);
        }
      }, 1000); // Her 1 saniyede bir kontrol eder

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil]);

  if (!dataDurum) return <p></p>;

  const photoUrl = getPhotoUrl();

  return (
    <>
      <div className="emergency-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="emergency-content ptb-100">
                <h2>{dataDurum.baslik}</h2>
                <p>{dataDurum.paragrafOne}</p>

                <p>{dataDurum.paragrafTwo}</p>

                <ul>
                  <li className="active">
                    <i className="bx bx-phone-call"></i>
                    <span>
                      <FormattedMessage
                        id="simdiAra"
                        values={{ name }}
                      />
                    </span>
                    <h3>
                      <a href="tel:0384 333 09 09">0384 333 09 09</a>
                    </h3>
                  </li>

                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>
                    <FormattedMessage
                        id="mailGonder"
                        values={{ name }}
                      />
                    </span>
                    <h3>
                      <a href="mailto:cevatzadef@gmail.com">cevatzadef@gmail.com</a>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="emergency-img" style={{ backgroundImage: `url(${photoUrl + dataDurum.photo})` }}></div>
            </div>
          </div>
        </div>
        <div className="shape">
          <Image
            src="/img/shape/counter-shape.png"
            alt="Image"
            width={366}
            height={335}
          />
        </div>
      </div>
    </>
  );
};

export default EmergencyArea;
