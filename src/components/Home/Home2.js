import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import TransitionsModal from "../Modal/ContactModal.jsx";

function Home2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={8}
            style={{ marginTop: "4vw" }}
            className="home-about-description"
            data-aos="fade-right"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              A passionate Developer, with strong
              <i>
                <b className="purple">&nbsp; administrative &nbsp;</b>
              </i>
              and
              <i>
                <b className="purple">&nbsp;communication skills &nbsp;</b>
              </i>
              with good
              <i>
                <b className="purple">&nbsp; attention to detail &nbsp;</b>
              </i>
              and ability to write
              <i>
                <b className="purple">&nbsp; efficient code &nbsp;</b>
              </i>
              using &nbsp;
              <i>
                <b className="purple">MERN Stack &nbsp;</b>
              </i>
              🤷‍♂️
              <br />
              <br />I have been developing Web Apps for over
              <i>
                <b className="purple">&nbsp; 6 months</b>
              </i>
              . Well versed in coding using
              <i>
                <b className="purple">&nbsp; Javascript, React &nbsp;</b>
              </i>
              and its frameworks
              <br />
              <br />
              As I
              <i>
                <b className="purple">&nbsp; grow &nbsp;</b>
              </i>
              and
              <i>
                <b className="purple">&nbsp; flourish &nbsp;</b>
              </i>
              as a Developer, one thing which keeps me going is my
              <i>
                <b className="purple">&nbsp; curiousness &nbsp;</b>
              </i>
              for discovering new things every day.
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-down"
            style={{ marginTop: "-32px" }}
          >
            <Tilt>
              <img
                style={{ height: "30vw" }}
                src="pallav.JPG"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row style={{ marginTop: "5vh" }}>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pallav1998"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/jain_pallav1998"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pj1998/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <h3>
              Contact Details:
              <p
                href="tel:+9258666267"
                style={{
                  color: "purple",
                }}
              >
                +919258666267 <br />
                jain.pallav1998@gmail.com
              </p>
            </h3>
            <br /> <br />
            <TransitionsModal />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
