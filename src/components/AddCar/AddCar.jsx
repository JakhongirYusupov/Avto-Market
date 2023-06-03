import { GrClose } from "react-icons/gr";
import "../AddCategory/AddCategory.scss";
import { HiOutlineCamera } from "react-icons/hi";
import CustomBtn from "../CustomBtn/CustomBtn";

export default function AddCar({ setActiveCategory }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="category">
      <div className="overlay" onClick={() => setActiveCategory(false)}></div>
      <form className="category-form category-carForm" onSubmit={handleSubmit}>
        <div className="category-title">
          <div className="category-title-wrapper">
            <div className="category-title-color"></div>
            <h3>Mashina qo’shish</h3>
          </div>
          <div
            className="category-title-close"
            onClick={() => setActiveCategory(false)}
          >
            <GrClose />
          </div>
        </div>
        <div className="category-form-list">
          <label className="category-form-list-item">
            <span>Markasi</span>
            <select name="" id="">
              <option value="1">Tahoe</option>
              <option value="2">Nexia</option>
              <option value="3">Maluba</option>
            </select>
          </label>
          <label className="category-form-list-item">
            <span>Tanirovkasi</span>
            <select name="" id="">
              <option value="1">Bor</option>
              <option value="2">Yo'q</option>
            </select>
          </label>
          <label className="category-form-list-item">
            <span>Motori</span>
            <input type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Yili</span>
            <input type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Rangi</span>
            <input type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Distance</span>
            <input type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Gearbook</span>
            <input type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Narxi</span>
            <input type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>3D modeli</span>
            <input type="link" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Rasm tashqi makon</span>
            <label className="category-image" htmlFor="category-image">
              <HiOutlineCamera />
              <span>Yuklang</span>
              <input
                id="category-image"
                type="file"
                accept="image.png, image.jpeg, image.svg, image.jpg"
                placeholder="Yuklang"
              />
            </label>
          </label>
          <label className="category-form-list-item">
            <span>Info</span>
            <textarea type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Rasm ichki makon</span>
            <label className="category-image" htmlFor="category-image">
              <HiOutlineCamera />
              <span>Yuklang</span>
              <input
                id="category-image"
                type="file"
                accept="image.png, image.jpeg, image.svg, image.jpg"
                placeholder="Yuklang"
              />
            </label>
          </label>
        </div>
        <div className="category-form-button">
          <CustomBtn title={"Saqlash"} bold={true} />
        </div>
      </form>
    </div>
  );
}
