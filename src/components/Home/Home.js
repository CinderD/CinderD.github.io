import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Assets/zixin_profile_26.png";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import { NavLink } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";

function Home() {

  return (
    <section>

      <Container fluid className="home-section" id="home" style={{backgroundColor: '#faf9f6'}}>
        {/* <Particle /> */}
        <Container className="home-content">
          <Row >
            <Col md={8} xs={12} className="home-header" style={{ flex: '0 0 70%', maxWidth: '70%' }}>
              <h1 style={{ paddingBottom: 0, color: '#4f4f4f' }} className="heading">
              Hi There!
              </h1>
              <p className="short-bio"  style={{color: '#4f4f4f'}}>I am <strong className="name-highlight">Zixin (Steven) Chen</strong>, a fourth-year PhD candidate at {}
                <a className="link" href="http://vis.cse.ust.hk/" target="_blank" rel="noreferrer">HKUST VisLab</a>, supervised by {}
                <a className="link" href="http://huamin.org/" target="_blank" rel="noreferrer">Prof. Huamin&nbsp;Qu</a>. {}
                I am currently a research intern at the {}
                <a className="link" href="https://github.com/QwenLM" target="_blank" rel="noreferrer">Qwen <span className="nb">Post-training</span> Team</a>, and previously at {}
                <a className="link" href="https://www.microsoft.com/en-us/research/group/social-computing-beijing/" target="_blank" rel="noreferrer">Microsoft Research Asia</a> with {}
                <a className="link" href="https://scholar.google.com/citations?user=5EQfAFIAAAAJ&hl=en&inst=1381320739207392350" target="_blank" rel="noreferrer">Dr. Xing&nbsp;Xie</a>. {}
                I received my B.S. in Data Science &amp; Technology from HKUST in 2022.
                </p>
                {/* <br></br> */}
                <p className="research-interest"  style={{color: '#4f4f4f'}}>
                My research spans <strong className="research-highlight">Agentic AI, Foundation Models, and <span className="nb">Human-AI</span> Interaction</strong>, {}
                specifically their applications in <strong className="research-highlight"><span className="edu-highlight">education</span></strong>.
                </p>
                <p className="research-interest"  style={{color: '#4f4f4f'}}>
                Recently, I <span className="nb">post-train</span> and evaluate <strong className="research-highlight"><span className="nb">real-world</span> educational agents</strong><span className="ref"><a href="https://chat.qwen.ai/" title="Qwen3.6 &amp; Qwen3.7 — I trained the Learn Mode" target="_blank" rel="noreferrer">1</a>,<a href="https://arxiv.org/abs/2605.14322" title="Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows (EduAgentBench)" target="_blank" rel="noreferrer">2</a>,<a href="https://arxiv.org/abs/2607.09328" title="WildTrace: Benchmarking Natural Evidence Trails in Long-Context Reasoning" target="_blank" rel="noreferrer">3</a></span> {}
                and analyze their <strong className="research-highlight">impact on humans and society</strong><span className="ref"><a href="https://arxiv.org/pdf/2602.16251" title="RelianceScope: An Analytical Framework for Examining Students&rsquo; Reliance on Generative AI Chatbots in Problem Solving (ACM L@S 2026, Best Paper Award)" target="_blank" rel="noreferrer">4</a></span>. More broadly, I have extensive experience building {}
                <strong className="research-highlight"><span className="nb">human-centered</span> AI systems for education</strong><span className="ref"><a href="https://doi.org/10.1109/TVCG.2026.3695959" title="VizQStudio: Iterative Visualization Literacy MCQs Design with Simulated Students (TVCG 2026)" target="_blank" rel="noreferrer">5</a>,<a href="https://arxiv.org/abs/2407.12423" title="StuGPTViz: A Visual Analytics Approach to Understand Student-ChatGPT Interactions (IEEE VIS 2024)" target="_blank" rel="noreferrer">6</a>,<a href="https://arxiv.org/abs/2507.20655" title="CoGrader: Transforming Instructors&rsquo; Assessment of Project Reports through Collaborative LLM Integration (ACM UIST 2025)" target="_blank" rel="noreferrer">7</a>,<a href="https://dl.acm.org/doi/10.1145/3772363.3798931" title="From Passive Consumption to Active Interaction: Exploring Interactive LLM Scaffolding to Support Learning Engagement (ACM CHI EA 2026)" target="_blank" rel="noreferrer">8</a></span> {}
                <strong className="research-highlight">and science</strong><span className="ref"><a href="https://doi.org/10.1109/TVCG.2025.3636102" title="CellScout: Visual Analytics for Mining Biomarkers in Cell State Discovery (TVCG 2025)" target="_blank" rel="noreferrer">9</a>,<a href="https://arxiv.org/abs/2604.23356" title="VeriLLMed: Interactive Visual Debugging of Medical Large Language Models with Knowledge Graphs (IEEE VIS 2026)" target="_blank" rel="noreferrer">10</a>,<a href="https://arxiv.org/abs/2506.14786" title="PIPE: Physics-Informed Position Encoding for Alignment of Satellite Images and Time Series (NeurIPS 2025)" target="_blank" rel="noreferrer">11</a></span>.
                </p>
                <p className="research-interest"  style={{color: '#4f4f4f'}}>
                I am honored to have received multiple <strong className="research-highlight"><span className="nb">Best Paper</span> / <span className="nb">Honorable Mention</span> / Oral recognitions</strong> for my research at leading conferences ({}
                <a className="link nb" href="https://arxiv.org/pdf/2602.16251" target="_blank" rel="noreferrer">ACM L@S 2026</a>, {}
                <a className="link nb" href="https://arxiv.org/abs/2512.18853" target="_blank" rel="noreferrer">IEEE PacificVis 2026</a>, {}
                <a className="link nb" href="https://arxiv.org/abs/2503.18172" target="_blank" rel="noreferrer">EMNLP 2025</a>).
                </p>
                <p className="research-interest"  style={{color: '#4f4f4f'}}>
                Meanwhile, as the team leader of the Vislab, I collaborated closely with {}
                <a className="link" href="https://web.edu.hku.hk/faculty-academics/nlaw" target="_blank" rel="noreferrer">Prof. Nancy&nbsp;Law</a> on the {}
                <a className="link" href="https://ideals.cite.hku.hk/" target="_blank" rel="noreferrer"><span className="nb">QEF-Funded</span> project</a> (20M HKD in total and 1.4M HKD for my team's share). {}
                </p>

              <div className="type-wrapper" style={{ paddingTop:20,paddingBottom:20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} xs={12} className="profile-pic-col" style={{ flex: '0 0 30%', maxWidth: '30%', paddingBottom: 20 }}>
              <img
                src={profilePic}
                alt="profile Pic"
                className="img-fluid profile-pic desktop-profile-pic"
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
