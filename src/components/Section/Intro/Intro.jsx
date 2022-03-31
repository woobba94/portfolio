import * as Styled from './styled';
import Move from '../../effects/Move';
import Tree from './Tree';

function Intro() {
  return (
    <Styled.Wrapper>
      <Styled.Canvas>
        <Tree />
      </Styled.Canvas>
      <Styled.Left>
        <Move direction={'down'} rate={0.3}>
          <p>방문해 주셔서 감사합니다.</p>
          <p>컴퓨팅 사고를 즐기는 프론트엔드 개발자</p>
          <p>정우진입니다.</p>
        </Move>
      </Styled.Left>
      <Styled.Left>
        <Styled.Shadow>
          <Move direction={'down'} rate={0.5}>
            <p>방문해 주셔서 감사합니다.</p>
            <p>컴퓨팅 사고를 즐기는 프론트엔드 개발자</p>
            <p>정우진입니다.</p>
          </Move>
        </Styled.Shadow>
      </Styled.Left>
    </Styled.Wrapper>
  );
}
export default Intro;
