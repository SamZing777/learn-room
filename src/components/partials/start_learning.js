import React from "react";
import CoursePart from "./course_part";

const courselisttemp = [0, 0, 0, 0, 0];
const StartLearning = () => {
  const renderCourses = courselisttemp.map((cu, index) => {
    return <CoursePart key={index} progress={(index + 5) * 10} />;
  });
  return (
    <div className="start-learning">
      <h2 className="title">Let's start learning, Nathan Adams</h2>

      {/* list of courses */}
      <div className="list-of-course">
        <div className="sliding-container">{renderCourses}</div>
      </div>
    </div>
  );
};

export default StartLearning;
