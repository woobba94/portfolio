import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.onload = function () {
  // flag
  let introFlag = false;
  let skillFlag = false;

  let path = document.querySelector('.CenterLine svg path');
  let pathLength = path.getTotalLength();
  console.log(pathLength);
  path.style.strokeDasharray = pathLength + ' ' + pathLength;

  path.style.strokeDashoffset = pathLength;

  window.addEventListener('scroll', () => {
    // 얼마나 스크롤된 상태인지 저장
    var scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollPercentage);
    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage * 0.9;
    if (!skillFlag && scrollPercentage > 0.41) {
      skillFlag = true;
      console.log('아이콘 펼치기');
      let iconWrap = document.querySelector('.Skills .icon-wrap');
      iconWrap.classList.add('unfold-icon');
    } else if (!introFlag && scrollPercentage > 0.136) {
      introFlag = true;
      console.log('인사말 도형 드로우 시작');
      let greetingsLinepath = document.querySelector('.GreetingsLine svg path');
      greetingsLinepath.style.display = 'block';
      greetingsLinepath.classList.add('draw');
    }
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
  });
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
