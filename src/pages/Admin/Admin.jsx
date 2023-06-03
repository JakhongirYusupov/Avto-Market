import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import "./Admin.scss";
import { MdOutlineNotificationsNone, MdStorefront } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";
import person from "../../assets/images/person.png";
import CarsTable from "../../components/CarsTable/CarsTable";
import Pagination from "../../components/Pagination/Pagination";
import AddCategory from "../../components/AddCategory/AddCategory";
import { useState } from "react";
import AddCar from "../../components/AddCar/AddCar";

export default function Admin() {
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeCar, setActiveCar] = useState(false);

  return (
    <div className="admin">
      {activeCategory ? (
        <AddCategory setActiveCategory={setActiveCategory} />
      ) : null}

      {activeCar ? <AddCar setActiveCategory={setActiveCar} /> : null}
      <div className="admin-bar">
        <ul className="admin-bar-list">
          <li className="admin-bar-list-item">
            <AiFillHome />
            <span>Asosiy</span>
          </li>
          <li className="admin-bar-list-item">
            <MdStorefront />
            <span>E’lonlar</span>
          </li>
          <li className="admin-bar-list-item">
            <SlNote />
            <span>Savollar</span>
          </li>
        </ul>
      </div>
      <div className="admin-main">
        <div className="admin-main-header">
          <Link to={"/"}>
            <CustomBtn
              title={"Asosiyga qaytish"}
              bold={true}
              icon={<RxPerson />}
            />
          </Link>
          <div className="admin-main-header-profile">
            <div className="admin-main-header-profile-note">
              <div className="admin-main-header-profile-note-dot"></div>
              <MdOutlineNotificationsNone />
            </div>
            <Link to={"/profile"} className="admin-main-header-profile-img">
              <img src={person} alt="profile" />
            </Link>
          </div>
        </div>
        <div className="admin-main-cars">
          <div className="admin-main-cars-hero">
            <div className="admin-main-cars-hero-title">
              <div className="admin-main-cars-hero-title-color"></div>
              <h1>Mashinalar</h1>
            </div>
            <div className="admin-main-cars-hero-btns">
              <div onClick={() => setActiveCategory(true)}>
                <CustomBtn
                  title={"Kategoriya qo’shish"}
                  icon={<AiOutlinePlus />}
                />
              </div>
              <div onClick={() => setActiveCar(true)}>
                <CustomBtn
                  title={"Mashina qo‘shish"}
                  icon={<AiOutlinePlus />}
                />
              </div>
            </div>
          </div>
          <CarsTable data={[1, 2]} />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
