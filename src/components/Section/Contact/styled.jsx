import styled from 'styled-components';

export const ContactWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s;
  background-color: var(--color-main-2);
  border-radius: 30px;
  z-index: 2;
  font-weight: 700;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover {
    background-color: var(--color-point-1);
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 50%;
  background-color: var(--color-main-2);
  position: absolute;
  bottom: 0;
`;
export const Text = styled.div`
  opacity: 0;
  transition: all 1s;
`;
