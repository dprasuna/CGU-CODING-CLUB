import React from "react";
import "./convener.css";
const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Coordinators</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/dummy.png"
              alt="Giridharan - Assistant professor"
            />
            <h1 className="convener-name">xxx yyy</h1>
            <h1 className="convener-position">
              ewigekyvgwvbc
            </h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/dummy.png"
              alt="Nandhashree - Assistant professor"
            />
            <h1 className="convener-name"> xxxrfgregr</h1>
            <h1 className="convener-position">
              POSITION
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
