import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "../partials/navigation";
import Banner from "../partials/banner";
import StartLearning from "../partials/start_learning";
import SearchField from "../partials/search_field";
import Recommended from "../partials/recommended";
import RecommendedTopics from "../partials/recommended_topics";
import Footer from "../partials/footer";
import BecomeAnInstructor from "../partials/landing page/become_an_instructor";
import { getCourse } from "../../redux/courses/courses.actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse());
  }, []);
  return (
    <div className="home">
      <Navigation />
      <Banner />
      <SearchField />
      <StartLearning />
      <Recommended />
      <Recommended />
      <Recommended />
      <RecommendedTopics />
      <BecomeAnInstructor />
      <Footer />
    </div>
  );
};

export default Home;
