import React from "react";
import { FaStar } from "react-icons/fa";
const Star = (rated) => {
  return (
    <span className="star ">
      <FaStar color="gold" />
    </span>
  );
};

const RecommendCourse = ({ course_data }) => {
  const {
    source_img,
    course_name,
    total_enrolled,
    course_price,
    slashed_sale,
    instructor_name,
  } = course_data;
  return (
    <div className="a-course">
      <img
        className="course-thumbnail"
        src={source_img}
        alt={course_name}
      ></img>
      <div className="course-details">
        <h4 className="course_name">{course_name}</h4>
        <p className="instructor_name">{instructor_name}</p>
        <div className="star-and-total-enrolled">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <span>({total_enrolled})</span>
        </div>
        <div className="price">
          <span className="price">
            ${slashed_sale} (
            <span style={{ textDecoration: "line-through" }}>
              {course_price}
            </span>
            )
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCourse;
