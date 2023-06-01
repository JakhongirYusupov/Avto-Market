import "./Home.scss";
import Header from "../../components/Header/Header";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import image from "../../assets/images/nexia.png";
import Card from "../../components/Card/Card";

export default function Home() {
  const links = [{ title: "modellari" }];
  const fake = [
    { id: 1, image, model: "CHEVROlet" },
    { id: 2, image, model: "Lada" },
    { id: 3, image, model: "lamborghini" },
    { id: 4, image, model: "CHEVROlet" },
    { id: 5, image, model: "ferrari" },
    { id: 6, image, model: "CHEVROlet" },
    { id: 7, image, model: "CHEVROlet" },
  ];
  return (
    <main className="home">
      <div className="container">
        <Header />
        <HeaderHero links={links} title={"Modellari"} />
        <section className="home-card-list">
          {fake.map((el) => (
            <Card key={el.id} model={true} data={el} />
          ))}
        </section>
      </div>
    </main>
  );
}
