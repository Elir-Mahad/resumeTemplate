import React from "react";
import {
  TopBox,
  TbText,
  TbName,
  TbJobTitle,
  TbImageBox,
  TbImage,
  WavesBox,
} from "./HeaderStyles";
//
import { headerData } from "../../../data/headerData";
function Header() {
  return (
    <>
      {headerData?.map((item) => (
        <>
          <TopBox>
            <TbText>
              <TbName> {item.name}</TbName>
              <TbJobTitle> {item.professionalTitle}</TbJobTitle>
            </TbText>
            <TbImageBox>
              <TbImage src={item.profilePhoto} />
            </TbImageBox>
          </TopBox>
          <WavesBox>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill={item.wavesFill}
                fill-opacity="1"
                d="M0,320L1440,224L1440,0L0,0Z"
              ></path>
            </svg>
          </WavesBox>
        </>
      ))}
    </>
  );
}

export default Header;
