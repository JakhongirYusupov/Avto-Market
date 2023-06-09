import "./Home.scss";
import Header from "../../components/Header/Header";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Card from "../../components/Card/Card";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY } from "../../utils/query";

export default function Home() {
  const links = [{ title: "Modellari" }];
  const [data, setData] = useState([]);

  const { loading } = useQuery(GET_CATEGORY, {
    onCompleted: ({ getCategory }) => {
      if (getCategory?.status !== 200) alert(getCategory.message);
      setData(getCategory.data);
    },
    onError: (error) => alert(error?.message),
  });

  return (
    <main className="home">
      <div className="container">
        <Header />
        <HeaderHero links={links} title={"Modellari"} />
        {loading ? <Spinner /> : null}
        <section className="home-card-list">
          {data?.map((el) => (
            <Card key={el.id} model={true} data={el} />
          ))}
        </section>
      </div>
    </main>
  );
}
