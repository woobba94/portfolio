import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: var(--color-main-2);
`;

export const Canvas = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  background: #fff;
`;
export const Left = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  align-items: flex-start;
  width: 90%;
  color: var(--color-main-1);
  mix-blend-mode: difference;
  margin: 200px 0 0 100px;
  font-size: 36px;
  font-weight: 700;
`;
export const Shadow = styled.div`
  width: 60%;
  top: 10%;
  left: 8%;
  color: rgba(255, 255, 255, 0.05);
  font-size: 48px;
  font-weight: 900;
`;
