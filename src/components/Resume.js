import React from "react";
import {
  //
  ResumeBox,
  //
  TopBox,
  TbText,
  TbName,
  TbJobTitle,
  TbImageBox,
  TbImage,
  //
  MainBox,
  LeftColumn,
  RightColumn,
  //
  ContactBoxes,
  CBox,
  CbIcon,
  CbText,
  //
  SkillsBox,
  SbHeading,
  SbItem,
  //
  EducationBox,
  EdbHeading,
  EdbCertification,
  EdbCertificationInfo,
  EdbSchool,
  EdbDates,
  //
  ProfileBox,
  ProfileHeading,
  ProfileDesc,
  //
  SelectedProjectsBox,
  SpHeading,
  SpSiteDetails,
  SpSiteNameTools,
  SpSiteName,
  SpSiteTools,
  SpSiteDesc,
  SpWebsiteLink,
  //
  ExperienceBox,
  ExperienceHeading,
  JobBox,
  JobTitle,
  CompanyName,
  LocationDates,
  JobLocation,
  JobDates,
  JobTask,
  JtitleCname,
  SbItemText,
} from "../Styles";
import Waves from "./Wave";
import mahad from "../assets/mahad-mohamood.jpeg";
//
import { GoLocation } from "react-icons/go";
// import { RiCellphoneLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { FcCheckmark } from "react-icons/fc";
import { RiSuitcaseLine } from "react-icons/ri";

