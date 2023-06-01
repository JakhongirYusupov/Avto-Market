import "./CustomBtn.scss";

export default function CustomBtn({ title, icon, type, bold }) {
  return (
    <button
      type={type}
      className={bold ? "custom-btn" : "custom-btn custom-btn-thin"}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
}
