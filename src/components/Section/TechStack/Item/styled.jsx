import styled from 'styled-components';

export const Wrapper = styled.div`
  opacity: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 100%;
  font-size: 20px;
  position: relative;
  svg {
    height: 100%;
    width: 50px;
    position: absolute;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  position: relative;
  i {
    font-size: 36px;
    position: absolute;
  }
`;
export const Contents = styled.div`
  margin-left: 30px;
`;
