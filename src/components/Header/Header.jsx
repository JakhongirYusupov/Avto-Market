import CustomBtn from "../CustomBtn/CustomBtn";
import "./Header.scss";
import { RxPerson } from "react-icons/rx";

export default function Header() {
  return (
    <div className="header">
      <CustomBtn title={"Profile"} icon={<RxPerson />} />
    </div>
  );
}
