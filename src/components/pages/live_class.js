import React from "react";
import Navigation from "../partials/navigation";
import Video from "../partials/video";
import video from "../../assets/video/coding_video.mp4";

const LiveClass = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="live-class-container">
        <Video video_src={video} />
      </div>
    </React.Fragment>
  );
};

export default LiveClass;
