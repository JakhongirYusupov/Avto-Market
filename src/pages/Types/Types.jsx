import "./Types.scss";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Card from "../../components/Card/Card";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY, GET_CATEGORY_CARS } from "../../utils/query";

export default function Types() {
  const { search } = useLocation();
  const [data, setData] = useState();
  const [category, setCategory] = useState([]);

  const { loading } = useQuery(GET_CATEGORY_CARS, {
    onCompleted: ({ getCars }) => {
      if (getCars?.status !== 200) alert(getCars?.message);
      setData(getCars?.data);
    },
    onError: (error) => alert(error?.message),
    variables: { categoryId: +search.split("=")[1] },
  });

  const { loading: categoryLoading } = useQuery(GET_CATEGORY, {
    onCompleted: ({ getCategory }) => setCategory(getCategory?.data),
    onError: (error) => alert(error?.message),
  });

  const links = [
    { title: "Modellari", url: "/" },
    {
      title: `${
        category?.find((el) => el?.id === +search.split("=")[1])?.category
      } turlari`,
    },
  ];

  return (
    <main className="types">
      {loading || categoryLoading ? <Spinner /> : null}
      <div className="container">
        <Header />
        <HeaderHero links={links} title={"Modellar turlari"} />
        <section className="types-card-list">
          {data?.length
            ? data?.map((el) => <Card key={el.id} data={el} />)
            : null}
        </section>
      </div>
    </main>
  );
}
