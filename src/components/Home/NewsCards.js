import React from 'react';
import './css/NewsCards.css'; // 确保有对应的样式文件
import newsIcon from '../../Assets/news-icon.png'; // 引入图标路径
const newsItems = [
  {
    date: "Aug. 10, 2026",
    content: [
      { text: "💬 Glad to serve as an ", highlight: false, link: null },
      { text: "Associate Chair (AC)", highlight: true, link: null },
      { text: " of ", highlight: false, link: null },
      { text: "ACM CHI 2027", highlight: true, link: "https://chi2027.acm.org/" },
      { text: ".", highlight: false, link: null },
    ]
  },
  {
    date: "Aug. 08, 2026",
    content: [
      { text: "Qwen3.8", highlight: true, link: "https://qwenlm.github.io/blog/qwen3.8/" },
      { text: " is released! I contributed to the training of its ", highlight: false, link: null },
      { text: "Learn", highlight: true, link: null },
      { text: " and ", highlight: false, link: null },
      { text: "Agent Co-work", highlight: true, link: null },
      { text: " modes for enterprise & personal workflows.", highlight: false, link: null },
    ]
  },
  {
    date: "Aug. 05, 2026",
    content: [
      { text: "New arXiv — ", highlight: false, link: null },
      { text: "TACT", highlight: true, link: "https://arxiv.org/abs/2608.03952" },
      { text: ", post-training LLMs into ", highlight: false, link: null },
      { text: "pedagogically adaptive English tutors", highlight: true, link: null },
      { text: ". Glad to advise this student-led work!", highlight: false, link: null },
    ]
  },
  {
    date: "Aug. 01, 2026",
    content: [
      { text: "Excited to release ", highlight: false, link: null },
      { text: "TeachArena", highlight: true, link: "https://arxiv.org/abs/2605.14322" },
      { text: " — the most comprehensive benchmark for agents' ", highlight: false, link: null },
      { text: "real-world teaching ability", highlight: true, link: null },
      { text: ", ", highlight: false, link: null },
      { text: "data released", highlight: true, link: null },
      { text: "!", highlight: false, link: null },
    ]
  },
  {
    date: "Jul. 20, 2026",
    content: [
      { text: "The final arXiv of our ", highlight: false, link: null },
      { text: "year-long project", highlight: true, link: "https://arxiv.org/abs/2607.17643" },
      { text: " is out — studying how ", highlight: false, link: null },
      { text: "informal learning", highlight: true, link: null },
      { text: " emerges in everyday human-LLM interaction. Huge thanks to my wonderful collaborators!", highlight: false, link: null },
    ]
  },
  {
    date: "Jul. 15, 2026",
    content: [
      { text: "Two co-author full papers accepted by ", highlight: false, link: null },
      { text: "IEEE VIS 2026", highlight: true, link: "https://arxiv.org/abs/2604.23356" },
      { text: " (CCF-A) & ", highlight: false, link: null },
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
