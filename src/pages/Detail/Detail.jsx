import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import image from "../../assets/images/maluba.png";
import nexia from "../../assets/images/nexia.png";
import "./Detail.scss";
import ThreeModel from "../../components/3Dmodel/3Dmodel";
import { useState } from "react";

export default function Detail() {
  const { search } = useLocation();
  const [threeModel, setThreeModel] = useState(1);
  const links = [
    { title: "Modellari", url: "/" },
    {
      title: "Chevrolet turlari",
      url: `/model-types/${search.split("&")[0]}`,
    },
    { title: "Chevrolet Malibu" },
  ];
  return (
    <main className="detail">
      <div className="container">
        <Header />
        <HeaderHero links={links} title={"Chevrolet Malibu"} />
        <section className="detail-wrapper">
          <div className="detail-info">
            <div className="detail-info-hero">
              <h2>Chevrolet Malibu</h2>
              <p>329 900 000 so‘m dan</p>
              <img src={image} alt="carimage" />
            </div>
            <div className="detail-info-desc">
              <div className="detail-info-desc-item">
                <strong>Marka:</strong>
                <span>CHEVROLeT</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Tanirovkasi:</strong>
                <span>Yo‘q</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Motor:</strong>
                <span>1.6</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Year:</strong>
                <span>2016</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Color:</strong>
                <span>Oq</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Distance:</strong>
                <span>3000 km</span>
              </div>
              <div className="detail-info-desc-item">
                <strong>Gearbook:</strong>
                <span>Avtomat karobka</span>
              </div>
              <div className="detail-info-desc-item">
                <p className="detail-info-desc-item-text">
                  <strong>Deseription:</strong> Mishina ideal holatda krasska
                  top toza 100tali. Ayol kishiniki judayam akuratno haydalgan.
                </p>
              </div>
              <div className="detail-info-desc-item-border"></div>
              <div className="detail-info-desc-item detail-info-desc-item-cost">
                <strong>Umumiy xarajat:</strong>
                <span>329 900 000 so'm dan</span>
              </div>
            </div>
          </div>
          <div className="detail-media">
            <div className="detail-media-wrapper">
              {threeModel === 1 ? (
                <ThreeModel />
              ) : threeModel === 2 ? (
                <img className="detail-media-image" src={image} alt="error" />
              ) : threeModel === 3 ? (
                <img className="detail-media-image" src={nexia} alt="error" />
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
