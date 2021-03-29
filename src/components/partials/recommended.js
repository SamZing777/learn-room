import React from "react";
import thumb1 from "../../assets/thumbnails_placeholder/thumb1.jpg";
import thumb2 from "../../assets/thumbnails_placeholder/thumb2.jpg";
import thumb3 from "../../assets/thumbnails_placeholder/thumb3.jpg";
import RecommendCourse from "./recommended_course";

const Recommended = () => {
  const courses = [
    {
      source_img: thumb1,
      course_name: "2021 python for data science",
      instructor_name: "Spongebod square",
      total_enrolled: 10000,
      slashed_sale: 25,
      course_price: 70,
    },
    {
      source_img: thumb2,
      course_name: "Learn Adobe designs",
      instructor_name: "Squiward hottempered",
      total_enrolled: 10000,
      slashed_sale: 250,
      course_price: 500,
    },
    {
      source_img: thumb3,
      course_name: "Machinge learning for dummies",
      instructor_name: "Patrick Dumb",
      total_enrolled: 10000,
      slashed_sale: 2500,
      course_price: 8000,
    },
  ];

  const renderRecommendedCourses = courses.map((course, index) => {
    return <RecommendCourse course_data={course} key={index} />;
  });
  return (
    <div className="recommended-for-you">
      <h1>What to learn next</h1>
      <p>Recommended for you.</p>
      <div className="recommended-courses-container">
        <div className="recommended-courses-scrollable">
          {renderRecommendedCourses}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
