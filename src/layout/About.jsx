import React from "react";
import "./About.scss";

import { Row, Col } from "antd";

const About = () => {
  return (
    <Row className="about">
      <Col>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit
          labore atque voluptatum quidem reprehenderit.
        </p>
      </Col>
    </Row>
  );
};

export default About;
