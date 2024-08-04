import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";
import { getBlogById, getBlogDetailDilId } from "../../services/blogservices/blogservice";
import { FormattedMessage } from "react-intl";

const BlogDetailsContent = ({ blogId, name }) => {

  const [blogData, setBlogData] = useState(null)

  const defaultDil = 'tr';
  const [dil, setDil] = useState(defaultDil);

  const fetchBlogData = async (blogId, dil) => {
    const data = await getBlogDetailDilId(blogId, dil);
    if (data && data.length > 0) {
      setBlogData(data[0]);
    } else {
      setBlogData(null);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDil = localStorage.getItem('Dil') || defaultDil;
      setDil(storedDil);
      fetchBlogData(blogId, storedDil);
    }
  }, [blogId]); // hizmetId'yi dependency olarak ekleyin
  
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'Dil') {
        const newDil = event.newValue || defaultDil;
        setDil(newDil);
        fetchBlogData(blogId, newDil);
      }
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
  
      const intervalId = setInterval(() => {
        const currentDil = localStorage.getItem('Dil') || defaultDil;
        if (currentDil !== dil) {
          setDil(currentDil);
          fetchBlogData(blogId, currentDil);
        }
      }, 1000);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [dil, blogId]);

  if (!blogData) return <p>Loading...</p>;

  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">

                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>
                          {<FormattedMessage id="yayinlanan" values={{ name }} />}
                        </span> <a href="#">{blogData.tarih}</a>
                      </li>
                      <li>
                        <span>
                          {<FormattedMessage id="yazan" values={{ name }} />}
                        </span> <a href="#">{blogData.aciklayan} </a>
                      </li>
                    </ul>
                  </div>
                  <div className="services-details-text">
                    <span dangerouslySetInnerHTML={{ __html: blogData.editor }}></span>
                  </div>
                  {/* <div className="row mb-3">
                    <div className="col-lg-4 mt-4">
                      <div className="b-d-s-img">
                        <Image
                          src="/img/blog/blog4.jpg"
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                      <div className="b-d-s-img">
                        <Image
                          src="/img/blog/blog5.jpg"
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                      <div className="b-d-s-img">
                        <Image
                          src="/img/blog/blog6.jpg"
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>
                  </div> */}


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
