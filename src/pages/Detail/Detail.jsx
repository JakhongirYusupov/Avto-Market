import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import image from "../../assets/images/maluba.png";
import "./Detail.scss";

export default function Detail() {
  const { search } = useLocation();
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
        </section>
      </div>
    </main>
  );
}
