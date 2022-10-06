import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import UnbiasedDesignPic from "../../Assets/UnbiasedDesign.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" >
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "1.6em" }}>
            <span className="black"> News </span>
            </h1>
            <p className="home-about-body">
              Sep 1, 2022 Started my PhD journey.
              <br />
              Aug 4, One co-author paper accepted by CSCW 2022 (CCF-A).
            </p>
            <h1 style={{ fontSize: "1.6em" }}>
            <span className="black"> Publications </span>
            </h1>
            <Row>
              <Col md={3} className="publication-block">

                <img
                  src={UnbiasedDesignPic}
                  alt="profile Pic"
                  className="img-fluid"
                  style={{ maxHeight: "120px", borderRadius:0 }}
                />
              </Col>
              <Col md = {6}>
                <p className="publication-title">
                  Bias-Aware Design for Informed Decisions: Raising
                  Awareness of Self-Selection Bias in User Ratings and Reviews
                </p>
                <p className="publication-title">
                
                Qian Zhu, Leo Yu-Ho Lo, Meng Xia, <strong style={{textDecoration: 'underline'}}>ZiXin Chen</strong>, Xiaojuan Ma
                </p>
                <p className="publication-title">
                CSCW 2022
                </p>
              </Col>
            </Row>
          </Col>
          
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="black">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
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
