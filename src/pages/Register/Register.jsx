import "./Register.scss";
import img from "../../assets/images/person.png";
import { HiOutlineCamera } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { Link } from "react-router-dom";

export default function Register() {
  const [activeEye, setActiveEye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register">
      <div className="container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form-img">
            <img src={img} alt="error" />
            <label className="category-form-list-item">
              <span>Profilega rasm</span>
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
          <label className="category-form-list-item">
            <span>Ismingiz</span>
            <input type="text" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item">
            <span>Email pochta manzilingiz</span>
            <input type="email" placeholder="Kiriting" />
          </label>
          <label className="category-form-list-item register-password-wrapper">
            <span>Password</span>
            <input
              type={activeEye ? "text" : "password"}
              placeholder="Kiriting"
            />
            <AiFillEye
              onClick={() => setActiveEye((state) => !state)}
              className="register-password"
            />
          </label>
          <div className="register-btn">
            <Link to={"/login"}>Login</Link>
            <CustomBtn title={"Submit"} bold={true} />
          </div>
        </form>
      </div>
    </div>
  );
}
