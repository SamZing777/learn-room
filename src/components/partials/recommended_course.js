import React from "react";
import { FaStar } from "react-icons/fa";

// single recommended course structure
const Star = (rated) => {
  return (
    <span className="star ">
      <FaStar color="gold" />
    </span>
  );
};

const RecommendCourse = ({ course_data }) => {
  const {
    thumb_nail,
    title,
    language,
    self_paced_price,
    live_class_price,
  } = course_data;
  return (
    <div className="a-course">
      <img className="course-thumbnail" src={thumb_nail} alt={title}></img>
      <div className="course-details">
        <h4 className="course_name">{title}</h4>
        <p className="instructor_name">Simpson</p>
        <div className="star-and-total-enrolled">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <span>({language})</span>
        </div>
        <div className="price">
          <span className="price">
            ${live_class_price} (
            <span style={{ textDecoration: "line-through" }}>
              {self_paced_price}
            </span>
            )
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCourse;
