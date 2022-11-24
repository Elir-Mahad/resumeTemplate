import React from "react";
import {
  JobBox,
  JobTitle,
  CompanyName,
  LocationDates,
  JobLocation,
  JobDates,
  JtitleCname,
  JobTask,
} from "./ExperienceStyles";

function SingleExperience({ data }) {
  return (
    <div>
      {data?.map((item) => (
        <JobBox>
          <JtitleCname>
            <JobTitle>{item.jobTitle}</JobTitle>
            <CompanyName>{item.companyName}</CompanyName>
          </JtitleCname>
          <LocationDates>
            <JobLocation>{item.jobLocation}</JobLocation>
            <JobDates>{item.jobDuration}</JobDates>
          </LocationDates>
          {item.jobTasks?.map((task) => {
            return <JobTask>{task}</JobTask>;
          })}
        </JobBox>
      ))}
    </div>
  );
}

export default SingleExperience;
