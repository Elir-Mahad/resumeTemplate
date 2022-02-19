import styled from "styled-components";

// Resume

export const ResumeBox = styled.div`
  position: relative;
`;

// Top box

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  padding-top: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
`;

export const TbText = styled.div`
  color: white;
`;

export const TbName = styled.h1`
  margin-bottom: 2rem;
`;

export const TbJobTitle = styled.h2`
  margin-bottom: 2rem;
`;

export const TbImageBox = styled.div`
  //
`;

export const TbImage = styled.img`
  width: 15rem;
  // height: 10rem;
  border-radius: 50%;
`;

export const WavesBox = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -19.7rem;
`;

//  Main box = contains left and right columns;

export const MainBox = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  // width: 100%;
  // background-color: lightblue;
`;

// Left column below.
// It contains:
// - contact box
// - skills box
// - education box
// - expertise box

export const LeftColumn = styled.div`
  // background-color: pink;
  width: 25%;
`;

// Contact box

export const ContactBoxes = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const CBox = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const CbIcon = styled.div`
  margin-right: 1.5rem;
  font-size: 1.5rem;
`;

export const CbText = styled.p`
  //
`;

// Skills box

export const SkillsBox = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  // background-color: red;
`;

export const SbHeading = styled.h3`
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const SbItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export const SbItemText = styled.p`
  margin-left: 1rem;
`;

// Education Box

export const EducationBox = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  // background-color: lightgrey;
`;

export const EdbHeading = styled.h3`
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const EdbCertification = styled.li`
  font-size: 1.2rem;
`;

export const EdbCertificationInfo = styled.div`
  border-left: 1px solid black;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.8rem;
`;

export const EdbSchool = styled.p`
  margin-bottom: 0.5rem;
`;

export const EdbDates = styled.p`
  //
`;

// Right column below

export const RightColumn = styled.div`
  // background-color: yellow;
  width: 75%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

// Profile box

export const ProfileBox = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
`;

export const ProfileHeading = styled.h3`
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const ProfileDesc = styled.p`
  line-height: 2rem;
`;

// Selected projects box

export const SelectedProjectsBox = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
`;

export const SpHeading = styled.h3`
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const SpSiteDetails = styled.div`
  // padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SpSiteNameTools = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

export const SpSiteName = styled.h3`
  padding-right: 1rem;
  border-right: 1px solid black;
`;

export const SpSiteTools = styled.p`
  margin-left: 1rem;
`;

export const SpSiteDesc = styled.p`
  margin-bottom: 1rem;
  line-height: 2rem;
`;

export const SpWebsiteLink = styled.a`
  color: darkblue;
  // page-break-after: always;
`;

// Experience box

export const ExperienceBox = styled.div`
  //
`;

export const ExperienceHeading = styled.h3`
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const JobBox = styled.div`
  margin-bottom: 2rem;
`;

export const JtitleCname = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const JobTitle = styled.h3`
  padding-right: 1rem;
  border-right: 1px solid black;
`;

export const CompanyName = styled.p`
  padding-left: 1rem;
`;

export const LocationDates = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const JobLocation = styled.p`
  padding-right: 1rem;
  border-right: 1px solid black;
`;

export const JobDates = styled.p`
  padding-left: 1rem;
`;

export const JobTask = styled.li`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;
