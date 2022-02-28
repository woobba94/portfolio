import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-point-3);
  opacity: 0;
`;
const ImageBox = styled.div`
  position: absolute;
  width: 50%;
  min-width: 500px;
  height: 90%;
  left: 50%;
  top: 0%;
  align-self: flex-end;
`;
const ContentsBox = styled.div`
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
  color: var(--color-main-3);
  /* border: 4px solid var(--color-point-1); */
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 50px;
`;
const Period = styled.div`
  font-size: 15px;
  color: #999999;
`;
const Contents = styled.div`
  font-size: 18px;
  color: #555555;
`;
function Item(props) {
  return (
    <Wrapper>
      <ContentsBox>
        <Period>
          {props.period.start === ''
            ? props.period.end
            : props.period.start + '~' + props.period.end}
        </Period>
        <Title>{props.title}</Title>
        <Contents>{props.contents}</Contents>
      </ContentsBox>
      <ImageBox
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Wrapper>
  );
}

export default Item;
