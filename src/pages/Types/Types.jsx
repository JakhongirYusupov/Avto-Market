import "./Types.scss";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import image from "../../assets/images/nexia.png";
import Card from "../../components/Card/Card";

export default function Types() {
  const url = useLocation();
  console.log(url);
  const links = [
    { title: "Modellari", url: "/" },
    { title: "Chevrolet turlari" },
  ];

  const fake = [
    {
      id: 1,
      image,
      model: "CHEVROlet Nexia",
      cost: 400000000,
      view: 400,
      likes: 324,
    },
    {
      id: 2,
      image,
      model: "Lada vesta",
      cost: 400000000,
      view: 400,
      likes: 324,
    },
    {
      id: 3,
      image,
      model: "lamborghini urus",
      cost: 400000000,
      view: 400,
      likes: 324,
    },
    {
      id: 4,
      image,
      model: "CHEVROlet gengtra",
      cost: 400000000,
      view: 400,
      likes: 324,
    },
    {
      id: 5,
      image,
      model: "ferrari f1",
      cost: 400000000,
      view: 400,
      likes: 324,
    },
    {
      id: 6,
      image,
      model: "CHEVROlet tracker 2",
      cost: 400000000,
      view: 400,
      likes: 324,
    },
    {
      id: 7,
      image,
      model: "CHEVROlet maluba",
      cost: 400000000,
      view: 400,
      likes: 324,
    },
  ];

  return (
    <main className="types">
      <div className="container">
        <Header />
        <HeaderHero links={links} title={"Modellar turlari"} />
        <section className="types-card-list">
          {fake.map((el) => (
            <Card key={el.id} data={el} />
          ))}
        </section>
      </div>
    </main>
  );
}
