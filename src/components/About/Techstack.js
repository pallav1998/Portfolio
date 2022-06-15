import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiReact, DiNodejs, DiMongodb, DiCss3 } from "react-icons/di";
import { TbBrandNextjs, TbBrandBootstrap } from "react-icons/tb";
import {
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiSolidity,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Solidity
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
          ReactJs
        </strong>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          NextJs
        </strong>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
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
        <SiTypescript />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          TypeScript
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
        <TbBrandBootstrap />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Bootstrap
        </strong>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <strong
          className="purple"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          GraphQL
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
    </Row>
  );
}

export default Techstack;
