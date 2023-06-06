import "./Types.scss";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCars } from "../../reduxToolkit/carSlice/extraReducer";
import Spinner from "../../components/Spinner/Spinner";

export default function Types() {
  const { search } = useLocation();
  const { data, loading, error } = useSelector((state) => state.carSlice);

  const dispatch = useDispatch();
  const links = [
    { title: "Modellari", url: "/" },
    { title: "Chevrolet turlari" },
  ];

  useEffect(() => {
    dispatch(getCars(search.split("=")[1]));
  }, [dispatch, search]);

  return (
    <main className="types">
      {loading ? <Spinner /> : null}
      {error ? error : null}
      <div className="container">
        <Header />
        <HeaderHero links={links} title={"Modellar turlari"} />
        <section className="types-card-list">
          {data.length
            ? data?.map((el) => <Card key={el.id} data={el} />)
            : null}
        </section>
      </div>
    </main>
  );
}
