import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <div>
            <img
              src="data:image/png;base64,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"
              alt="logo"
              style={{ height: "50px", borderRadius: "10px" }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent:"flex-end" }}
        >
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "6px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "6px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "6px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "6px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://medium.com/@jain.pallav1998"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "6px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/pallav1998"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
