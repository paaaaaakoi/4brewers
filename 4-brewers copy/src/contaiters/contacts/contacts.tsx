import React, { useState, useRef, useEffect } from "react";
import './contacts.scss';
import emailjs from 'emailjs-com';
import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from "../../service/keys";
import { YMaps, Map, Placemark, } from '@pbe/react-yandex-maps';
import { getCities, getPartners } from "../../service/api";
import { toast } from "react-toastify";
import { City, Partner } from "../../service/types";

const defaultUserInfo = {
  name: "",
  email: "",
  phone: "",
  city: "",
  comment: "",
  agreement: false,
};

const Contacts = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const [markers, setMarkers] = useState<Partner[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [city, setCity] = useState("");

  const fetchCities = async () => {
    try {
      setLoading(true);
      const citiesResp = await getCities();
      if (citiesResp) {
        setCities(citiesResp.data);
      }
    } catch (e) {
      toast("Ошибка загрузки списка городов!");
    } finally {
      setLoading(false);
    }
  };

  const fetchMarkers = async (city: string) => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const markersResp = await getPartners(city);
      if (markersResp) {
        setMarkers(markersResp.data);
      }
    } catch (e) {
      toast("Ошибка загрузки партеров!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarkers(city);
  }, [city]);

  useEffect(() => {
    fetchCities();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          EMAIL_JS_SERVICE_ID,
          EMAIL_JS_TEMPLATE_ID,
          form.current,
          EMAIL_JS_PUBLIC_KEY,
        )
        .then(
          () => {
            setLoading(false);
            setEmailSent(true);
            setUserInfo(defaultUserInfo);
          },
          (error) => setLoading(false),
        );
    }
  };

  return (
    <div className="contacts">
      <section className="container map-section">
        <div className="inner-p">
          <h2 className="container-title h1">Где купить</h2>
        </div>

        <div className="inner-p city-select">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={loading}
          >
            <option value={""}>Выберите город</option>
            {cities.map((city, i) => (
              <option key={`${city}-${i}`} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="map" id="map">
          <YMaps>
            <Map
              defaultState={{
                center: [55.684758, 37.738521],
                zoom: 3.2,
              }}
              style={{ width: "100%", height: 400 }}
            >
              {markers.map((marker) => (
                <Placemark
                  key={marker.partner_id}
                  geometry={[marker.lat, marker.lng]}
                  options={{ iconColor: "#246900" }}
                  properties={{
                    hintContent: `${marker.partner_name} | ${marker.adr}`,
                    balloonContent: `
                                                <h4>${
                                                  marker.web
                                                    ? `<a target="_blank" href='${marker.web}'>${marker.partner_name}</a>`
                                                    : `${marker.partner_name}`
                                                }</h4>
                                                <p style='font-size: 14px'>${
                                                  marker.adr
                                                }</p>
                                                <br/><ul>
                                                    ${
                                                      marker.vk
                                                        ? `<li><a target="_blank" href='${marker.vk}' style='text-decoration: underline; font-size: 16px'>Вконтакте</a></li>`
                                                        : ""
                                                    }
                                                    ${
                                                      marker.inst
                                                        ? `<li><a target="_blank" href='${marker.inst}' style='text-decoration: underline; font-size: 16px'>Instagram</a></li>`
                                                        : ""
                                                    }
                                                    ${
                                                      marker.fb
                                                        ? `<li><a target="_blank" href='${marker.fb}' style='text-decoration: underline; font-size: 16px'>Facebook</a></li>`
                                                        : ""
                                                    }
                                                </ul>
                                        `,
                  }}
                  modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </section>

      <section className="container">
        <div className="inner-p">
          <h2 className="container-title h1">Наши контакты</h2>

          <div className="our-contacts">
            <div className="our-contacts__col">
              <div className="col-item">
                <img
                  src={require("../../images/icons/telephone.svg").default}
                  alt=""
                />
                <p>+7 499 444-07-34</p>
              </div>
              <div className="col-item">
                <img
                  src={require("../../images/icons/mail.svg").default}
                  alt=""
                />
                <p>mail@4brewers.ru</p>
              </div>
              <div className="col-item">
                <img
                  src={require("../../images/icons/shopping-cart.svg").default}
                  alt=""
                />
                <p>shop.4brewers.ru</p>
              </div>
            </div>
            <div className="our-contacts__col">
              <div className="col-item">
                <p>Наши дистрибьюторы</p>
              </div>
              <div className="col-item">
                <img
                  src={require("../../images/icons/product.svg").default}
                  alt=""
                />
                <p>Маркетбир (Москва, СПб)</p>
              </div>
              <div className="col-item">
                <img
                  src={require("../../images/icons/product.svg").default}
                  alt=""
                />
                <p>Craft Cartel (Москва)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="inner-p">
          <div className="contact-form">
            <div className="contact-form__col">
              <div className="contact-form__title">
                <h2 className="container-title h1">Напишите 4 Пивоварам</h2>
                <p>И мы обязательно с Вами свяжемся</p>
              </div>

              <div className="contact-form__address">
                <img src={require("../../images/form-beer.png")} alt="" />
                <div className="address-list">
                  <div className="address-item">
                    <h4>Офис</h4>
                    <p>
                      ООО "Четыре пивовара", 600014 г. Владимир, ул. Пос.РТС,
                      д.36к2
                    </p>
                  </div>

                  <div className="address-item">
                    <h4>Бар</h4>
                    <p>
                      ул. Большая Московская ул., 12, Владимир, Владимирская
                      обл.
                    </p>
                  </div>

                  <div className="address-item">
                    <h4>Производство</h4>
                    <p>
                      ООО "Четыре пивовара", 600014 г. Владимир, ул. Пос.РТС,
                      д.36к2
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form__col">
              <form
                className="contact-form__form"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="form-fields">
                  <input
                    required
                    value={userInfo.name}
                    placeholder="Имя"
                    name="name"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                  />
                  <input
                    required
                    value={userInfo.email}
                    placeholder="Электронная почта"
                    name="email"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                  />
                  <input
                    required
                    value={userInfo.phone}
                    placeholder="Телефон"
                    name="phone"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, phone: e.target.value })
                    }
                  />
                  <input
                    value={userInfo.city}
                    placeholder="Город (необязательно)"
                    name="city"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, city: e.target.value })
                    }
                  />
                  <textarea
                    required
                    value={userInfo.comment}
                    rows={6}
                    placeholder="Комментарий"
                    name="comment"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, comment: e.target.value })
                    }
                  />
                </div>
                <div className="checkbox">
                  <input
                    required
                    checked={userInfo.agreement}
                    type={"checkbox"}
                    name="agreement"
                    onChange={() =>
                      setUserInfo({
                        ...userInfo,
                        agreement: !userInfo.agreement,
                      })
                    }
                  />
                  <label htmlFor="agreement">
                    Я согласен на обработку персональных данных и соглашаюсь c
                    политикой конфиденциальности
                  </label>
                </div>
                <div>
                  <button
                    className="btn btn-prim"
                    style={{ width: "100%" }}
                    disabled={
                      !userInfo.agreement ||
                      userInfo.name === "" ||
                      userInfo.email === "" ||
                      userInfo.email === "" ||
                      userInfo.comment === "" ||
                      loading
                    }
                  >
                    отправить
                  </button>
                  {emailSent && (
                    <p className="help-text">
                      Ваше сообщение успешно отправлено
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <img
        className="bg-beer"
        src={require("../../images/bg-beer.svg").default}
        alt=""
      />
    </div>
  );
};

export default Contacts;
