import styled from 'styled-components';

const Wrapper = styled.canvas`
  height: fit-content;
  width: fit-content;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  background: #fff;
`;

function Tree() {
  document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById('forest');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      recursiveTree(
        ctx,
        ctx.canvas.width / 2 - 1,
        ctx.canvas.height,
        35,
        -Math.PI / 2,
        12,
        3
      );
    }
  });

  var recursiveTree = function (
    ctx,
    startX,
    startY,
    length,
    angle,
    depth,
    branchWidth
  ) {
    // console.log(startX);
    var rand = Math.random,
      newLength,
      newAngle,
      newDepth,
      maxBranch = 3,
      endX,
      endY,
      maxAngle = (2 * Math.PI) / 4,
      subBranches;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    endX = startX + length * Math.cos(angle);
    endY = startY + length * Math.sin(angle);
    ctx.lineCap = 'round';
    ctx.lineWidth = branchWidth;
    ctx.lineTo(endX, endY);

    if (depth <= 2) {
      ctx.strokeStyle = '#f36796';
    } else {
      ctx.strokeStyle = '#f44957';
    }
    ctx.stroke();

    newDepth = depth - 1;

    if (!newDepth) {
      return;
    }

    subBranches = rand() * (maxBranch - 1) + 1;

    branchWidth *= 0.7;

    for (var i = 0; i < subBranches; i++) {
      newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
      newLength = length * (0.7 + rand() * 0.3);
      recursiveTree(
        ctx,
        endX,
        endY,
        newLength,
        newAngle,
        newDepth,
        branchWidth
      );
    }
  };
  return <Wrapper id="forest" width={600} height={500}></Wrapper>;
}
export default Tree;
