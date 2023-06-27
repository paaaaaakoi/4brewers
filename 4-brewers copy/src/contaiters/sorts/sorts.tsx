import React, { useEffect, useState } from "react";
import './sorts.scss';
import { STYLES_LIST } from "../../service/consts";
import Loader from "../../components/loader/loader";
import { SortData, Style } from "../../service/types";
import { getSorts } from "../../service/api";
import { toast } from "react-toastify";

const Sorts = () => {
  const [sorts, setSorts] = useState<SortData[]>([]);
  const [styleFilter, setStyleFilter] = useState<Style | "">("");

  const [filtersShown, setFiltersShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchSorts = async () => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const sortsResp = await getSorts(styleFilter);
      if (sortsResp) {
        setSorts(sortsResp.data);
      }
    } catch (e) {
      toast(e.message || "Ошибка загрузки сортов!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSorts();
  }, [styleFilter]);

  return (
    <div className="sorts">
      <div className="container">
        <div className="inner-p">
          <div className="sorts__content">
            <div className={`filters ${filtersShown ? "filters-shown" : ""}`}>
              <img
                className="filters-close"
                src={require(`../../images/icons/close.svg`).default}
                alt={""}
                onClick={() => setFiltersShown(false)}
              />
              <div className="filters__item">
                <h3 className="title">Стиль</h3>
                <div className="list">
                  {STYLES_LIST.map((style) => (
                    <div
                      className="radio-block"
                      key={style}
                      onClick={() =>
                        setStyleFilter(styleFilter === style ? "" : style)
                      }
                    >
                      <input
                        checked={styleFilter === style}
                        type="radio"
                        className="radio"
                        name={style}
                      />
                      <label htmlFor={style}>{style.toUpperCase()}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sorts-list">
              <div className="title">
                <h2 className="h1">Сорта</h2>
                <img
                  className="filter-btn"
                  src={require(`../../images/icons/filter.svg`).default}
                  alt=""
                  onClick={() => setFiltersShown(!filtersShown)}
                />
              </div>
              {loading && <Loader />}

              {!loading && (
                <div className="list">
                  {sorts.map((sort) => (
                    <div className="list__item" key={sort.id}>
                      <div className="title">
                        <h3>{sort.title}</h3>
                        <span className="desc">{sort.taste}</span>
                      </div>

                      <img className="beer-image" src={sort.image} alt="" />
                      <img
                        className="style-cover"
                        src={require(`../../images/sort-styles/${sort.style}.svg`)}
                        alt=""
                      />

                      <div className="description">
                        {Object.entries(sort.props).map(([key, val]) => (
                          <span key={`${key}: ${val}`}>
                            {key}: {val}
                          </span>
                        ))}
                        <p className="desc">{sort.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {filtersShown && (
        <div
          className={`cover cover-shown`}
          onClick={() => setFiltersShown(false)}
        />
      )}
      <img
        className="bg-beer"
        src={require("../../images/bg-beer.svg").default}
        alt=""
      />
    </div>
  );
};

export default Sorts