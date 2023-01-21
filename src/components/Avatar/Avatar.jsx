import "./Avatar.scss";

const Avatar = ({ src, alt }) => {
  // TODO Sizes => sm | md | lg
  return (
    <div className="avatar-wrapper">
      <img src={src} alt={alt} className="avatar md" />
    </div>
  );
};

export default Avatar;
