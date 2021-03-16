import React from "react";
import learnImage from "../../assets/banner_image.jpg";

const Banner = () => {
  return (
    <header className="banner">
      <div className="image-container">
        <img src={learnImage} alt="Learn something new" />
      </div>
      <div className="floating-message">
        <h2>Aspire for more</h2>
        <p>
          Learning keeps you in the lead, Get in-demand skills to impress anyone
        </p>
      </div>
    </header>
  );
};

export default Banner;
