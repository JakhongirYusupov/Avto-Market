import { Link } from "react-router-dom";
import "./CarsTable.scss";
import { HiArrowRight } from "react-icons/hi";

export default function CarsTable({ data }) {
  const tableCategory = [
    "#",
    "Markasi",
    "Gearbook",
    "Tanirovkasi",
    "Motor",
    "Year",
    "Color",
  ];
  return (
    <table className="car-table">
      <thead>
        <tr></tr>
        <tr>
          {tableCategory.map((el, index) => (
            <th key={index}>{el}</th>
          ))}
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        {data?.map((el, index) => (
          <tr key={index}>
            <th>1.</th>
            <th>CHEVROLET</th>
            <th>Avtomat karobka</th>
            <th>Yoq</th>
            <th>1.6</th>
            <th>2016</th>
            <th>Oq</th>
            <th className="car-table-action">
              <span>3000km</span>
              <Link to={""}>
                <HiArrowRight />
              </Link>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
