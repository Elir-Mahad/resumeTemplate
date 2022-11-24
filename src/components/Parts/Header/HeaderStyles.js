import styled from "styled-components";

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
  height: 15rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const WavesBox = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -19.7rem;
`;
