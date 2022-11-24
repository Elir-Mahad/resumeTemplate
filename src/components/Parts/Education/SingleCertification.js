import React from "react";
import {
  EdbCertification,
  EdbCertificationInfo,
  EdbSchool,
  EdbDates,
} from "./EducationStyles";

function SingleCertification({ data }) {
  return (
    <div>
      {data?.map((item) => (
        <div>
          <EdbCertification>{item.programName}</EdbCertification>
          <EdbCertificationInfo>
            <EdbSchool>{item.schoolName}</EdbSchool>
            <EdbDates>{item.programDuration}</EdbDates>
          </EdbCertificationInfo>
        </div>
      ))}
    </div>
  );
}

export default SingleCertification;
