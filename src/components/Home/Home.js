import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Assets/czx_pic_new.jpg";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import { NavLink } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";

function Home() {

  return (
    <section>

      <Container fluid className="home-section" id="home" style={{backgroundColor: '#d9dbdb'}}>
        {/* <Particle /> */}
        <Container className="home-content">
          <Row >
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0, color: '#4f4f4f' }} className="heading">
              Hi There!
              </h1>
              <p className="short-bio"  style={{color: '#4f4f4f'}}>I am <strong>Zixin (Steven) CHEN</strong>, a third-year PhD candidate at {}
                <a className="link" href="http://vis.cse.ust.hk/" target="_blank" rel="noreferrer"><strong>HKUST VisLab</strong></a>, supervised by {}
                <a className="link" href="http://huamin.org/" target="_blank" rel="noreferrer"><strong>Prof. Huamin Qu</strong></a>. My research centers on {}
                <strong>Data Visualization</strong> and <strong>Human-AI Collaboration</strong>, with a particular emphasis on leveraging them in <strong>LLM for Education</strong>.
                <p></p>
                <p> 
                I received my B.S. degree from HKUST in 2022, with major in Data Science & Technology 
                and minor in Business. During my undergraduate study, I was honored to have worked with {}
                <a className="link" href="https://www.cse.ust.hk/~mxj/" target="_blank" rel="noreferrer">Prof. Xiaojuan MA</a> and {}
                <a className="link" href="https://www.cse.ust.hk/~yqsong/" target="_blank" rel="noreferrer">Prof. Yangqiu SONG</a>.
                </p>

                <p>
                If you are interested in my research, please feel free to contact me via email: <strong>zchendf@connect.ust.hk</strong>
                </p>
              </p>

 

              
              <div style={{ paddingLeft: 50, paddingTop:20,paddingBottom:20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, }}>
              <img
                src={profilePic}
                alt="profile Pic"
                className="img-fluid"
                style={{ maxHeight: "270px", marginLeft: 100 ,marginTop:60, borderRadius:0 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
