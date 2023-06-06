import "./Home.scss";
import Header from "../../components/Header/Header";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategory } from "../../reduxToolkit/categorySlice/extraReducer";
import Spinner from "../../components/Spinner/Spinner";

export default function Home() {
  const links = [{ title: "modellari" }];
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.categorySlice);
  console.log(data, loading);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <main className="home">
      <div className="container">
        <Header />
        <HeaderHero links={links} title={"Modellari"} />
        {error ? error : null}
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
