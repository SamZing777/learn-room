import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Job = ({ job }) => {
  const { title, company_name, location, is_full_time, description } = job;
  return (
    <div className="job">
      <div className="left">
        <FaBriefcase />
      </div>
      <div className="right">
        <h4>{company_name}</h4>
        <p>{title}</p>
        <p>{description}</p>
        <p>
          {location} | {is_full_time ? "fulltime" : ""}
        </p>
        <div className="type-time">
          <span>I.T</span>
          <span>2 hours ago</span>
        </div>
      </div>
    </div>
  );
};
const JobLists = ({ data }) => {
  const renderJobs = data.map((job, index) => {
    return <Job job={job} key={index} />;
  });
  return <div className="lists">{renderJobs}</div>;
};

export default JobLists;
