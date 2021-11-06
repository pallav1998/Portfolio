import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Modified by Pallav Jain</h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons" style={{ cursor: "pointer" }}>
              <a
                href="https://github.com/pallav1998"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ cursor: "pointer" }}>
              <a
                href="https://twitter.com/jain_pallav1998"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons" style={{ cursor: "pointer" }}>
              <a
                href="https://www.linkedin.com/in/pj1998/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
