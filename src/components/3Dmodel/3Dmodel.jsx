import "./3Dmodel.scss";

export default function ThreeModel({ url }) {
  return (
    <div className="model">
      <iframe
        autoPlay={true}
        className="model"
        title="Chevrolet Damas 3D model - Sketchfab"
        src={url}
      ></iframe>
    </div>
  );
}
