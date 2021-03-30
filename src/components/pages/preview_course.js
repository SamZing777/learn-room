import React from "react";
import Navigation from "../partials/navigation";
import learn_javascript from "../../assets/learn_javascript.jpeg";
import { FaPlay } from "react-icons/fa";

const PreviewCourse = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="course-preview-container">
        <div className="video-container">
          {/* tmp thumbnail */}
          <img src={learn_javascript} alt="learn javascript" />
          <button className="play-button">
            <FaPlay />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PreviewCourse;
