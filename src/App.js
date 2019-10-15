import React from "react";
import "./App.scss";
import "./scss/index.scss";
import Hero from "./layout/Hero.jsx";
import About from "./layout/About";
import Activity from "./layout/Activity";

import { Col } from "antd";

const App = () => {
  return (
    <Col>
      <Hero />
      <About />
      <Activity />
    </Col>
  );
};

export default App;
