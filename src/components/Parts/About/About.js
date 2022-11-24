import React from "react";
import { ProfileBox, ProfileHeading, ProfileDesc } from "./AboutStyles";
import { aboutData } from "../../../data/aboutData";

function About() {
  return (
    <>
      <ProfileBox>
        {aboutData?.map((item) => (
          <>
            <ProfileHeading>{item.sectionTitle}</ProfileHeading>
            <ProfileDesc>{item.paragraphOne}</ProfileDesc>
            <ProfileDesc>{item.paragraphTwo}</ProfileDesc>
          </>
        ))}
      </ProfileBox>
    </>
  );
}

export default About;
