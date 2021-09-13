import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
} from "react-icons/di";
import { SiRedux } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          JavaScript
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          HTML
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Node.js
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          CSS
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          React
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Mongodb
        </strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Redux
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
    </Row>
  );
}

export default Techstack;
