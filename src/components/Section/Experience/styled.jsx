import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const ButtonWrap = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: fit-content;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;
export const Button = styled.div`
  height: 20px;
  width: 20px;
  background-color: var(--color-main-2);
  border-radius: 100%;
  border: 3px solid var(--color-point-1);
  transition: all 0.3s;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  cursor: pointer;
  &:hover ${Button} {
    background-color: var(--color-point-1);
    transform: scale(1.5);
  }
`;
