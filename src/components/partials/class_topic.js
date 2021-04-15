import React from "react";
import { FaPlay } from "react-icons/fa";
import thumbnail from "../../assets/thumbnails_placeholder/thumb1.jpg";

const ClassTopic = () => {
  return (
    <div className="other-topic">
      <div className="thumbnail">
        <img src={thumbnail} alt="video thumbnail" />
      </div>
      <div className="about-topic">
        <p>Something about this topic</p>
        <button className="play-topic">
          <span>
            <FaPlay />
          </span>
          <span>3:20</span>
        </button>
      </div>
    </div>
  );
};

export default ClassTopic;
