import React, { useState, useEffect } from "react";
import { Card } from "../theme/Styled";
import "./GithubProjects.scss";

import { Row } from "antd";

import axios from "axios";

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/vinnihoke/subscriptions")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  const openLink = url => {
    window.open(url, "_blank");
  };

  return (
    <>
      {projects.map((project, index) => {
        return (
          <Card
            className="card"
            key={index}
            onClick={() => openLink(`${project.html_url}`)}
          >
            <p>{project.name}</p>
            <p>{project.language}</p>
            <p>{project.description}</p>
          </Card>
        );
      })}
    </>
  );
};

export default GithubProjects;
