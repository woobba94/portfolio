import React from 'react';
import Slider from './Slider/Slider';
import styled from 'styled-components';
import data from './data';

const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  font-weight: 700;
  font-size: 48px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111;
  opacity: 0.8;
  z-index: 3;
`;

function ProjectTemp() {
  return (
    <div className="ProjectTemp" id="Projects">
      {/* <Cover>[미완성] 진행중입니다.</Cover> */}
      <Slider heading="Example Slider" slides={data} />
    </div>
  );
}
export default ProjectTemp;
