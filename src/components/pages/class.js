import React, { useRef } from "react";
import Footer from "../partials/footer";
import Navigation from "../partials/navigation";
import { FaList } from "react-icons/fa";
import video from "../../assets/video/coding_video.mp4";
import Video from "../partials/video";

const ClassRoom = () => {
  const topicListRef = useRef(null);
  return (
    <React.Fragment>
      <Navigation />
      <div className="class_room">
        <h3 className="title">Learn modern javascript</h3>
        <div className="board">
          <div className="left">
            <FaList
              style={{ fontSize: "18px" }}
              onClick={() => {
                topicListRef.current.classList.toggle("menu-out");
              }}
            ></FaList>
            <div className="topic-list" ref={topicListRef}>
              <li>
                <a href="topic">Const variable js</a>
              </li>
              <li>
                <a href="topic">Non Const variable js</a>
              </li>
              <li>
                <a href="topic">Es 2016</a>
              </li>
              <li>
                <a href="topic">Arrow functions</a>
              </li>
              <li>
                <a href="topic">Declaring Variables</a>
              </li>
              <li>
                <a href="topic">Let Keyword</a>
              </li>
              <li>
                <a href="topic">Closure and Hoisting javascript</a>
              </li>
              <li>
                <a href="topic">Variable Declaration</a>
              </li>
            </div>
          </div>
          <div className="right">
            <h3 className="current-topic">Welcome and meet your instructor</h3>

            <Video video_src={video} />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ClassRoom;
