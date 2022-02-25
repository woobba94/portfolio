import styled from 'styled-components';
import Move from '../../effects/Move';
import Tree from './Tree';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: var(--color-main-3);
`;

const Canvas = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  background: #fff;
`;
const Left = styled.div`
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
const Shadow = styled.div`
  width: 60%;
  top: 10%;
  left: 8%;
  color: rgba(255, 255, 255, 0.05);
  font-size: 48px;
  font-weight: 900;
`;

function Intro() {
  return (
    <Wrapper>
      <Canvas>
        <Tree />
      </Canvas>
      {/* <video src={myVideo} muted autoPlay loop></video> */}
      {/* <div className="hourglass"></div> */}
      <Left>
        <Move direction={'down'} rate={0.3}>
          <p>방문해 주셔서 감사합니다.</p>
          <p>컴퓨팅 사고를 즐기는 프론트엔드 개발자</p>
          <p>정우진입니다.</p>
        </Move>
      </Left>
      <Left>
        <Shadow>
          <Move direction={'down'} rate={0.5}>
            <p>방문해 주셔서 감사합니다.</p>
            <p>컴퓨팅 사고를 즐기는 프론트엔드 개발자</p>
            <p>정우진입니다.</p>
          </Move>
        </Shadow>
      </Left>
    </Wrapper>
  );
}
export default Intro;
