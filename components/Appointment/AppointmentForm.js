import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Image from "next/image";
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import tr from 'date-fns/locale/tr';
import { getHizmet } from "../../services/homeservices/hizmetlerimiz";
import { postRandevu } from "../../services/randevuservices/randevuservice";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from 'moment';
import { FormattedMessage } from "react-intl";

registerLocale('tr', tr);

const AppointmentForm = ({ name }) => {
  const [startDate, setStartDate] = useState(new Date());

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getHizmet();
      const sortedData = (response || []);
      setData(sortedData);
    } catch (error) {
      console.log("Hizmet get api hatası", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    ad: Yup.string().required("Adınız zorunludur"),
    soyad: Yup.string().required("Soyadınız zorunludur"),
    tel: Yup.number().typeError("Geçerli bir telefon numarası giriniz").required("Telefon numarası zorunludur").positive("Telefon numarası geçerli olmalıdır").integer("Telefon numarası geçerli olmalıdır"),
    hizmetlerimizId: Yup.number().required("Hizmet seçimi zorunludur").min(1, "Geçerli bir hizmet seçiniz"),
    tarih: Yup.date().required("Randevu tarihi ve saati zorunludur").min(new Date(), "Geçmiş bir tarih seçemezsiniz"),
    mesaj: Yup.string().optional()
  });

  const formik = useFormik({
    initialValues: {
      ad: '',
      soyad: '',
      tel: 0,
      hizmetlerimizId: 0,
      tarih: new Date(),
      mesaj: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const formattedValues = {
          ...values,
          tarih: moment(values.tarih).format('YYYY-MM-DDTHH:mm:ss')
        };
        const result = await postRandevu(formattedValues);
        console.log('API yanıtı:', result);
        formik.resetForm();
        toast.success('Randevu talebiniz başarıyla alındı. En kısa zamanda size geri dönüş yapacağız!', {
          autoClose: 10000
        });
      } catch (error) {
        console.error('API hatası:', error);
        toast.error('Randevu gönderilirken bir hata oluştu.', {
          autoClose: 10000
        });
      }
    }
  });

  return (
    <>
      <ToastContainer />
      <div className="appointment-area ptb-50 jarallax">
        <div className="container">
          <div className="appointment-here-form m-auto">
            <span className="top-title">
              <FormattedMessage
                id="randevuAlin"
                values={{ name }}
              />
            </span>
            <h2>
              <FormattedMessage
                id="randevuAlinA"
                values={{ name }}
              />
            </h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <label>
                    <FormattedMessage
                      id="adiniz"
                      values={{ name }}
                    />
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Ad"
                      name="ad"
                      placeholder="Adınızı giriniz"
                      value={formik.values.ad}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.ad && formik.errors.ad ? (
                      <div className="error">{formik.errors.ad}</div>
                    ) : null}
                    <i className="flaticon-account"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>
                    <FormattedMessage
                      id="soyadiniz"
                      values={{ name }}
                    />
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Soyad"
                      name="soyad"
                      placeholder="Soyadınızı giriniz"
                      value={formik.values.soyad}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.soyad && formik.errors.soyad ? (
                      <div className="error">{formik.errors.soyad}</div>
                    ) : null}
                    <i className="flaticon-account"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>
                    <FormattedMessage
                      id="telefonununuz"
                      values={{ name }}
                    />
                  </label>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="Tel"
                      name="tel"
                      placeholder="Telefonunuzu giriniz"
                      value={formik.values.tel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.tel && formik.errors.tel ? (
                      <div className="error">{formik.errors.tel}</div>
                    ) : null}
                    <i className="flaticon-smartphone"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>
                    <FormattedMessage
                      id="hizmetSecin"
                      values={{ name }}
                    />
                  </label>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="hizmetlerimizId"
                      value={formik.values.hizmetlerimizId}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="0">Hizmet Seçin</option>
                      {data.map(item => (
                        <option key={item.hizmetId} value={item.hizmetId}>
                          {item.baslik}
                        </option>
                      ))}
                    </select>
                    {formik.touched.hizmetlerimizId && formik.errors.hizmetlerimizId ? (
                      <div className="error">{formik.errors.hizmetlerimizId}</div>
                    ) : null}
                    <i className="flaticon-heart"></i>
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <label>
                    <FormattedMessage
                      id="randevuTarih"
                      values={{ name }}
                    />
                  </label>
                  <div className="form-group">
                    <div className="input-group date">
                      <DatePicker
                        selected={formik.values.tarih}
                        onChange={date => formik.setFieldValue("tarih", date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Zaman"
                        dateFormat="dd MMMM yyyy, HH:mm"
                        locale="tr"
                        className="form-control"
                      />

                      {formik.touched.tarih && formik.errors.tarih ? (
                        <div className="error">{formik.errors.tarih}</div>
                      ) : null}
                    </div>
                    <i className="flaticon-appointment"></i>
                  </div>
                </div>

                <div className="col-lg-12">
                  <label>
                    <FormattedMessage
                      id="mesaj"
                      values={{ name }}
                    />
                  </label>
                  <div className="form-group">
                    <textarea
                      name="mesaj"
                      className="form-control"
                      id="Mesaj"
                      cols="30"
                      rows="8"
                      placeholder="Mesajınız"
                      value={formik.values.mesaj}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.mesaj && formik.errors.mesaj ? (
                      <div className="error">{formik.errors.mesaj}</div>
                    ) : null}
                    <i className="flaticon-edit"></i>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-btn">
                    <FormattedMessage
                      id="randevuAlinA"
                      values={{ name }}
                    />
                  </button>
                </div>
              </div>
            </form>
            <div className="shape">
              <Image
                src="/img/shape/appointment-shape.png"
                alt="Image"
                width={248}
                height={214}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
