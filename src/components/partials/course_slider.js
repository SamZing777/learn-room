import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import Loader from "./loader";
import RecommendCourse from "./recommended_course";

const CourseSlider = ({ courses }) => {
  const scrollableRef = useRef(null);
  const isGettingCourses = useSelector(
    (state) => state.courses.getting_courses
  );
  const renderRecommendedCourses = courses.map((course, index) => {
    return <RecommendCourse course_data={course} key={index} />;
  });

  if (isGettingCourses) {
    return <Loader />;
  }
  return (
    <div className="recommended-courses-container">
      <button
        className="slider-btn left-slider"
        onClick={() => {
          scrollableRef.current.scrollBy({
            top: 0,
            left: -300,
            behaviour: "smooth",
          });
        }}
      >
        <FaChevronLeft />
      </button>
      <div className="recommended-courses-scrollable" ref={scrollableRef}>
        {renderRecommendedCourses}
      </div>
      <button
        className="slider-btn right-slider"
        onClick={() => {
          scrollableRef.current.scrollBy({
            top: 0,
            left: 300,
            behaviour: "smooth",
          });
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CourseSlider;
