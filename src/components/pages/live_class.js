import React, { useRef, useState } from "react";
import Navigation from "../partials/navigation";
import coding_video from "../../assets/video/coding_video.mp4";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaSubscript,
  FaComment,
  FaCameraRetro,
} from "react-icons/fa";

const LiveClass = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [mousingOver, setMousingOver] = useState(false);
  const playTriggerAction = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <React.Fragment>
      <Navigation />
      <div className="live-class-container">
        <div
          className="video-container"
          ref={videoContainerRef}
          onMouseEnter={() => setMousingOver(true)}
          onMouseLeave={() => setMousingOver(false)}
        >
          <video src={coding_video} ref={videoRef} autoplay={false} />
          {
            <button className="trigger-btn" onClick={playTriggerAction}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          }
        </div>

        <div className="more-action-container">
          <button class="more-action">
            <FaVolumeMute />
          </button>
          <button class="more-action">
            <FaSubscript />
          </button>
          <button class="more-action">
            <FaComment />
          </button>
          <button class="more-action">
            <FaCameraRetro />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LiveClass;
