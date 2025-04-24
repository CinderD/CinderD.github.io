import React from 'react';
import './css/TeachingCard.css'; // 样式文件

const courses = [
  {
    semester: "2024 Fall",
    courseCode: "COMP 2611",
    courseName: "Computer Organization",
    school: "HKUST",
    role: "Teaching Assistant"
  },
  {
    semester: "2024 Spring",
    courseCode: "MSBD 5005",
    courseName: "Data Visualization",
    school: "HKUST",
    role: "Teaching Assistant"
  },
  {
    semester: "2023 Fall",
    courseCode: "COMP 2611",
    courseName: "Computer Organization",
    school: "HKUST",
    role: "Teaching Assistant"
  },
  {
    semester: "2023 Spring",
    courseCode: "CORE 1232",
    courseName: "Exploring and Visualizing Data",
    school: "HKUST",
    role: "Teaching Assistant"
  }
];

function TeachingCard() {
  return (
    <div className="teaching-card">
      {courses.map((course, index) => (
        <div className="teaching-row" key={index}>
          <span className="teaching-semester">{course.semester}</span>
          <span className="teaching-course">
            {course.courseCode} - {course.courseName}
          </span>
          <span className="teaching-school">{course.school}</span>
          <span className="teaching-role">{course.role}</span>
        </div>
      ))}
    </div>
  );
}

export default TeachingCard;
