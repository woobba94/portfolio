function Intro() {
  return (
    <div className="Intro">
      <div className="canvas-wrap">
        <canvas id="forest" width={600} height={500}></canvas>
      </div>
      {/* <video src={myVideo} muted autoPlay loop></video> */}
      {/* <div className="hourglass"></div> */}
      <div className="left scroll-down" data-rate=".3" data-direction="vertical">
        <p>방문해 주셔서 감사합니다.</p>
        <p>컴퓨팅 사고를 즐기는 프론트엔드 개발자</p>
        <p>정우진입니다.</p>
      </div>
      <div className="shadow scroll-down" data-rate=".5" data-direction="vertical">
        <p>방문해 주셔서 감사합니다.</p>
        <p>컴퓨팅 사고를 즐기는 프론트엔드 개발자</p>
        <p>정우진입니다.</p>
      </div>
      <div className="right"></div>
    </div>
  );
}
export default Intro;
