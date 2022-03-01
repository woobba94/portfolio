import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const ItemWrapper = styled.div`
  height: 0%;
  width: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0;
  border: none;
  border-radius: 30px;
  background-color: var(--color-main-2);
  color: var(--color-main-1);
  z-index: 2;
  overflow: hidden;
  animation: ${(props) =>
    props.skillsFlag && 'unfold-skills 2s linear forwards'};
`;
export const BackgroundBox = styled.div`
  position: absolute;
  width: 0%;
  height: 0%;
  border-radius: 100%;
  animation: ${(props) =>
    props.skillsFlag && 'skillsAnimationBox 1s linear forwards'};
`;
