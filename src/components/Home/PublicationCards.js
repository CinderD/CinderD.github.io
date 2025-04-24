import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegFilePdf } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import "./css/PublicationCards.css";

import UnbiasedDesignPic from "../../Assets/UnbiasedDesign.png";
import GrieferLens from "../../Assets/GrieferLens.png";
import VideoPro from "../../Assets/VideoPro.png";
import DIS24 from "../../Assets/DIS24.png";
import StuGPTVIS from "../../Assets/StuGPTVIZ.png";
import DIS24WIP from "../../Assets/DIS24WIP.png";
import EMNLP24 from "../../Assets/teaser_emnlp.png";

const publications = [
  
  {
    year: 2024,
    title: "StuGPTViz: A Visual Analytics Approach to Understand Student-ChatGPT Interactions",
    authors: "Zixin Chen, Jiachen Wang, Meng Xia, Kento Shigyo, Dingdong Liu, Rong Zhang, and Huamin Qu",
    conference: "IEEE VIS 2024",
    pdfLink: "https://arxiv.org/abs/2407.12423",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: StuGPTVIS,
  },
  {
    year: 2024,
    title: "FIRST: Teach A Reliable Large Language Model Through Efficient Trustworthy Distillation",
    authors: "KaShun Shum, Minrui Xu, Jianshu Zhang, Zixin Chen, Shizhe Diao, Hanze Dong, Jipeng Zhang, and Muhammad Omer Raza",
    conference: "EMNLP 2024",
    pdfLink: "https://arxiv.org/abs/2408.12168",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: EMNLP24,
  },
  {
    year: 2024,
    title: "Towards Feature Engineering with Human and AI’s Knowledge: Understanding Data Science Practitioners’ Perceptions in Human&AI-Assisted Feature Engineering Design",
    authors: "Qian Zhu, Dakuo Wang, Shuai Ma, April Yi Wang, Zixin Chen, Udayan Khurana, Xiaojuan Ma",
    conference: "ACM DIS 2024",
    pdfLink: "https://dl.acm.org/doi/pdf/10.1145/3643834.3661517",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: DIS24,
  },
  {
    year: 2024,
    title: "Exploring Scaffolding Techniques for Agent-Administered Brief Cognitive Screening in Hospital Settings",
    authors: " Dingdong Liu, Sensen Gao, Zixin Chen, Yifan Shen, Chuhan Shi, Bertram E Shi, Xiaojuan Ma",
    conference: "ACM DIS 2024 (WIP)",
    pdfLink: "https://dl.acm.org/doi/abs/10.1145/3656156.3663697",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: DIS24WIP,
  },
  {
    year: 2023,
    title: "Towards an Exploratory Visual Analytics System for Griefer Identification in MOBA Games",
    authors: "Zixin Chen, Shiyi Liu, Zhihua Jin, Gaoping Huang, Yang Chao, Zhenchuan Yang, Quan Li, and Huamin Qu",
    conference: "IEEE VIS 2023 (Poster)",
    pdfLink: "https://arxiv.org/abs/2312.14401",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: GrieferLens,
  },
  {
    year: 2023,
    title: "VideoPro: A Visual Analytics Approach for Interactive Video Programming",
    authors: "Jianben He, Xingbo Wang, Kam Kwai Wong, Xijie Huang, Changjian Chen, Zixin Chen, Fengjie Wang, Min Zhu, and Huamin Qu",
    conference: "IEEE VIS 2023",
    pdfLink: "https://doi.org/10.1109/TVCG.2023.3326586",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: VideoPro,
  },
  {
    year: 2022,
    title: "Bias-Aware Design for Informed Decisions: Raising Awareness of Self-Selection Bias in User Ratings and Reviews",
    authors: "Qian Zhu, Leo Yu-Ho Lo, Meng Xia, Zixin Chen, and Xiaojuan Ma",
    conference: "ACM CSCW 2022",
    pdfLink: "https://arxiv.org/abs/2209.08751",
    codeLink: "https://github.com/stonycat/Bias-Aware-Design-CSCW22/",
    videoLink: "https://arxiv.org/abs/2209.08751",
    imgSrc: UnbiasedDesignPic,
  }
  // Add more publications here...
];

function PublicationCards() {
  const myName = "Zixin Chen";
  const groupedPublications = publications.reduce((acc, pub) => {
    acc[pub.year] = acc[pub.year] || [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  return (
    <Container>
      {Object.keys(groupedPublications)
        .sort((a, b) => b - a) // Sort years in descending order
        .map((year) => (
          <Row key={year}>
            <Col md={12} xs={12} className="year-block"> {/* 在小屏幕上年份占据整行 */}
          <h1 className="year-large">{year}</h1>
        </Col>
            <Col md={11}>
              {groupedPublications[year].map((pub, index) => (
                <Row key={index} className="publication-card">
                  <Col md={3} className="publication-block">
                    <img
                      src={pub.imgSrc}
                      alt="publication pic"
                      className="img-fluid"
                      style={{ width: "240px", height: "120px", borderRadius: 0 }}
                    />
                  </Col>
                  <Col md={9}>
                    
                    <a className="publication-link" href={pub.pdfLink} target="_blank" rel="noreferrer">
                      {pub.title}
                    </a>
                    <p className="publication-authors">
                      {pub.authors.split(", ").map((author, i) => (
                        <span key={i}>
                          {author === myName ? (
                            <strong style={{ textDecoration: "underline" }}>{author}</strong>
                          ) : (
                            author
                          )}
                          {i < pub.authors.split(", ").length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <p className="publication-conference">{pub.conference}</p>
                    <FaRegFilePdf className="pub-icon" /> &nbsp;
                    {pub.pdfLink && (
                      <a className="pub-link" href={pub.pdfLink} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                        PDF
                      </a>
                    )}
                    &nbsp;&nbsp;
                    <BsGithub className="pub-icon" /> &nbsp;
                    {pub.codeLink && (
                      <a className="pub-link" href={pub.codeLink} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    )}
                    &nbsp;&nbsp;
                    <MdOndemandVideo className="pub-icon" /> &nbsp;
                    {pub.videoLink && (
                      <a className="pub-link" href={pub.videoLink} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                        Video
                      </a>
                    )}
                  </Col>
                </Row>
              ))}
              &nbsp;
              &nbsp;
            </Col>
          </Row>
        ))}
    </Container>
  );
}

export default PublicationCards;
