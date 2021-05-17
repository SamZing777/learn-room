import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../partials/navigation";
import Banner from "../partials/banner";
import StartLearning from "../partials/start_learning";
import SearchField from "../partials/search_field";
import Recommended from "../partials/recommended";
import RecommendedTopics from "../partials/recommended_topics";
import Footer from "../partials/footer";
import BecomeAnInstructor from "../partials/landing page/become_an_instructor";
import { getCourse, getCategories } from "../../redux/courses/courses.actions";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(getCourse());
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="home">
      <Navigation />
      <Banner />
      <SearchField />
      {/* <StartLearning /> */}
      <Recommended data={data} />
      <Recommended data={data} />
      <Recommended data={data} />
      <RecommendedTopics />
      <BecomeAnInstructor />
      <Footer />
    </div>
  );
};

export default Home;
