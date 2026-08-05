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
import CoGrader from "../../Assets/CoGrader.png";
import MisleadingChartQA from "../../Assets/MisleadingChartQA.png";
import ChartCynics from "../../Assets/ChartCynics.png";
import EduAgentBench from "../../Assets/EduAgentBench.png";
import WildTrace from "../../Assets/WildTrace.png";
import PIPE from "../../Assets/PIPE.png";
import VizDefender from "../../Assets/VizDefender.png";
import CellScout from "../../Assets/CellScout.png";
import DiLLS from "../../Assets/DiLLS.png";
import InteractiveScaffolding from "../../Assets/InteractiveScaffolding.png";
import TheoryOfMind from "../../Assets/TheoryOfMind.png";
import RelianceScope from "../../Assets/RelianceScope.png";
import VizQStudio from "../../Assets/VizQStudio.png";
import VeriLLMed from "../../Assets/VeriLLMed.png";
import InformalLearning from "../../Assets/InformalLearning.png";
import TACT from "../../Assets/TACT.png";

const publications = [
  {
    year: 2026,
    title: "Informal Learning Emerges in Everyday Human-LLM Interaction.",
    authors: "Zixin Chen, Haotian Li, Ziang Xiao, Huamin Qu, and Xing Xie",
    conference: "Preprint (Under Review)",
    pdfLink: "https://arxiv.org/abs/2607.17643",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: InformalLearning,
  },
  {
    year: 2026,
    title: "WildTrace: Benchmarking Natural Evidence Trails in Long-Context Reasoning.",
    authors: "Zixin Chen, Peng Liu, Haobo Li, Rui Sheng, Jianhong Tu, Xiaodong Deng, Fei Huang, Kashun Shum, Dayiheng Liu, and Huamin Qu",
    conference: "Preprint (Under Review)",
    pdfLink: "https://arxiv.org/abs/2607.09328",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: WildTrace,
  },
  {
    year: 2026,
    title: "Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows.",
    authors: "Zixin Chen, Peng Liu, Rui Sheng, Haobo Li, Jianhong Tu, Xiaodong Deng, Kashun Shum, Dayiheng Liu, and Huamin Qu",
    conference: "Preprint (Under Review)",
    pdfLink: "https://arxiv.org/abs/2605.14322",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: EduAgentBench,
  },
  {
    year: 2026,
    title: "TACT: Taxonomy-Aligned Post-Training for Pedagogically Adaptive English Tutoring.",
    authors: "Dongjie Yang, Siyan Lin, Leixian Shen, Rui Sheng, Huamin Qu, Zixin Chen",
    conference: "Preprint (Under Review)",
    corresponding: true,
    representative: true,
    pdfLink: "https://arxiv.org/abs/2608.03952",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: TACT,
  },
  {
    year: 2026,
    title: "Navigating the Mirage: A Dual-Path Agentic Framework for Robust Misleading Chart Question Answering.",
    authors: "Yanjie Zhang, Yafei Li, Rui Sheng, Zixin Chen, Yanna Lin, Huamin Qu, Lei Chen, and Yushi Sun",
    conference: "ACM MM 2026 (CCF-A/CORE-A*)",
    pdfLink: "https://arxiv.org/abs/2603.28583",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: ChartCynics,
  },
  {
    year: 2026,
    title: "VizQStudio: Iterative Visualization Literacy MCQs Design with Simulated Students.",
    authors: "Zixin Chen, Yuhang Zeng, Sicheng Song, Yanna Lin, Xian Xu, Huamin Qu, Meng Xia",
    conference: "IEEE Transactions on Visualization and Computer Graphics (CCF-A)",
    pdfLink: "https://doi.org/10.1109/TVCG.2026.3695959",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: VizQStudio,
  },
  {
    year: 2026,
    title: "Does Theory of Mind Improvements Really Benefit Human-AI Interactions? Empirical Findings from Interactive Evaluations.",
    authors: "Nanxu Gong, Zixin Chen, Haotian Li, Zishu Zhao, Jianxun Lian, Huamin Qu, Yanjie Fu, and Xing Xie",
    conference: "ACL 2026 (Findings)",
    pdfLink: "https://cinderd.github.io/",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: TheoryOfMind,
  },
  {
    year: 2026,
    title: "RelianceScope: An Analytical Framework for Examining Students' Reliance on Generative AI Chatbots in Problem Solving.",
    authors: "Hyoungwook Jin, Minju Yoo, Jieun Han, Zixin Chen, So-Yeon Ahn, and Xu Wang",
    conference: "ACM L@S 2026",
    award: "🏅 Best Paper Award",
    pdfLink: "https://arxiv.org/pdf/2602.16251",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: RelianceScope,
  },
  {
    year: 2026,
    title: "From Passive Consumption to Active Interaction: Exploring Interactive LLM Scaffolding to Support Learning Engagement.",
    authors: "Zixin Chen, Haotian Li, Zhe Liu, Huamin Qu, and Xing Xie",
    conference: "ACM CHI EA 2026",
    representative: false,
    pdfLink: "https://dl.acm.org/doi/10.1145/3772363.3798931",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: InteractiveScaffolding,
  },

  {
    year: 2026,
    title: "DiLLS: Interactive Diagnosis of LLM-based Multi-agent Systems via Layered Summary of Agent Behaviors.",
    authors: "Rui Sheng, Yukun Yang, Chuhan Shi, Yanna Lin, Zixin Chen, Huamin Qu, and Furui Cheng",
    conference: "ACM CHI 2026 (CCF-A/CORE-A*)",
    pdfLink: "https://cinderd.github.io/",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: DiLLS,
  },
  {
    year: 2026,
    title: "VeriLLMed: Interactive Visual Debugging of Medical Large Language Models with Knowledge Graphs.",
    authors: "Yurui Xiang, Xingyi Mao, Rui Sheng, Zixin Chen, Zelin Zang, Yuyang Wu, Haipeng Zeng, Huamin Qu, Yushi Sun, and Yanna Lin",
    conference: "IEEE VIS 2026 (CCF-A)",
    representative: false,
    pdfLink: "https://arxiv.org/abs/2604.23356",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: VeriLLMed,
  },
  {
    year: 2025,
    title: "CoGrader: Transforming Instructors' Assessment of Project Reports through Collaborative LLM Integration.",
    authors: "Zixin Chen, Jiachen Wang, Yumeng Li, Haobo Li, Chuhan Shi, Rong Zhang, and Huamin Qu",
    conference: "ACM UIST 2025 (CCF-A/CORE-A*)",
    pdfLink: "https://arxiv.org/abs/2507.20655",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: CoGrader,
  },
  {
    year: 2025,
    title: "Unmasking Deceptive Visuals: Benchmarking Multimodal Large Language Models on Misleading Chart Question Answering",
    authors: "Zixin Chen, Sicheng Song, Kashun Shum, Yanna Lin, Rui Sheng, and Huamin Qu",
    conference: "EMNLP 2025 (CORE-A*)",
    award: "🏅 Oral Presentation",
    pdfLink: "https://arxiv.org/abs/2503.18172",
    codeLink: "https://github.com/CinderD/MisleadingChartQA",
    videoLink: "https://cinderd.github.io/",
    imgSrc: MisleadingChartQA,
  },
  {
    year: 2025,
    title: "VizDefender: Unmasking Visualization Tampering through Proactive Localization and Intent Inference.",
    authors: "Sicheng Song, Yanjie Zhang, Zixin Chen, Huamin Qu, Changbo Wang, and Chenhui Li",
    conference: "IEEE Transactions on Visualization and Computer Graphics (CCF-A)",
    award: "🏅 Best Paper Honorable Mention",
    pdfLink: "https://arxiv.org/abs/2512.18853",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: VizDefender,
  },
  {
    year: 2025,
    title: "CellScout: Visual Analytics for Mining Biomarkers in Cell State Discovery.",
    authors: "Rui Sheng, Zelin Zang, Jiachen Wang, Yan Luo, Zixin Chen, Yan Zhou, Shaolun Ruan, and Huamin Qu",
    conference: "IEEE Transactions on Visualization and Computer Graphics (CCF-A)",
    pdfLink: "https://doi.org/10.1109/TVCG.2025.3636102",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: CellScout,
  },
  {
    year: 2025,
    title: "PIPE: Physics-Informed Position Encoding for Alignment of Satellite Images and Time Series",
    authors: "Haobo Li, Eunseo Jung, Zixin Chen, Zhaowei Wang, Yueya Wang, Huamin Qu, Alexis Kai Hon Lau",
    conference: "NeurIPS 2025 (CCF-A/CORE-A*)",
    pdfLink: "https://arxiv.org/abs/2506.14786",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: PIPE,
  },
  {
    year: 2024,
    title: "StuGPTViz: A Visual Analytics Approach to Understand Student-ChatGPT Interactions",
    authors: "Zixin Chen, Jiachen Wang, Meng Xia, Kento Shigyo, Dingdong Liu, Rong Zhang, and Huamin Qu",
    conference: "IEEE VIS 2024 (CCF-A/CORE-A*)",
    pdfLink: "https://arxiv.org/abs/2407.12423",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: StuGPTVIS,
  },
  {
    year: 2024,
    title: "FIRST: Teach A Reliable Large Language Model Through Efficient Trustworthy Distillation",
    authors: "KaShun Shum, Minrui Xu, Jianshu Zhang, Zixin Chen, Shizhe Diao, Hanze Dong, Jipeng Zhang, and Muhammad Omer Raza",
    conference: "EMNLP 2024  (Main Conference) (CORE-A*)",
    pdfLink: "https://arxiv.org/abs/2408.12168",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: EMNLP24,
  },
  {
    year: 2024,
    title: "Towards Feature Engineering with Human and AI's Knowledge: Understanding Data Science Practitioners' Perceptions in Human&AI-Assisted Feature Engineering Design",
    authors: "Qian Zhu, Dakuo Wang, Shuai Ma, April Yi Wang, Zixin Chen, Udayan Khurana, Xiaojuan Ma",
    conference: "ACM DIS 2024 (CORE-A)",
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
    representative: false,
    pdfLink: "https://arxiv.org/abs/2312.14401",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: GrieferLens,
  },
  {
    year: 2023,
    title: "VideoPro: A Visual Analytics Approach for Interactive Video Programming",
    authors: "Jianben He, Xingbo Wang, Kam Kwai Wong, Xijie Huang, Changjian Chen, Zixin Chen, Fengjie Wang, Min Zhu, and Huamin Qu",
    conference: "IEEE VIS 2023 (CCF-A/CORE-A*)",
    pdfLink: "https://doi.org/10.1109/TVCG.2023.3326586",
    codeLink: "https://cinderd.github.io/",
    videoLink: "https://cinderd.github.io/",
    imgSrc: VideoPro,
  },
  {
    year: 2022,
    title: "Bias-Aware Design for Informed Decisions: Raising Awareness of Self-Selection Bias in User Ratings and Reviews",
    authors: "Qian Zhu, Leo Yu-Ho Lo, Meng Xia, Zixin Chen, and Xiaojuan Ma",
    conference: "ACM CSCW 2022 (CCF-A/CORE-A*)",
    pdfLink: "https://arxiv.org/abs/2209.08751",
    codeLink: "https://github.com/stonycat/Bias-Aware-Design-CSCW22/",
    videoLink: "https://arxiv.org/abs/2209.08751",
    imgSrc: UnbiasedDesignPic,
  }
  // Add more publications here...
];