class Resume extends React.Component {
  render() {
    return (
      <ResumeBox>
        {/* Top box below */}
        <TopBox>
          <TbText>
            <TbName> Mahad Mohamood</TbName>
            <TbJobTitle> Software Developer</TbJobTitle>
          </TbText>
          <TbImageBox>
            <TbImage src={mahad} />
          </TbImageBox>
        </TopBox>
        <Waves />

        {/* Main box below */}

        <MainBox>
          {/* Left column below */}

          <LeftColumn>
            {/* Contact boxes below */}

            <ContactBoxes>
              <CBox>
                <CbIcon>
                  <GoLocation />
                </CbIcon>
                <CbText>Toronto, Canada</CbText>
              </CBox>
              {/* <CBox>
              <CbIcon>
               <RiCellphoneLine />
              </CbIcon>
              <CbText>437-244-3531</CbText>
            </CBox> */}
              <CBox>
                <CbIcon>
                  <RiSuitcaseLine />
                </CbIcon>
                <CbText>https://mahad.codes/</CbText>
              </CBox>
              <CBox>
                <CbIcon>
                  <GoMail />
                </CbIcon>
                <CbText>mahad.codes@protonmail.com</CbText>
              </CBox>
            </ContactBoxes>

            {/* Skills box below */}

            <SkillsBox>
              <SbHeading>Technical Skills</SbHeading>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Html</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Css</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Sass</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Javascript</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Jquery</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>React</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Api</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Mongodb</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Firebase</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Github/git</SbItemText>
              </SbItem>
              <SbItem>
                <FcCheckmark />
                <SbItemText>Responsive D</SbItemText>esign
              </SbItem>
            </SkillsBox>

            {/* Education box below */}

            <EducationBox>
              {/*  */}
              <EdbHeading>Education</EdbHeading>
              <EdbCertification>Equities studies</EdbCertification>
              <EdbCertificationInfo>
                <EdbSchool>York university</EdbSchool>
                <EdbDates> 2012 - 2016</EdbDates>
              </EdbCertificationInfo>
              {/*  */}
              <EdbCertification>Web development Course</EdbCertification>
              <EdbCertificationInfo>
                <EdbSchool>Juno college of technology</EdbSchool>
                <EdbDates> 2019</EdbDates>
              </EdbCertificationInfo>
              {/*  */}
              <EdbCertification>Javascript course</EdbCertification>
              <EdbCertificationInfo>
                <EdbSchool>Juno college of technology</EdbSchool>
                <EdbDates> 2020</EdbDates>
              </EdbCertificationInfo>
              {/*  */}
            </EducationBox>
            {/*  */}
          </LeftColumn>
          {/*  */}

          <RightColumn>
            {/* Profile box below */}

            <ProfileBox>
              <ProfileHeading>About me</ProfileHeading>
              <ProfileDesc>
                I am a self-motivated and passionate developer that is looking
                to make an impact with the products that I build . I am
                proficient in developing consumer focused websites using html,
                css and javascript. I enjoy writing clean code and debugging
                problems. My attentiveness, endless curiosity, and excellent
                communication skills make me an efficient team member.
              </ProfileDesc>
            </ProfileBox>

            {/* Selected project box below */}

            <SelectedProjectsBox>
              <SpHeading>Selected projects</SpHeading>

              <SpSiteDetails>
                <SpSiteNameTools>
                  <SpSiteName>Radio Interno</SpSiteName>
                  <SpSiteTools> React, Api </SpSiteTools>
                </SpSiteNameTools>
                <SpSiteDesc>
                  This radio app was built with react and the radio-browser-api.
                  Discover radio stations based on your favourite music genre,
                  language or country. Listen, enjoy, and then save your
                  favourite stations in a playlist.
                </SpSiteDesc>
                <SpWebsiteLink>
                  View live site : interno.netlify.app
                </SpWebsiteLink>
              </SpSiteDetails>
              {/*  */}
              <SpSiteDetails>
                <SpSiteNameTools>
                  <SpSiteName>Searchsquid</SpSiteName>
                  <SpSiteTools> React, Api </SpSiteTools>
                </SpSiteNameTools>
                <SpSiteDesc>
                  This search engine app was built with react and google’s
                  programmable search engine api. Enter a search word, and
                  browse the results.
                </SpSiteDesc>
                <SpWebsiteLink>
                  View live site : elir-mahad.github.io/searchsquid/
                </SpWebsiteLink>
              </SpSiteDetails>
              {/*  */}
            </SelectedProjectsBox>

            {/* Experience box below */}

            <ExperienceBox>
              <ExperienceHeading>Work experience</ExperienceHeading>
              {/*  */}
              <JobBox>
                <JtitleCname>
                  <JobTitle>Coding Instructor</JobTitle>
                  <CompanyName>Codeswitch'n</CompanyName>
                </JtitleCname>
                <LocationDates>
                  <JobLocation>Remote work </JobLocation>
                  <JobDates>Jun 2021 - present</JobDates>
                </LocationDates>
                <JobTask>
                  Instruct students on how to write html and css.
                </JobTask>
                <JobTask>
                  Lead code-alongs, wherein students build completely responsive
                  websites from scratch.
                </JobTask>
                <JobTask>
                  Provide detailed feedback to students on their coding
                  projects.
                </JobTask>
              </JobBox>
              {/*  */}
              <JobBox>
                <JtitleCname>
                  <JobTitle>Developer-in-Residence</JobTitle>
                  <CompanyName>Parkdale Centre for Innovation</CompanyName>
                </JtitleCname>
                <LocationDates>
                  <JobLocation>Toronto, Canada </JobLocation>
                  <JobDates>Mar 2021 - May 2021</JobDates>
                </LocationDates>

                <JobTask>
                  Build stable and maintainable codebases using node and react.
                </JobTask>
                <JobTask>
                  Manage tickets to support internal and external product
                  development.
                </JobTask>
                <JobTask>Support startups with small-ticket requests.</JobTask>
              </JobBox>
              {/*  */}
              <JobBox>
                <JtitleCname>
                  <JobTitle>Math Tutor</JobTitle>
                  <CompanyName>Toronto district school board</CompanyName>
                </JtitleCname>
                <LocationDates>
                  <JobLocation>Toronto, Canada </JobLocation>
                  <JobDates>Jan 2020 - April 2020</JobDates>
                </LocationDates>
                <JobTask>
                  Prepare and facilitate workshops on different math topics.
                </JobTask>
                <JobTask>
                  Provide academic support for small groups of students.
                </JobTask>
                <JobTask>Provide individual tutoring sessions.</JobTask>
              </JobBox>
              {/*  */}
            </ExperienceBox>
          </RightColumn>
        </MainBox>
      </ResumeBox>
    );
  }
}

export default Resume;
