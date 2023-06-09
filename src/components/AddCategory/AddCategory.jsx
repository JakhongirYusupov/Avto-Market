import { GrClose } from "react-icons/gr";
import "./AddCategory.scss";
import { HiOutlineCamera } from "react-icons/hi";
import CustomBtn from "../CustomBtn/CustomBtn";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Spinner from "../Spinner/Spinner";

export default function AddCategory({ setActiveCategory }) {
  const [data, setData] = useState({ category: "", image: null });

  const MUTATION = gql`
    mutation ($category: String!, $image: Image!) {
      createCategory(category: $category, image: $image) {
        status
        message
        data
      }
    }
  `;

  const [mutate, { loading }] = useMutation(MUTATION, {
    onCompleted: (data) => {
      if (data?.createCategory?.status === 200) {
        alert("Kategoriya yaratildi!");
        setActiveCategory(false);
      }
      alert(data?.createCategory?.message);
    },
    onError: (error) => {
      alert(error?.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.image) return alert("Iltimos rasm yuklang");
    mutate({ variables: data });
  };

  return (
    <div className="category">
      {loading ? <Spinner /> : null}
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
            <input
              type="text"
              value={data.category}
              placeholder="Kiriting"
              minLength={3}
              maxLength={100}
              required
              onChange={(e) =>
                setData((state) => ({ ...state, category: e.target.value }))
              }
            />
          </label>
          <label className="category-form-list-item">
            <span>Rasm yuklang</span>
            <label className="category-image" htmlFor="category-image">
              <HiOutlineCamera />
              <span>{data?.image?.name ? data?.image?.name : "Yuklang"}</span>
              <input
                id="category-image"
                type="file"
                accept="image/png, image/jpeg, image/svg, image/jpg"
                placeholder="Yuklang"
                onChange={(e) =>
                  setData((state) => ({
                    ...state,
                    image: e.target.files[0],
                  }))
                }
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
