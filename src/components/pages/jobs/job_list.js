import React from "react";

const JobList = () => {
  return (
    <div className="job-list">
      <h1>Available courses for your specialization.</h1>
      <p>We recommend jobs similar to the courses you have enrolled for.</p>
    </div>

    <div className="course-list">
      <h4>Job name</h4>
      <p>Job requirement</p>
      <i>On site</i>
      <p>Validate the codes of developers at make corrections....</p>
      <button>Read more....</button>
    </div>
  );
};

export default JobList;
