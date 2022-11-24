import React from "react";
import { SkillsBox, SbHeading, SbItem, SbItemText } from "./SkillsStyles";
import { FcCheckmark } from "react-icons/fc";
import { skillsData } from "../../../data/skillsData";
function Skills() {
  return (
    <div>
      {skillsData?.map((item) => (
        <SkillsBox>
          <SbHeading>{item.sectionTitle}</SbHeading>
          {item.skillsList?.map((skill) => {
            return (
              <SbItem>
                <FcCheckmark />
                <SbItemText>{skill}</SbItemText>
              </SbItem>
            );
          })}
        </SkillsBox>
      ))}
    </div>
  );
}

export default Skills;
