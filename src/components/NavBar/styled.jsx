import styled from 'styled-components';

export const ButtonWrap = styled.div`
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  opacity: 0;
  transform: translateX(-100px);
  mix-blend-mode: difference;
`;
export const Button = styled.div`
  background-color: var(--color-main-1);
  margin: 10px 0;
  height: fit-content;
  padding: 20px 10px;
  text-align: end;
  width: fit-content;
  cursor: pointer;
  font-weight: 700;
  transform: ${(props) =>
    props.active ? 'translateX(0px)' : 'translateX(-100px)'};
  transition: all 0.4s;
  &:hover {
    background-color: var(--color-point-1);
    transform: translateX(0px);
  }
`;
