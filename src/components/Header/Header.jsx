import CustomBtn from "../CustomBtn/CustomBtn";
import "./Header.scss";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

export default function Header() {
  return (
    <div className="header">
      <div className="header-lovely scaleAnimation">
        <FaRegHeart />
        <div className="header-lovely-dot"></div>
      </div>
      <div className="header-cart scaleAnimation">
        <div className="header-cart-count ">15</div>
        <GrCart />
      </div>
      <CustomBtn title={"Profile"} bold={true} icon={<RxPerson />} />
    </div>
  );
}
