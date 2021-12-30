import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MonsterIndia from "../../Assets/Projects/MonsterIndia.png";
import Ajio from "../../Assets/Projects/Ajio.png";
import hotwire from "../../Assets/Projects/Hotwire.png";
// import music from "../../Assets/Projects/Music.png";
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
          {/* <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={music}
              title="Music Player"
              description="Created a Music Player. Tech Stack used - HTML, CSS, JavaScript, Canvas. Completed this project under 2 days."
              link="https://github.com/pallav1998/Music_Player"
              linkmedium=""
              linklive="https://pallav1998.github.io/Music_Player/"
              sitelink=""
            />
          </Col> */}
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={hotwire}
              title="Hotwire"
              description="Hotwire is a well-known travel website that offers airline tickets, hotel rooms, rental cars, and vacation packages. Trying to Developed a look alike of it, focusing mainly on searching for hotels based on city, categorizing them with rating. Tech Stack used - React.js, JavaScript, material UI, Mook Server, React-Redux. Done in collaboration with 4 members, under a week."
              link="https://github.com/pallav1998/hotwire_clone"
              linkmedium="https://medium.com/@jain.pallav1998/project-on-hotwire-clone-95339d2e5e41"
              linklive="https://hotwire.netlify.app/"
              sitelink="https://www.hotwire.com/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={MonsterIndia}
              title="Monsterindia"
              description="Monster India, India's leading online career and recruitment resource which provides jobs to jobseekers across industry. Trying to Developed a look alike of it, focusing mainly on searching for Jobs based on city. Tech Stack used - React.js, Mook Server, JavaScript. Done in collaboration with 3 members, under a week."
              sitelink="https://www.monsterindia.com/"
              link="https://github.com/pallav1998/Monster_Project"
              linkmedium="#"
              linklive="https://monsterindia.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={Ajio}
              title="Ajio"
              description="AJIO, a fashion and lifestyle brand, that offers ultimate fashion destination for styles. Trying to Developed a look alike of it, focusing mainly on searching for products according to categories, and buying any of the particular product. Tech Stack used - JavaScript, HTML, CSS. Done in collaboration with 3 members, under a week."
              link="https://github.com/vshubhams/Ajio-clone"
              linkmedium=""
              linklive="https://ajioproject.netlify.app/"
              sitelink="https://www.ajio.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
