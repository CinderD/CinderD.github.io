import React from 'react';
import './css/NewsCards.css'; // 确保有对应的样式文件
import newsIcon from '../../Assets/news-icon.png'; // 引入图标路径
const newsItems = [
  {
    date: "Jul. 15, 2026",
    content: [
      { text: "One co-author full paper accepted by ", highlight: false, link: null },
      { text: "IEEE VIS 2026", highlight: true, link: "https://arxiv.org/abs/2604.23356" },
      { text: " (CCF-A)", highlight: false, link: null }
    ]
  },
  {
    date: "Jul. 11, 2026",
    content: [
      { text: "One co-author full paper accepted by ", highlight: false, link: null },
      { text: "ACM MM 2026", highlight: true, link: "https://arxiv.org/abs/2603.28583" },
      { text: " (CCF-A/CORE-A*)", highlight: false, link: null }
    ]
  },
  {
    date: "Jul. 07, 2026",
    content: [
      { text: "🏅 Our paper ", highlight: false, link: null },
      { text: "RelianceScope", highlight: true, link: "https://arxiv.org/pdf/2602.16251" },
      { text: " won the ", highlight: false, link: null },
      { text: "Best Paper Award", highlight: true, award: true, link: "https://www.linkedin.com/posts/yan-timanovsky-7725165_bestpaperaward-reliancescope-bestpaper-ugcPost-7480638173820108801-XAIs/" },
      { text: " at ACM L@S 2026! Congrats the team!", highlight: false, link: null },
    ]
  },
  {
    date: "May. 20, 2026",
    content: [
      { text: "Qwen3.6 & Qwen3.7 are released! As a ", highlight: false, link: null },
      { text: "core contributor", highlight: true, link: null },
      { text: ", I trained the ", highlight: false, link: null },
      { text: "Learn Mode", highlight: true, link: null },
      { text: " for both — feel free to try it on ", highlight: false, link: null },
      { text: "Qwen Chat", highlight: true, link: "https://chat.qwen.ai/" },
      { text: ".", highlight: false, link: null }
    ]
  },
  {
    date: "May. 09, 2026",
    content: [
      { text: "One first-author full paper accepted by ", highlight: false, link: null },
      { text: "IEEE Transactions on Visualization and Computer Graphics", highlight: true, link: "https://arxiv.org/pdf/2603.00994" },
      { text: " (CCF-A/CORE-A*)", highlight: false, link: null }
    ]
  },
  {
    date: "Apr. 22, 2026",
    content: [
      { text: "🏅 Our paper won the IEEE PacificVIS'26 ", highlight: false, link: null },
      { text: "Best Paper Honorable Mention Award", highlight: true, award: true, link: null },
      { text: " (TVCG Track). Congrats the team!", highlight: false, link: null },
    ]
  },
  {
    date: "Apr. 07, 2026",
    content: [
      { text: "Four papers accepted to ", highlight: false, link: null },
      { text: "ACM CHI 2026 & CHI EA 2026", highlight: true, link: "https://chi2026.acm.org/" },
      { text: " & ", highlight: false, link: null },
      { text: "ACL 2026", highlight: true, link: "https://2026.aclweb.org/" },
      { text: " & ", highlight: false, link: null },
      { text: "ACM L@S 2026.", highlight: false, link: "https://www.solaresearch.org/events/lak/lak26/" },
      { text: "  Congrats the team!", highlight: false, link: null },
    ]
  },
  {
    date: "Feb. 05, 2026",
    content: [
      { text: "Honored to start my internship at ", highlight: false, link: null },
      { text: "Qwen Team, Alibaba Group", highlight: true, link: "https://github.com/QwenLM" },
      { text: "! I will be working with ", highlight: false, link: null },
      { text: "Peng Liu", highlight: true, link: null },
      { text: " and ", highlight: false, link: null },
      { text: "Jianhong Tu", highlight: true, link: "https://scholar.google.com/citations?hl=en&user=EvVKNrAAAAAJ&inst=1381320739207392350" },
      { text: " @ ", highlight: false, link: null },
      { text: "Agent Team, Foundation Model Group", highlight: true, link: "https://github.com/QwenLM/Qwen-Agent" },
      { text: ", under the supervision of ", highlight: false, link: null },
      { text: "Junyang Lin", highlight: true, link: "https://scholar.google.com/citations?user=qp6IwtgAAAAJ&hl=zh-CN" },
      { text: ".", highlight: false, link: null }
    ]
  }
];

const newsItemsOld = [
  {
    date: "Jan. 10, 2025",
    content: [
      { text: "Our research proposal LLM-Driven Curriculum Design and Talent Development was awarded about ", highlight: false, link: null },
      { text: "600K HKD by the JC-AI Research Scheme (HKUST & EduHK)!", highlight: true, link: null }
    ]
  },
  {
    date: "Sep. 20, 2024",
    content: [
      { text: "One co-author full paper accepted by ", highlight: false, link: null },
      { text: "EMNLP 2024 (Main Conference)", highlight: true, link: "https://2024.emnlp.org/" },
      { text: " (CORE-A*)", highlight: false, link: null }
    ]
  },
  {
    date: "Sep. 04, 2024",
    content: [
      { text: "Our tender for the Design-aware Learning Analytics and Visualization Engine has been accepted and awarded about ", highlight: false, link: null },
      { text: "1.4M HKD by the Quality Education Fund! ", highlight: true, link: "https://www.qef.org.hk/en/index.html" },
      { text: "We will be collaborating with the HKU CITE team, and I am honored to serve as the ", highlight: false, link: null },
      { text: "Project Leader for VisLab!", highlight: true, link: null },
      // { text: " for VisLab!", highlight: false, link: null }
    ]
  },
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
          {news.content.map((part, idx) => {
            const cls = part.award ? "news-award" : undefined;
            const body = part.highlight ? <strong>{part.text}</strong> : part.text;
            return part.link ? (
              <a key={idx} href={part.link} target="_blank" rel="noopener noreferrer" className={cls}>
                {body}
              </a>
            ) : (
              <span key={idx} className={cls}>
                {body}
              </span>
            );
          })}
        </span>
      </div>

      ))}
    </div>
  );
}

export default NewsCards;
