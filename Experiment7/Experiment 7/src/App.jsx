function ProductCard() {

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
    fontFamily: "Arial",
  };

  const cardStyle = {
    width: "300px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 0px 10px gray",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>

        <img
          src="https://via.placeholder.com/250"
          alt="Product"
          style={imageStyle}
        />

        <h2>Wireless Headphones</h2>

        <p>
          High quality wireless headphones with noise cancellation.
        </p>

        <h3>₹2999</h3>

        <button style={buttonStyle}>
          Buy Now
        </button>

      </div>
    </div>
  );
}

export default ProductCard;