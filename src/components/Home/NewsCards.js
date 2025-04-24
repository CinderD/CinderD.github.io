import React from 'react';
import './css/NewsCards.css'; // 确保有对应的样式文件
import newsIcon from '../../Assets/news-icon.png'; // 引入图标路径
const newsItems = [
  {
    date: "Sep. 20, 2024",
    content: [
      { text: "One co-author full paper accepted by ", highlight: false, link: null },
      { text: "EMNLP 2024 (main)", highlight: true, link: "https://2024.emnlp.org/" },
      { text: " (CORE-A*)", highlight: false, link: null }
    ]
  },
  {
    date: "Sep. 04, 2024",
    content: [
      { text: "Our tender for the Design-aware Learning Analytics and Visualization Engine has been accepted and awarded about ", highlight: false, link: null },
      { text: "1.4M HKD by the Quality Education Fund! ", highlight: true, link: null },
      { text: "We will be collaborating with the HKU CITE team, and I am honored to serve as the ", highlight: false, link: null },
      { text: "Project Leader for VisLab!", highlight: true, link: null },
      // { text: " for VisLab!", highlight: false, link: null }
    ]
  },
  {
    date: "July. 16, 2024",
    content: [
      { text: "One first-author full paper accepted by ", highlight: false, link: null },
      { text: "IEEE VIS 2024 (TVCG 2024)", highlight: true, link: "https://ieeevis.org" },
      { text: " (CCF-A/SCI & JCR Q1)", highlight: false, link: null }
    ]
  },
  {
    date: "July. 16, 2024",
    content: [
      { text: "Our research proposal Visual Analytics of Student-AI Interaction Data for Generative AI-Assisted Learning was awarded about ", highlight: false, link: null },
      { text: "1M HKD by the General Research Fund!", highlight: true, link: null }
    ]
  },
  {
    date: "May. 05, 2024",
    content: [
      { text: "Two co-author paper accepted by ", highlight: false, link: null },
      { text: "ACM DIS 2024", highlight: true, link: "https://dis.acm.org/2024/" },
      { text: " (CORE-A)", highlight: false, link: null }
    ]
  },
  
];

const newsItemsOld = [
  {
    date: "Oct. 03, 2023",
    content: "I passed the Ph.D qualification exam and now become a Ph.D candidate.",
    highlight: "",
    extra: ""
  },
  {
    date: "July 22, 2023",
    content: "One first-author poster paper accepted by ",
    highlight: "IEEE VIS 2023",
    extra: ""
  },
  {
    date: "July 16, 2023",
    content: "One co-author paper accepted by ",
    highlight: "IEEE VIS 2023",
    extra: "(CCF-A)"
  },
  {
    date: "Sep 1, 2022",
    content: "Started my PhD journey.",
    highlight: "",
    extra: ""
  },
  {
    date: "Aug 4, 2022",
    content: "One co-author paper accepted by ",
    highlight: "ACM CSCW 2022",
    extra: "(CCF-A)"
  }
];

function NewsCards() {
  return (
    <div className="news-cards">
      {newsItems.map((news, index) => (
        <div key={index} className="news-item">
        <span className="news-date">
          <img src={newsIcon} alt="news icon" className="news-icon" />
          {news.date}:
        </span>
        <span className="news-content">
          {news.content.map((part, idx) => (
            part.link ? (
              <a key={idx} href={part.link} target="_blank" rel="noopener noreferrer">
                {part.highlight ? <strong>{part.text}</strong> : part.text}
              </a>
            ) : (
              <span key={idx}>
                {part.highlight ? <strong>{part.text}</strong> : part.text}
              </span>
            )
          ))}
        </span>
      </div>
      
      ))}
    </div>
  );
}

export default NewsCards;


