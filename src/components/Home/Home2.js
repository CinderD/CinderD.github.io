import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {AiOutlineFilePdf} from "react-icons/ai";
// import { BsGithub } from "react-icons/bs";
// import { MdOndemandVideo } from "react-icons/md";
import PublicationCard from "./PublicationCards";
import NewsCard from "./NewsCards";
import TeachingCard from "./TeachingCards";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import UnbiasedDesignPic from "../../Assets/UnbiasedDesign.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" >
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "1.6em" }}>
              <span className="black"> News </span>
            </h1>
            <NewsCard />
            <h1 style={{ fontSize: "1.6em" }}>
              <span className="black"> Publications </span>
              
            </h1>
            <PublicationCard />

            <h1 style={{ fontSize: "1.6em" }}>
              <span className="black"> Teaching </span>
            </h1>
            <TeachingCard />

         
          </Col>


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
                  href="https://scholar.google.com/citations?user=99HlmSkAAAAJ&hl=zh-CN&inst=1381320739207392350"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaGraduationCap />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zixin-steven-chen-669253204/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/CinderD"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/CinderdZixin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
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
