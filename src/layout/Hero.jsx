import React from "react";
import "./Hero.scss";

import { Row } from "antd";

const Hero = () => {
  return (
    <Row className="hero">
      <div className="hero-content">
        <h5>
          Hi, my name is Vinni. I'm a Full Stack Developer currently in Fresno,
          CA.
        </h5>
      </div>
    </Row>
  );
};

export default Hero;