const myName = "Zixin Chen";

// Representative = first-author papers OR award-winning papers (🏅 in the venue).
// An explicit `representative: true/false` on a publication overrides this rule.
const isRepresentative = (pub) =>
  typeof pub.representative === "boolean"
    ? pub.representative
    : pub.authors.trim().startsWith(myName) || Boolean(pub.award) || /🏅/.test(pub.conference);

function PublicationCards({ showAll, onToggle }) {
  const visiblePublications = showAll
    ? publications
    : publications.filter(isRepresentative);

  const groupedPublications = visiblePublications.reduce((acc, pub) => {
    acc[pub.year] = acc[pub.year] || [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  return (
    <Container>
      {Object.keys(groupedPublications)
        .sort((a, b) => b - a) // Sort years in descending order
        .map((year) => (
          <React.Fragment key={year}>
            {showAll && (
              <Row>
                <Col md={12} xs={12} className="year-block">
                  <h1 className="year-large">{year}</h1>
                </Col>
              </Row>
            )}
            <Row>
              <Col md={12}>
              {groupedPublications[year].map((pub, index) => (
                <Row key={index} className="publication-card">
                  <Col md={3} xs={12} className="publication-block">
                    <img
                      src={pub.imgSrc}
                      alt="publication pic"
                      className="img-fluid"
                      style={{ borderRadius: 0 }}
                    />
                  </Col>
                  <Col md={9} xs={12}>
                    <a className="publication-link" href={pub.pdfLink} target="_blank" rel="noreferrer">
                      {pub.title}
                    </a>
                    <p className="publication-authors">
                      {pub.authors.split(", ").map((author, i) => {
                        // Replace all spaces in author name with non-breaking space to prevent line breaks
                        const authorWithNBSP = author.replace(/\s+/g, '\u00A0');
                        return (
                          <span key={i}>
                            {author === myName ? (
                              <>
                                <strong style={{ textDecoration: "underline" }}>{authorWithNBSP}</strong>
                                {pub.corresponding && <sup className="corr-mark">†</sup>}
                              </>
                            ) : (
                              authorWithNBSP
                            )}
                            {i < pub.authors.split(", ").length - 1 && ", "}
                          </span>
                        );
                      })}
                    </p>
                    {pub.corresponding && (
                      <p className="publication-corresponding">† Corresponding Author</p>
                    )}
                    <p className="publication-conference">{pub.conference}</p>
                    {pub.award && <span className="pub-award">{pub.award}</span>}
                    <div className="publication-links">
                      {pub.pdfLink && (
                        <span className="pub-link-wrapper">
                          <FaRegFilePdf className="pub-icon" />
                          <a className="pub-link" href={pub.pdfLink} target="_blank" rel="noreferrer">
                            PDF
                          </a>
                        </span>
                      )}
                      {pub.codeLink && (
                        <span className="pub-link-wrapper">
                          <BsGithub className="pub-icon" />
                          <a className="pub-link" href={pub.codeLink} target="_blank" rel="noreferrer">
                            Code
                          </a>
                        </span>
                      )}
                      {pub.videoLink && (
                        <span className="pub-link-wrapper">
                          <MdOndemandVideo className="pub-icon" />
                          <a className="pub-link" href={pub.videoLink} target="_blank" rel="noreferrer">
                            Video
                          </a>
                        </span>
                      )}
                    </div>
                  </Col>
                </Row>
              ))}
              </Col>
            </Row>
          </React.Fragment>
        ))}
      <Row>
        <Col md={12} className="pub-toggle-wrapper">
          <button
            type="button"
            className="pub-toggle"
            onClick={onToggle}
            aria-expanded={showAll}
          >
            {showAll
              ? "Show representative only ▴"
              : `Show all publications (${publications.length}) ▾`}
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default PublicationCards;
