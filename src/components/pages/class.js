import React, { useRef } from "react";
import Footer from "../partials/footer";
import Navigation from "../partials/navigation";
import video from "../../assets/video/coding_video.mp4";
import Video from "../partials/video";
import ClassTopic from "../partials/class_topic";

const ClassRoom = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="class_room">
        <h3 className="title">Learn modern javascript</h3>
        <div className="board">
          <div className="video-container">
            <Video video_src={video} />
            <h3 className="topic">Easy Data structures with javascript</h3>
          </div>
          <div className="other-topics">
            <ClassTopic />
            <ClassTopic />
            <ClassTopic />
            <ClassTopic />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ClassRoom;
