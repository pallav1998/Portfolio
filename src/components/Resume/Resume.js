import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/PALLAV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button
            style={{ width: "20vh", margin: "2vw 0" }}
            variant="primary"
            href={pdf}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
          <Col
            md={6}
            className="resume-left"
            style={{ justifyContent: "center" }}
          >
            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title=""
              content="Publish a Patient of Final Year Project"
              date="2020"
            />
            <Resumecontent
              title=""
              content="Training at “NPCIL (Nuclear Power Corporation of India)"
              date="2019"
            />
            <Resumecontent
              title=""
              content="NPTEL Course in Subject of “Microprocessor and Microcontroller” in 2019"
              date="2019"
            />
            <Resumecontent
              title=""
              content="Participate in “Smart India Hackathon”"
              date="2017"
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronics and Communication Engineering"
              content="Teerthanker Mahaveer University, Moradabad"
              date="2016 - 2020"
            />
            <Resumecontent
              title="Intermideate"
              content="Dehradun Public School, Muzaffarnagar"
              date="2015 - 2016"
            />
            <Resumecontent
              title="High School"
              content="Dehradun Public School, Muzaffarnagar"
              date="2014 - 2015"
            />
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-down"
        >
          <Button
            style={{ width: "20vh", margin: "4vw 0" }}
            variant="primary"
            href={pdf}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
