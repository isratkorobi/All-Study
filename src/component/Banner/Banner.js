import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    // banner component  
    <div className="container-fluid banner">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="banner-content">
              <h1>Welcome To Our All Study</h1>
              <h2>Best For Education</h2>
              <p>Batter Education For Batter World</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
