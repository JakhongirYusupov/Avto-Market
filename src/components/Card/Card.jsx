import { useState } from "react";
import "./Card.scss";
import {
  AiFillEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiTwotoneHeart,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { serverImgUrl } from "../../utils/api";

export default function Card({ data, model }) {
  const { search } = useLocation();
  const [activeLike, setactiveLike] = useState(false);

  return (
    <div className="card">
      {search.includes("type") ? (
        <Link to={`/model/?type=${search.split("=")[1]}&model=${data?.id}`}>
          <img
            src={
              serverImgUrl +
              (data?.image
                ? data.image
                : data?.tashqi_rasm
                ? data?.tashqi_rasm[0]
                : null)
            }
            alt="carimage"
          />
        </Link>
      ) : (
        <Link key={data.id} to={`/model-types/?type=${data.id}`}>
          <img
            src={
              serverImgUrl +
              (data?.image
                ? data.image
                : data?.tashqi_rasm
                ? data?.tashqi_rasm[0]
                : null)
            }
            alt="carimage"
          />
        </Link>
      )}

      <p className="card-title">
        {data?.category ? data?.category : data?.name ? data?.name : null}
      </p>
      {model ? null : (
        <>
          <p>Narxi: {data?.narxi} dollar</p>
          <div className="card-action">
            <div
              className="card-action-like"
              onClick={() => setactiveLike((state) => !state)}
            >
              {activeLike ? (
                <AiTwotoneHeart className={"card-action-like-active"} />
              ) : (
                <AiOutlineHeart />
              )}
              <span>{data?.likes}</span>
            </div>
            <div className="card-action-view">
              <AiFillEye />
              <span>{data?.views}</span>
            </div>
            <AiOutlineShoppingCart className="card-action-korzina" />
          </div>
        </>
      )}
    </div>
  );
}
