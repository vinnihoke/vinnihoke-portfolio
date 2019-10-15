import React from "react";
import "./Activity.scss";

import { Row, Col } from "antd";
import GithubProjects from "../components/GithubProjects";

const Projects = () => {
  return (
    <Row className="activity">
      <Col>
        <h3>Activity</h3>
        <GithubProjects />
      </Col>
    </Row>
  );
};

export default Projects;
