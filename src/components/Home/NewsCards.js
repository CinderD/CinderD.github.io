import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// import { Container, Row, Col } from "react-bootstrap";
// import UnbiasedDesignPic from "../../Assets/UnbiasedDesign.png";

// import {AiOutlineFilePdf} from "react-icons/ai";
// import { BsGithub } from "react-icons/bs";
// import { MdOndemandVideo } from "react-icons/md";
function NewsCards(props) {
  return (
    <p className="home-about-body">
    Sep 1, 2022 Started my PhD journey.
    <br />
    Aug 4, One co-author paper accepted by CSCW 2022.
  </p>

    // <Card className="project-card-view">
    //   <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ maxHeight: "350px",top:"50%" }}/>
    //   <Card.Body style={{ position: "absolute", bottom:"20px"}}>
    //       <Card.Title >{props.title}</Card.Title>
    //       <Card.Text style={{ textAlign: "justify" }}>
    //         {props.description}
    //       </Card.Text>

    //       {props.isGithub && props.ghLink && (
    //       <Button variant="primary" href={props.ghLink} target="_blank">
    //         <BsGithub /> &nbsp;
    //         {"GitHub"}
    //       </Button>
    //       )}

    //       {"\n"}
    //       {"\n"}
    //       {props.isPaper && props.paperLink && (
    //       <Button variant="primary" href={props.paperLink} target="_blank" style={{ marginLeft: "10px" }}>
    //         <RiArticleLine /> &nbsp;
    //         {"Paper"}
    //       </Button>
    //       )}

    //       {props.isDemo && props.demoLink && (
    //         <Button
    //           variant="primary"
    //           href={props.demoLink}
    //           target="_blank"
    //           style={{ marginLeft: "10px" }}
    //         >
    //           <MdOndemandVideo /> &nbsp;
    //           {"Demo"}
    //         </Button>
    //       )}

    //       {props.isWebPageProject && props.webPageLink && (
    //         <Button
    //           variant="primary"
    //           href={props.webPageLink}
    //           target="_blank"
    //           style={{ marginLeft: "10px" }}
    //         >
    //           <MdOndemandVideo /> &nbsp;
    //           {"Web Page"}
    //         </Button>
    //       )}
    //   </Card.Body>
    // </Card>
  );
}
export default NewsCards;
