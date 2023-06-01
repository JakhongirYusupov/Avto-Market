import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./HeaderHero.scss";
import React from "react";

export default function HeaderHero({ links, title }) {
  return (
    <header className="hero">
      <div className="hero-navigate">
        <Link to={"/"}>Bosh sahifa</Link>
        {links?.map((el, index) => (
          <React.StrictMode key={index}>
            <MdKeyboardArrowRight />
            {el?.url ? (
              <Link to={el.url}>{el.title}</Link>
            ) : (
              <span>{el.title}</span>
            )}
          </React.StrictMode>
        ))}
      </div>
      <h1 className="hero-title">{title}</h1>
    </header>
  );
}
