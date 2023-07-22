import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import { Row, Col } from "react-bootstrap";
import UnbiasedDesignPic from "../../Assets/UnbiasedDesign.png";

// import {AiOutlineFilePdf} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
function PublicationCards(props) {
  return (
    <Row>
      <Col md={3} className="publication-block">
        <img
          src={UnbiasedDesignPic}
          alt="profile Pic"
          className="img-fluid"
          style={{ maxHeight: "120px", borderRadius: 0 }}
        />
      </Col>
      <Col md={9}>

        <a className="publication-link" href="https://arxiv.org/abs/2209.08751" target="_blank" rel="noreferrer">
          Bias-Aware Design for Informed Decisions: Raising
          Awareness of Self-Selection Bias in User Ratings and Reviews
        </a>

        <p className="publication-authors">

          Qian Zhu, Leo Yu-Ho Lo, Meng Xia, <strong style={{ textDecoration: 'underline' }}>ZiXin Chen</strong>, Xiaojuan Ma
        </p>
        <p className="publication-conference">
          CSCW 2022
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
      <Col md={9}>

        <a className="publication-link" href="https://arxiv.org/abs/2209.08751" target="_blank" rel="noreferrer">
          Bias-Aware Design for Informed Decisions: Raising
          Awareness of Self-Selection Bias in User Ratings and Reviews
        </a>

        <p className="publication-authors">

          Qian Zhu, Leo Yu-Ho Lo, Meng Xia, <strong style={{ textDecoration: 'underline' }}>ZiXin Chen</strong>, Xiaojuan Ma
        </p>
        <p className="publication-conference">
          CSCW 2022
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
      <Col md={9}>

        <a className="publication-link" href="https://arxiv.org/abs/2209.08751" target="_blank" rel="noreferrer">
          Bias-Aware Design for Informed Decisions: Raising
          Awareness of Self-Selection Bias in User Ratings and Reviews
        </a>

        <p className="publication-authors">

          Qian Zhu, Leo Yu-Ho Lo, Meng Xia, <strong style={{ textDecoration: 'underline' }}>ZiXin Chen</strong>, Xiaojuan Ma
        </p>
        <p className="publication-conference">
          CSCW 2022
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

  );
}
export default PublicationCards;
