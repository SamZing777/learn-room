import React from "react";
import { FaBriefcase } from "react-icons/fa";

const jobs = [
  {
    job_title: "Marketer",
    company_name: "Optimus lla",
    location: "Abuja",
    contract: "Full time",
  },
  {
    job_title: "Marketer",
    company_name: "Optimus lla",
    location: "Abuja",
    contract: "Full time",
  },
  {
    job_title: "Marketer",
    company_name: "Optimus lla",
    location: "Abuja",
    contract: "Full time",
  },
  {
    job_title: "Marketer",
    company_name: "Optimus lla",
    location: "Abuja",
    contract: "Full time",
  },
  {
    job_title: "Marketer",
    company_name: "Optimus lla",
    location: "Abuja",
    contract: "Full time",
  },
];
const Job = ({ job }) => {
  const { job_title, company_name, location, contract } = job;
  return (
    <div className="job">
      <div className="left">
        <FaBriefcase />
      </div>
      <div className="right">
        <h4>{job_title}</h4>
        <p>{company_name}</p>
        <p>
          {location} | {contract}
        </p>
        <div className="type-time">
          <span>I.T</span>
          <span>2 hours ago</span>
        </div>
      </div>
    </div>
  );
};
const JobLists = () => {
  const renderJobs = jobs.map((job, index) => {
    return <Job job={job} key={index} />;
  });
  return <div className="lists">{renderJobs}</div>;
};

export default JobLists;
