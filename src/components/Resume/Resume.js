import React from "react";
import { ResumeBox, MainBox, LeftColumn, RightColumn } from "./ResumeStyles";
import Education from "../Parts/Education/Education";
import Skills from "../Parts/Skills/Skills.js";
import Contact from "../Parts/Contact/Contact";
import KeyAchievements from "../Parts/KeyAchievements/KeyAchievements";
import About from "../Parts/About/About";
import Header from "../Parts/Header/Header";
import Experience from "../Parts/Experience/Experience";

function Resume() {
  return (
    <ResumeBox>
      <Header />
      <MainBox>
        <LeftColumn>
          <Contact />
          <Skills />
          <Education />
        </LeftColumn>
        <RightColumn>
          <About />
          <KeyAchievements />
          <Experience />
        </RightColumn>
      </MainBox>
    </ResumeBox>
  );
}

export default Resume;
