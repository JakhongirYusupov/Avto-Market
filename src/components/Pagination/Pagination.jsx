import { useState } from "react";
import "./Pagination.scss";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export default function Pagination({ count = 6 }) {
  const [activePage, setActivePage] = useState(1);
  const array = [];

  for (let i = 0; i < count; i++) {
    array.push(1);
  }
  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        <div
          className="pagination-arrow"
          onClick={() =>
            setActivePage((state) => {
              if (!(state <= 1)) return --state;
              return state;
            })
          }
        >
          <HiArrowLeft style={activePage <= 1 ? null : { color: "#000000" }} />
        </div>
        {array.map((el, index) => (
          <span
            key={index}
            onClick={() => setActivePage(index + 1)}
            style={activePage === index + 1 ? { color: "#000000" } : null}
          >
            {index + 1}
          </span>
        ))}

        <div
          className="pagination-arrow"
          onClick={() =>
            setActivePage((state) => {
              if (!(state >= array.length)) return ++state;
              return state;
            })
          }
        >
          <HiArrowRight
            style={activePage >= array.length ? null : { color: "#000000" }}
          />
        </div>
      </div>
    </div>
  );
}
