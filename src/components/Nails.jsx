/* eslint-disable react/prop-types */

const Nails = ({ src, price }) => {
  return (
    <div
      className="break-inside-avoid sm:flex"
      style={{ position: "relative" }}
    >
      <img src={src} alt="Nail" style={{ maxWidth: "100%", height: "auto" }} />
      {price && (
        <p
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "5px",
          }}
        >
          Price: ${price}
        </p>
      )}
    </div>
  );
};

export default Nails;
