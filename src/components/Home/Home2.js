import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile picture for logo.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <span style={{ fontWeight: "bold", color: "#523714ff" }}>Genior IT man</span>, who found himself inside the world of <span className="purple" style={{ fontWeight: "bold" }}>IT</span> after studying for two years in preparatory classes and chose the <span className="purple" style={{ fontWeight: "bold" }}>data science</span> sector to follow the trend of <span className="purple" style={{ fontWeight: "bold" }}>AI</span>.
              <br />
              <br />
              Actually, I am a <span style={{ fontWeight: "bold" }}>motivated man</span> that doesn't know what to do exactly.
              <br />
              <br />
              I'm currently trying different things, and I hope to find what I want and where I belong.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IzeriaAbdellatif"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdellatif-izeria-400b37285/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abdellatif_izeria?igsh=bnBmbnhob3BrdHo="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
