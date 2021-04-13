import React, { useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaSubscript,
  FaComment,
  FaCameraRetro,
} from "react-icons/fa";

const Video = ({ video_src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  //   const [mousingOver, setMousingOver] = useState(false);
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
    <div className="video-wrapper">
      <div className="video-container">
        <video src={video_src} ref={videoRef} autoplay={false} />
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
  );
};

export default Video;
