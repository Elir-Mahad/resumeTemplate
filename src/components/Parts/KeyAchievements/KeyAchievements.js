import React from "react";
import { SelectedProjectsBox, SpHeading } from "./KeyAchievementsStyles";
import { keyAchievementsData } from "../../../data/keyAchievementsData";
import SingleAchievement from "./SingleAchievement";

function KeyAchievements() {
  return (
    <div>
      <SelectedProjectsBox>
        {keyAchievementsData?.map((item) => (
          <>
            <SpHeading>{item.sectionTitle}</SpHeading>
            <SingleAchievement data={item.singleAchievement} />
          </>
        ))}
      </SelectedProjectsBox>
    </div>
  );
}

export default KeyAchievements;
