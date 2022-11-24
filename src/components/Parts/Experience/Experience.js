import React from "react";
import { ExperienceBox, ExperienceHeading } from "./ExperienceStyles";
import { experienceData } from "../../../data/experienceData";
import SingleExperience from "./SingleExperience";
function Experience() {
  return (
    <div>
      <ExperienceBox>
        {experienceData?.map((item) => (
          <>
            <ExperienceHeading>{item.sectionTitle}</ExperienceHeading>
            <SingleExperience data={item.singleExperience} />
          </>
        ))}
      </ExperienceBox>
    </div>
  );
}

export default Experience;
