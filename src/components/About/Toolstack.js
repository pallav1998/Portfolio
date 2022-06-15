import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiJirasoftware,
  SiNotion,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Visual Studio
        </strong>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Jira Software
        </strong>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Noion
        </strong>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Git
        </strong>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Postman
        </strong>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Netlify
        </strong>
      </Col>
    </Row>
  );
}

export default Toolstack;
