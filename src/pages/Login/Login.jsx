import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { Link } from "react-router-dom";

export default function Login() {
  const [activeEye, setActiveEye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="container">
        <form className="register-form" onSubmit={handleSubmit}>
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
            <Link to={"/register"}>Ro'yxatdan o'tish</Link>
            <CustomBtn title={"Submit"} bold={true} />
          </div>
        </form>
      </div>
    </div>
  );
}
