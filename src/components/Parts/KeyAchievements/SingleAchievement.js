import React from "react";
import {
  SpSiteDetails,
  SpSiteNameTools,
  SpSiteName,
  SpSiteTools,
  SpSiteDesc,
  SpWebsiteLink,
} from "./KeyAchievementsStyles";

function SingleAchievement({ data }) {
  return (
    <div>
      {data?.map((item) => (
        <SpSiteDetails>
          <SpSiteNameTools>
            <SpSiteName>{item.projectName}</SpSiteName>
            <SpSiteTools> {item.usedTools} </SpSiteTools>
          </SpSiteNameTools>
          <SpSiteDesc>{item.description}</SpSiteDesc>
          <SpWebsiteLink>
            <span style={{ color: "black", fontWeight: "900" }}>Website:</span>{" "}
            {item.website}
          </SpWebsiteLink>
        </SpSiteDetails>
      ))}
    </div>
  );
}

export default SingleAchievement;
