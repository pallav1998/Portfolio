import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MonsterIndia from "../../Assets/Projects/MonsterIndia.png";
import Ajio from "../../Assets/Projects/Ajio.png";
import hotwire from "../../Assets/Projects/Hotwire.png";
// import bitsOfCode from "../../Assets/Projects/Animoto.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={hotwire}
              isBlog={false}
              title="Hotwire Clone "
              description="Hotwire is a travel website that offers airline tickets, hotel rooms, rental cars, and vacation packages. It operates by selling off unsold travel inventory at discounted prices. The company is headquartered in San Francisco, CA."
              link="https://github.com/pallav1998/hotwire_clone"
              linkmedium="https://medium.com/@jain.pallav1998/project-on-hotwire-clone-95339d2e5e41"
              linklive="https://hotwire.netlify.app/"
              sitelink="https://www.hotwire.com/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={MonsterIndia}
              isBlog={false}
              title="MonsterIndia Clone"
              description="Monster India, India's leading online career and recruitment resource with its cutting edge technology provides relevant profiles to employers and relevant jobs to jobseekers across industry verticals, experience levels and geographies."
              sitelink="https://www.monsterindia.com/"
              link="https://github.com/pallav1998/Monster_Project"
              linkmedium="#"
              linklive="https://monsterindia.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={Ajio}
              isBlog={false}
              title="Ajio Clone"
              description="AJIO, a fashion and lifestyle brand, is Reliance Retail’s digital commerce initiative and is the ultimate fashion destination for styles that are handpicked, on trend and at prices that are the best you’ll find anywhere."
              link="https://github.com/vshubhams/Ajio-clone"
              linkmedium=""
              linklive="https://ajioproject.netlify.app/"
              sitelink="https://www.ajio.com/"
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Animoto Clone"
              description="Animoto is a cloud-based video creation service that produces video from photos, video clips, and music into video slideshows,and customized web-based presentations."
              link="https://github.com/nilpatil7744/Project_Damodar"
              linkmedium="https://nilp7744.medium.com/masai-collaboration-project-animoto-clone-fec2a84b2f8b"
              linklive="https://animoto-clone.netlify.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
