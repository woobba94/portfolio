import imgURL from './image/smile_about.jpg';
import styled from 'styled-components';
export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: var(--color-main-1);
`;
export const Contents = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  width: 35vw;
  padding: 50px;
  color: var(--color-main-2);
  transform: translate(0%, -50%);
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 36px;
  color: var(--color-main-2);
`;
export const ImageBox = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  height: 80%;
  background: url(${imgURL}) no-repeat;
  background-repeat: no-repeat;
  background-position: 0px 50%;
  background-size: cover;
  animation: ${(props) => props.greetingFlag && 'fade-right 1s linear forwards'};
`;
