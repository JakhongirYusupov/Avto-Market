import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import "./Detail.scss";
import ThreeModel from "../../components/3Dmodel/3Dmodel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarInfo } from "../../reduxToolkit/carInfo/extraReducer";
import { serverImgUrl } from "../../utils/api";
import Spinner from "../../components/Spinner/Spinner";
import { getCategory } from "../../reduxToolkit/categorySlice/extraReducer";

export default function Detail() {
  const { search } = useLocation();
  const [threeModel, setThreeModel] = useState(1);
  const { info, infoLoading, infoError } = useSelector(
    (state) => state.carInfo
  );
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categorySlice);

  const links = [
    { title: "Modellari", url: "/" },
    {
      title: "Chevrolet turlari",
      url: `/model-types/${search.split("&")[0]}`,
    },
    { title: info?.name },
  ];

  useEffect(() => {
    dispatch(
      getCarInfo({
        categoryId: +search.split("&")[0].split("=")[1],
        carId: +search.split("&")[1].split("=")[1],
      })
    );
    dispatch(getCategory());
  }, [dispatch, search]);

  return (
    <main className="detail">
      {infoLoading ? <Spinner /> : null}
      {infoError ? infoError : null}
      <div className="container">
        <Header />
        <HeaderHero links={links} title={info?.name} />
        <section className="detail-wrapper">
          <div className="detail-info">
            <div className="detail-info-hero">
              <h2>{info?.name}</h2>
              <p>{info?.narxi} dollar</p>
              <img src={serverImgUrl + info?.tashqi_rasm} alt="carimage" />
            </div>
            <div className="detail-info-desc">
              <div className="detail-info-desc-item">
                <strong>Marka:</strong>
                <span>
                  {
                    category?.data?.find((el) => el.id === info?.category_id)
                      ?.category
                  }
                </span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Tanirovkasi:</strong>
                <span>{info?.tanirovka}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Motor:</strong>
                <span>{info?.motor}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Year:</strong>
                <span>{info?.year}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Color:</strong>
                <span>{info?.color}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Distance:</strong>
                <span>{info?.distance}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Gearbook:</strong>
                <span>{info?.gearbook}</span>
              </div>
              <div className="detail-info-desc-item">
                <p className="detail-info-desc-item-text">
                  <strong>Deseription:</strong>
                  {info?.info}
                </p>
              </div>
              <div className="detail-info-desc-item-border"></div>
              <div className="detail-info-desc-item detail-info-desc-item-cost">
                <strong>Umumiy xarajat:</strong>
                <span>{info?.narxi} dollardan</span>
              </div>
            </div>
          </div>
          <div className="detail-media">
            <div className="detail-media-wrapper">
              {threeModel === 1 ? (
                <ThreeModel url={info?.three_model} />
              ) : threeModel === 2 ? (
                <img
                  className="detail-media-image"
                  src={serverImgUrl + info?.tashqi_rasm[0]}
                  alt="error"
                />
              ) : threeModel === 3 ? (
                <img
                  className="detail-media-image"
                  src={serverImgUrl + info?.ichki_rasm[0]}
                  alt="error"
                />
              ) : null}
            </div>
            <p className="detail-media-desc">
              Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
              Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi
              mumkin.
            </p>
            <div className="detail-media-select">
              <label htmlFor="3D model">
                <input
                  onChange={() => setThreeModel(1)}
                  type="radio"
                  name="media"
                  id="3D model"
                />
                <span>3D model</span>
              </label>
              <label htmlFor="Tashqi makon">
                <input
                  onChange={() => setThreeModel(2)}
                  type="radio"
                  name="media"
                  id="Tashqi makon"
                />
                <span>Tashqi makon</span>
              </label>
              <label htmlFor="Ichki makon">
                <input
                  onChange={() => setThreeModel(3)}
                  type="radio"
                  name="media"
                  id="Ichki makon"
                />
                <span>Ichki makon</span>
              </label>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
