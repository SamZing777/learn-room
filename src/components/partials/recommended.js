import React from "react";
import CourseSlider from "./course_slider";

const Recommended = () => {
  return (
    <div className="recommended-for-you">
      <h1>What to learn next</h1>
      <p>Recommended for you.</p>
      <CourseSlider />
    </div>
  );
};

export default Recommended;
