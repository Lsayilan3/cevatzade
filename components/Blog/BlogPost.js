import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlog, getBlogilId } from "../../services/blogservices/blogservice";
import { getPhotoUrl } from "../../services/homeservices/mainBanner";
import { FormattedMessage } from "react-intl";

const BlogPost = ({ name }) => {

  const [data, setData] = useState([]);
  const defaultDil = 'tr'; 
  const [dil, setDil] = useState(defaultDil);

  const fetchData = async (dil) => {
    try {
      const response = await getBlogilId(dil);
      setData(response || []);
    } catch (error) {
      console.log("getBlogilId get api hatası", error);
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
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">
              <FormattedMessage
                id="blogH"
                values={{ name }}
              />
            </span>
            <h2>
              <FormattedMessage
                id="blogHa"
                values={{ name }}
              />
            </h2>
            <p>
              <FormattedMessage
                id="blogHatext"
                values={{ name }}
              />
            </p>
          </div>

          <div className="row">
            {data.map((data, index) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                  <Link href={`/blog/details/${data.blogId}`}>
                    <Image
                      src={photoUrl + data.photo}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="blog-content">
                    <ul>
                      <li>
                        <a href="#">{data.aciklayan}</a>
                      </li>
                      <li>
                        <FormattedMessage
                          id="tarih"
                          values={{ name }}
                        />
                        {data.tarih}</li>
                    </ul>

                    <Link href={`/blog/details/${data.blogId}`}>
                      <h3>{data.baslik}</h3>
                    </Link>

                    <p>
                      {data.aciklama}
                    </p>
                    <Link href={`/blog/details/${data.blogId}`} className="read-more">
                      <FormattedMessage
                        id="devaminiOku"
                        values={{ name }}
                      />
                      <i className="bx bx-plus"></i>
                    </Link>
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

export default BlogPost;
