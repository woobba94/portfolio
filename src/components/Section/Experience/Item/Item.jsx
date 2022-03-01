import * as Styled from './styled';

function Item(props) {
  return (
    <Styled.Wrapper>
      <Styled.ContentsBox>
        <Styled.Period>
          {props.period.start === ''
            ? props.period.end
            : props.period.start + '~' + props.period.end}
        </Styled.Period>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.Contents>{props.contents}</Styled.Contents>
      </Styled.ContentsBox>
      <Styled.ImageBox
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Styled.Wrapper>
  );
}

export default Item;
