import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-point-3);
  opacity: 0;
`;
export const ImageBox = styled.div`
  position: absolute;
  width: 50%;
  min-width: 500px;
  height: 90%;
  left: 50%;
  top: 0%;
  align-self: flex-end;
`;
export const ContentsBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 40%;
  min-width: 400px;
  padding: 100px;
  top: 0;
  right: 50%;
  color: var(--color-main-2);
  /* border: 4px solid var(--color-point-1); */
`;
export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 50px;
`;
export const Period = styled.div`
  font-size: 15px;
  color: #999999;
`;
export const Contents = styled.div`
  font-size: 18px;
  color: #555555;
`;
