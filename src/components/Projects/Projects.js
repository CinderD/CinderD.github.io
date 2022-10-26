import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import PsyPlus from "../../Assets/Projects/PsyLogo.png";
import CReKG from "../../Assets/Projects/FullKGCircle.png";
// import suicide from "../../Assets/Projects/suicide.png";
import VisComplex from "../../Assets/Projects/VisComplex.png";
import CReKGPaper from "../../Assets/Projects/FYP_A_.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Project  Gallery
        </h1>
        <p style={{ color: "#181a27" }}>
          Here is the collection of my recent projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CReKG}
              isGithub={true}
              isPaper={true}
              isDemo={true}
              title="CReKG"
              description="A Knowledge-Graph-Based Contract Review System. This project researches automated contract review based on the construction of a legal Knowledge Graph that focuses on solving the lack of legal knowledge problem."
              ghLink="https://github.com/CinderD/CReKG"
              demoLink="https://cse.hkust.edu.hk/ug/fyp/posters/gallery/2021-2022/86_SYQ2_Video.mp4"
              paperLink={CReKGPaper}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VisComplex}
              isGithub={true}
              isPaper={true}
              isDemo={true}
              title="VisComplex"
              description="This is the webpage I developed for our submitted paper: ''The Data Visualization Looks Too Complicated!'':  On the Growing Visual Complexity of Visualization Design (TVCG 2022). The link to the paper will be updated later. "
              ghLink="https://github.com/viscomplex"
              demoLink="https://viscomplex.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PsyPlus}
              isGithub={true}
              isWebPageProject={true}
              title="Psy+"
              description="Psy+ is an early stage metaverse project focus on mental health. Our goal is to advance the mental health industry by creating chatbots and online counseling. The details of this project is to be added. "
              ghLink="https://github.com/psy-plus"
              webPageLink="https://psy-plus.github.io/"              
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isGithub={true}
              isPaper={false}
              isWebPageProject={true}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isGithub={true}
              isPaper={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isGithub={true}
              isPaper={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
