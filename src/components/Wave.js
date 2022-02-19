import React from "react";
import { WavesBox } from "../Styles";

function Waves() {
  return (
    <WavesBox>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#222831"
          fill-opacity="1"
          d="M0,320L1440,224L1440,0L0,0Z"
        ></path>
      </svg>
    </WavesBox>
  );
}

export default Waves;
