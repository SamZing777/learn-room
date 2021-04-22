import React from "react";
import Navigation from "../partials/navigation";
import Footer from "../partials/footer";
import {
  FaLandmark,
  FaVideo,
  FaBuilding,
  FaSuitcase,
  FaGlobe,
  FaFileDownload,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="choose-us">
        <div className="reason">
          <FaLandmark />
          <h3>
            World class Digital class rooms for the African Continent and
            Universal platform.
          </h3>
          <p>
            Learnroom Partners with top Universitie accross Africa.Earn
            recognized credentials from leading Universities and companies to
            achieve your goals.
          </p>
        </div>
        <div className="reason">
          <FaVideo />
          <h3>Live Class (Webinar)</h3>
          <p>
            Instructors and learners can hold live meetings using our resources
            for teachers and students interractions and to aid learning.Learners
            can choose to take self paced learning or instructor lead training.
          </p>
        </div>
        <div className="reason">
          <FaBuilding />
          <h3>LearnROOM for Business</h3>
          <p>
            Firms and Companies can use our platform and resources to improve
            the productivity of their employees.
          </p>
        </div>
        <div className="reason">
          <FaSuitcase />
          <h3>Skill Market</h3>
          <p>
            After training we provide learners with job recommendations that are
            relevant to their skills. Learners can choose to be freelancers too.
          </p>
        </div>
        <div className="reason">
          <FaGlobe />
          <h3>Linguistic</h3>
          <p>
            LearnROOM promotes African instructors and Language.There should be
            no barrier in speaking any language you aspire to speak.
          </p>
        </div>
        <div className="reason">
          <FaFileDownload />
          <h3>Learn Labs</h3>
          <p>
            We have studios that help instructor create high quality video
            contents that meets global standard.
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WhyChooseUs;
