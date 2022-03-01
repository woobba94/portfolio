import React from 'react';
import Slider from './Slider/Slider';
import styled from 'styled-components';
import data from './data';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: var(--color-main-2);
`;

function ProjectTemp() {
  return (
    <Wrapper>
      <Slider heading="Example Slider" slides={data} />
    </Wrapper>
  );
}
export default ProjectTemp;
