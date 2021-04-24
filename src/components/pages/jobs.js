import React from "react";
import Footer from "../partials/footer";
import Navigation from "../partials/navigation";
import right_job from "../../assets/right_job_trim.jpg";
import JobLists from "../partials/job_lists.js";

const Jobs = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="jobs">
        <div className="banner">
          <img src={right_job} alt="find the right job" />
          <h2>Find the Right Jobs for you in Nigeria and Africa</h2>
        </div>
        <div className="job-search-container">
          <div className="job-search-filter">
            <form>
              <div className="input-container">
                <select>
                  <option disabled selected>
                    Jobs Specialization
                  </option>
                  <option>Category a</option>
                  <option>Category b</option>
                  <option>Category c</option>
                  <option>Category d</option>
                </select>
              </div>
              <div className="input-container">
                <select>
                  <option disabled selected>
                    All Industries
                  </option>
                  <option>Category a</option>
                  <option>Category b</option>
                  <option>Category c</option>
                  <option>Category d</option>
                </select>
              </div>
              <div className="input-container">
                <select>
                  <option disabled selected>
                    All Locations
                  </option>
                  <option>Category a</option>
                  <option>Category b</option>
                  <option>Category c</option>
                  <option>Category d</option>
                </select>
              </div>
            </form>
          </div>
          <div className="top-jobs">
            <h2 style={{ padding: "15px 0", textAlign: "center" }}>Top Jobs</h2>
            <div className="jobs-listing">
              <JobLists />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Jobs;
