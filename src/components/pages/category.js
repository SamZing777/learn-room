import React from "react";
import CourseSlider from "../partials/course_slider";
import Footer from "../partials/footer";
import Navigation from "../partials/navigation";

const CourseCategory = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="category">
        <h3 className="title">Professionals</h3>
        <p className="total_learners">12,345,344 Learners</p>
        <CourseSlider />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CourseCategory;
