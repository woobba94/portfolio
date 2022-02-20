import Move from '../../effects/Move';
import Tree from './Tree';

function Intro() {
  return (
    <div className="Intro">
      <div className="canvas-wrap">
        <Tree />
      </div>
      {/* <video src={myVideo} muted autoPlay loop></video> */}
      {/* <div className="hourglass"></div> */}
      <Move direction={'down'} rate={0.3} addClass="left">
        <p>방문해 주셔서 감사합니다.</p>
        <p>컴퓨팅 사고를 즐기는 프론트엔드 개발자</p>
        <p>정우진입니다.</p>
      </Move>
      <Move direction={'down'} rate={0.5} addClass="shadow">
        <p>방문해 주셔서 감사합니다.</p>
        <p>컴퓨팅 사고를 즐기는 프론트엔드 개발자</p>
        <p>정우진입니다.</p>
      </Move>
      <div className="right"></div>
    </div>
  );
}
export default Intro;
