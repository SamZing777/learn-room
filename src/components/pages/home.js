import React from "react";
import Navigation from "../partials/navigation";
import Banner from "../partials/banner";
import StartLearning from "../partials/start_learning";
import Recommended from "../partials/recommended";
import RecommendedTopics from "../partials/recommended_topics";
import Footer from "../partials/footer";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banner />
      <StartLearning />
      <Recommended />
      <RecommendedTopics />
      <Footer />
    </div>
  );
};

export default Home;
