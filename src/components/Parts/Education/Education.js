import React from "react";
import { EducationBox, EdbHeading } from "./EducationStyles";
import { educationData } from "../../../data/educationData";
import SingleCertification from "./SingleCertification";

function Education() {
  return (
    <EducationBox>
      {educationData?.map((item) => (
        <div>
          <EdbHeading>{item.sectionTitle}</EdbHeading>
          <SingleCertification data={item.singleCertification} />
        </div>
      ))}
    </EducationBox>
  );
}

export default Education;
