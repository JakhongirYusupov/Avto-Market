import { GrClose } from "react-icons/gr";
import "./AddCategory.scss";
import { HiOutlineCamera } from "react-icons/hi";
import CustomBtn from "../CustomBtn/CustomBtn";

export default function AddCategory({ setActiveCategory }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="category">
      <div className="overlay" onClick={() => setActiveCategory(false)}></div>
      <form className="category-form" onSubmit={handleSubmit}>
        <div className="category-title">
          <div className="category-title-wrapper">
            <div className="category-title-color"></div>
            <h3>Kategoriya qo’shish</h3>
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
            <input type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Rasm yuklang</span>
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
