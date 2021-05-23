import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesForCategory } from "../../redux/courses/courses.actions";
import CourseSlider from "../partials/course_slider";
import Footer from "../partials/footer";
import Navigation from "../partials/navigation";
import queryString from "query-string";

const CourseCategory = ({ location }) => {
  const [category_id, setCategoryId] = useState(null);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.category_data);
  const parsed = queryString.parse(location.search);
  const { category, title } = parsed;
  useEffect(() => {
    dispatch(getCoursesForCategory(category));
  }, [dispatch]);
  return (
    <React.Fragment>
      <Navigation />
      <div className="category">
        <h3 className="title" style={{ textTransform: "capitalize" }}>
          {title}
        </h3>
        <p className="total_learners">12,345,344 Learners</p>
        {/* <div className="recommended-courses-container"></div> */}
        <CourseSlider courses={courses} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CourseCategory;
