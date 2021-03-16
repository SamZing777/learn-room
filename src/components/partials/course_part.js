import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const CoursePart = ({ progress }) => {
  return (
    <div className="course-thumb">
      <div className="video-thumbnail">
        <span className="play-container">
          <FaPlayCircle />
        </span>
      </div>
      <div className="course-details">
        <div className="text-container">
          <h3>Some course title</h3>
          <p>Something descriptive about user's last point</p>
        </div>

        <span className="progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default CoursePart;
