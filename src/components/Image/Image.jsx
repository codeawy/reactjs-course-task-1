const Image = ({ src, alt, size = "md" }) => {
  const imgSmSize = size === "sm" ? 40 : null;
  const imgMdSize = size === "md" ? 60 : null;
  const imgLgSize = size === "lg" ? 180 : null;
  const imgXLSize = size === "xl" ? 180 : null;

  return (
    <div className={`image-wrapper`}>
      <img
        className={size === "full" ? "img-full" : null}
        src={src}
        alt={alt}
        style={{
          width: imgSmSize | imgMdSize | imgLgSize | imgXLSize,
        }}
      />
    </div>
  );
};

export default Image;
