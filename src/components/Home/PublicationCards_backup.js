import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import { Container, Row, Col } from "react-bootstrap";
import UnbiasedDesignPic from "../../Assets/UnbiasedDesign.png";
import GrieferLens from "../../Assets/GrieferLens.png";
import VideoPro from "../../Assets/VideoPro.png";
import DIS24 from "../../Assets/DIS24.png";
import StuGPTVIS from "../../Assets/StuGPTVIZ.png";
import DIS24WIP from "../../Assets/DIS24WIP.png";
import EMNLP24 from "../../Assets/teaser_emnlp.png";

// import {AiOutlineFilePdf} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
function PublicationCards(props) {
  return (
    <Container>
      <Row>
        <Col md={3} className="publication-block">
          <img
            src={EMNLP24}
            alt="profile Pic"
            className="img-fluid"
            style={{ width: "240px", height: "120px", borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>

          <a className="publication-link" href="https://arxiv.org/abs/2408.12168" target="_blank" rel="noreferrer">
          FIRST: Teach A Reliable Large Language Model Through Efficient Trustworthy Distillation
          </a>

          <p className="publication-authors">
          KaShun Shum, Minrui Xu, Jianshu Zhang, <strong style={{ textDecoration: 'underline' }}>Zixin Chen</strong>, Shizhe Diao, Hanze Dong, Jipeng Zhang, and Muhammad Omer Raza
          </p>
          <p className="publication-conference">
            EMNLP 2024 
          </p>
          <FaRegFilePdf className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://arxiv.org/abs/2408.12168" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">PDF</a>}
          &nbsp;
          &nbsp;
          <BsGithub className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Code</a>}
          &nbsp;
          &nbsp;
          <MdOndemandVideo className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Video</a>}
        </Col>

      </Row>
      &nbsp;
          &nbsp;
            <Row>
        <Col md={3} className="publication-block">
          <img
            src={StuGPTVIS}
            alt="profile Pic"
            className="img-fluid"
            style={{ width: "240px", height: "120px", borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>

          <a className="publication-link" href="https://arxiv.org/abs/2407.12423" target="_blank" rel="noreferrer">
            StuGPTViz: A Visual Analytics Approach to Understand Student-ChatGPT Interactions
          </a>

          <p className="publication-authors">

            <strong style={{ textDecoration: 'underline' }}>Zixin Chen</strong>, Jiachen Wang, Meng Xia, Kento Shigyo, Dingdong Liu, Rong Zhang,  and Huamin Qu
          </p>
          <p className="publication-conference">
            IEEE VIS 2024 
          </p>
          <FaRegFilePdf className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">PDF</a>}
          &nbsp;
          &nbsp;
          <BsGithub className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Code</a>}
          &nbsp;
          &nbsp;
          <MdOndemandVideo className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Video</a>}
        </Col>

      </Row>
      &nbsp;
          &nbsp;
      <Row>
        <Col md={3} className="publication-block">
          <img
            src={DIS24}
            alt="profile Pic"
            className="img-fluid"
            style={{ width: "240px", height: "120px", borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>

          <a className="publication-link" href="https://dl.acm.org/doi/pdf/10.1145/3643834.3661517" target="_blank" rel="noreferrer">
          Towards Feature Engineering with Human and AI’s Knowledge: Understanding Data Science Practitioners’ Perceptions in Human&AI-Assisted Feature Engineering Design
          </a>

          <p className="publication-authors">
          Qian Zhu, Dakuo Wang, Shuai Ma, April Yi Wang, <strong style={{ textDecoration: 'underline' }}>Zixin Chen</strong>, Udayan Khurana, Xiaojuan Ma
          
          </p>
          <p className="publication-conference">
            ACM DIS 2024
          </p>
          <FaRegFilePdf className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://dl.acm.org/doi/pdf/10.1145/3643834.3661517" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">PDF</a>}
          &nbsp;
          &nbsp;
          <BsGithub className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Code</a>}
          &nbsp;
          &nbsp;
          <MdOndemandVideo className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Video</a>}
        </Col>

      </Row>
      &nbsp;
          &nbsp;
      <Row>
        <Col md={3} className="publication-block">
          <img
            src={DIS24WIP}
            alt="profile Pic"
            className="img-fluid"
            style={{ width: "240px", height: "120px", borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>

          <a className="publication-link" href="https://dl.acm.org/doi/pdf/10.1145/3656156.3663697" target="_blank" rel="noreferrer">
          Exploring Scaffolding Techniques for Agent-Administered Brief Cognitive Screening in Hospital Settings
          </a>

          <p className="publication-authors">
          Dingdong Liu, Sensen Gao, <strong style={{ textDecoration: 'underline' }}>Zixin Chen</strong>, Yifan Shen, Chuhan Shi, Bertram E Shi, Xiaojuan Ma
            
          </p>
          <p className="publication-conference">
            ACM DIS 2024 (WIP)
          </p>
          <FaRegFilePdf className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://dl.acm.org/doi/abs/10.1145/3656156.3663697" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">PDF</a>}
          &nbsp;
          &nbsp;
          <BsGithub className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Code</a>}
          &nbsp;
          &nbsp;
          <MdOndemandVideo className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Video</a>}
        </Col>

      </Row>
      &nbsp;
          &nbsp;
      <Row>
        <Col md={3} className="publication-block">
          <img
            src={GrieferLens}
            alt="profile Pic"
            className="img-fluid"
            style={{ width: "240px", height: "120px", borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>

          <a className="publication-link" href="https://doi.org/10.48550/arXiv.2312.14401" target="_blank" rel="noreferrer">
            Towards an Exploratory Visual Analytics System for Griefer Identification in MOBA Games
          </a>

          <p className="publication-authors">

            <strong style={{ textDecoration: 'underline' }}>Zixin Chen</strong>, Shiyi Liu, Zhihua Jin, Gaoping Huang, Yang Chao, Zhenchuan Yang, Quan Li, and Huamin Qu
          </p>
          <p className="publication-conference">
            IEEE VIS 2023 (Poster)
          </p>
          <FaRegFilePdf className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">PDF</a>}
          &nbsp;
          &nbsp;
          <BsGithub className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Code</a>}
          &nbsp;
          &nbsp;
          <MdOndemandVideo className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Video</a>}
        </Col>

      </Row>
      <br />
      <Row>
        <Col md={3} className="publication-block">
          <img
            src={VideoPro}
            alt="profile Pic"
            className="img-fluid"
            style={{ width: "240px", height: "120px", borderRadius: 0 }}
          />
        </Col>

        <Col md={9}>

          <a className="publication-link" href="https://doi.org/10.1109/TVCG.2023.3326586" target="_blank" rel="noreferrer">
            VideoPro: A Visual Analytics Approach for Interactive Video Programming
          </a>

          <p className="publication-authors">
            Jianben He, Xingbo Wang, Kam Kwai Wong, Xijie Huang, Changjian Chen, <strong style={{ textDecoration: 'underline' }}>Zixin Chen</strong>, Fengjie Wang, Min Zhu, and Huamin Qu
          </p>
          <p className="publication-conference">
            IEEE VIS 2023  
          </p>
          <FaRegFilePdf className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://doi.org/10.1109/TVCG.2023.3326586" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">PDF</a>}
          &nbsp;
          &nbsp;
          <BsGithub className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Code</a>}
          &nbsp;
          &nbsp;
          <MdOndemandVideo className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://cinderd.github.io/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Video</a>}
        </Col>

      </Row>
      <br />
      <Row>
        <Col md={3} className="publication-block">
          <img
            src={UnbiasedDesignPic}
            alt="profile Pic"
            className="img-fluid"
            style={{ width: "240px", height: "120px", borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>

          <a className="publication-link" href="https://arxiv.org/abs/2209.08751" target="_blank" rel="noreferrer">
            Bias-Aware Design for Informed Decisions: Raising
            Awareness of Self-Selection Bias in User Ratings and Reviews
          </a>

          <p className="publication-authors">

            Qian Zhu, Leo Yu-Ho Lo, Meng Xia, <strong style={{ textDecoration: 'underline' }}>Zixin Chen</strong>, and Xiaojuan Ma
          </p>
          <p className="publication-conference">
            ACM CSCW 2022
          </p>
          <FaRegFilePdf className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://arxiv.org/abs/2209.08751" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">PDF</a>}
          &nbsp;
          &nbsp;
          <BsGithub className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://github.com/stonycat/Bias-Aware-Design-CSCW22/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Code</a>}
          &nbsp;
          &nbsp;
          <MdOndemandVideo className="pub-icon" /> &nbsp;
          {<a className="pub-link" href="https://arxiv.org/abs/2209.08751" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">Video</a>}
        </Col>
      </Row>
    </Container>
  );
}
export default PublicationCards;
