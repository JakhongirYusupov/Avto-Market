import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import "./Detail.scss";
import ThreeModel from "../../components/3Dmodel/3Dmodel";
import { useState } from "react";
import { serverImgUrl } from "../../utils/api";
import Spinner from "../../components/Spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_CARS_INFO, GET_CATEGORY } from "../../utils/query";

export default function Detail() {
  const { search } = useLocation();
  const [threeModel, setThreeModel] = useState(1);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const { loading } = useQuery(GET_CARS_INFO, {
    onCompleted: ({ getCarInfo }) => {
      if (getCarInfo?.status === 200) setData(getCarInfo?.data);
      else alert(getCarInfo?.message);
    },
    onError: (error) => console.log(error),
    variables: {
      categoryId: +search.split("&")[0].split("=")[1],
      carId: +search.split("&")[1].split("=")[1],
    },
  });

  const { loading: categoryLoading } = useQuery(GET_CATEGORY, {
    onCompleted: ({ getCategory }) => setCategory(getCategory?.data),
    onError: (error) => alert(error?.message),
  });

  const links = [
    { title: "Modellari", url: "/" },
    {
      title: `${
        category?.find((el) => el?.id === +search.split("&")[0].split("=")[1])
          ?.category
      } turlari`,
      url: `/model-types/${search.split("&")[0]}`,
    },
    { title: data?.name },
  ];

  console.log(category);

  return (
    <main className="detail">
      {loading || categoryLoading ? <Spinner /> : null}
      <div className="container">
        <Header />
        <HeaderHero links={links} title={data?.name} />
        <section className="detail-wrapper">
          <div className="detail-info">
            <div className="detail-info-hero">
              <h2>{data?.name}</h2>
              <p>{data?.narxi} dollar</p>
              <img src={serverImgUrl + data?.tashqi_rasm} alt="carimage" />
            </div>
            <div className="detail-info-desc">
              <div className="detail-info-desc-item">
                <strong>Marka:</strong>
                <span>
                  {
                    category?.find((el) => el.id === data?.category_id)
                      ?.category
                  }
                </span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Tanirovkasi:</strong>
                <span>{data?.tanirovka}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Motor:</strong>
                <span>{data?.motor}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Year:</strong>
                <span>{data?.year}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Color:</strong>
                <span>{data?.color}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Distance:</strong>
                <span>{data?.distance}</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Gearbook:</strong>
                <span>{data?.gearbook}</span>
              </div>
              <div className="detail-info-desc-item">
                <p className="detail-info-desc-item-text">
                  <strong>Deseription:</strong>
                  {data?.info}
                </p>
              </div>
              <div className="detail-info-desc-item-border"></div>
              <div className="detail-info-desc-item detail-info-desc-item-cost">
                <strong>Umumiy xarajat:</strong>
                <span>{data?.narxi} dollardan</span>
              </div>
            </div>
          </div>
          <div className="detail-media">
            <div className="detail-media-wrapper">
              {threeModel === 1 ? (
                <ThreeModel url={data?.three_model} />
              ) : threeModel === 2 ? (
                <img
                  className="detail-media-image"
                  src={serverImgUrl + data?.tashqi_rasm[0]}
                  alt="error"
                />
              ) : threeModel === 3 ? (
                <img
                  className="detail-media-image"
                  src={serverImgUrl + data?.ichki_rasm[0]}
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
                  checked={threeModel === 1 ? true : false}
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
