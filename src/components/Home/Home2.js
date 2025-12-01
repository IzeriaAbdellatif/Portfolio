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
                <span style={{ fontWeight: "bold", color: "#523714ff" }}>Last-year engineering student</span> at INSEA, specialized in <span className="purple" style={{ fontWeight: "bold" }}>Data Science</span>. I graduated from preparatory classes with a solid foundation in <span className="purple" style={{ fontWeight: "bold" }}>mathematics and physics</span>.
                <br />
                <br />
                Inspired by the <span className="purple" style={{ fontWeight: "bold" }}>ChatGPT revolution</span>, I decided to join INSEA to contribute to the data science field. While INSEA provided me with strong mathematical foundations, I complemented my education through <span style={{ fontWeight: "bold" }}>self-directed learning</span> and hands-on projects.
                <br />
                <br />
                Today, I have a comprehensive understanding of <span className="purple" style={{ fontWeight: "bold" }}>computer science</span> with specialized expertise in <span className="purple" style={{ fontWeight: "bold" }}>data science, machine learning, and AI systems</span>—an optimized profile for the <span style={{ fontWeight: "bold" }}>Moroccan tech market</span>.
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
