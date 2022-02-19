import './App.css';
import { Header, Body, Footer } from './components/index';
import GreetingsLine from './components/GreetingsLine';
import CenterLine from './components/CenterLine';
import React, { useState, useEffect, useRef } from 'react';
// import Modal from './components/Modal';
function App() {
  console.log('App 렌더링');
  const centerLine = useRef();
  // 얼마나 스크롤된 상태인지 저장
  const [scrollPercentage, setScrollPercentage] = useState(0);
  let drawLength = useRef(0);
  let pathLength = useRef(0);

  // flag
  let greetingFlag = useRef(false);
  let skillsFlag = useRef(false);

  // 그려지는 속도 가중치 1.0 = 1배
  const speed = 1.2;
  let path;
  drawLength.current =
    ((pathLength.current * window.pageYOffset) /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
    speed;

  useEffect(() => {
    path = centerLine.current;
    pathLength.current = path.getTotalLength();
    path.style.strokeDasharray = pathLength.current + ' ' + pathLength.current;
    path.style.strokeDashoffset = pathLength.current;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercentage(
        window.pageYOffset /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, [scrollPercentage]);

  // console.log(offset);
  function setProgress() {
    console.log('setProgress()');
    const skillsPercent = [0.8, 0.7, 0.7, 0.5, 0.9, 0.4, 0.6];
    let index = 0;
    var ProgressBar = require('progressbar.js');
    const progressBox = document.querySelectorAll('.skill-logo');
    [].forEach.call(progressBox, function (progressBox) {
      var bar = new ProgressBar.Circle(progressBox, {
        color: '#f44957',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 3000,
        easing: 'bounce',
        strokeWidth: 6,
        from: { color: '#000', a: 0 },
        to: { color: '#f44957', a: 1 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);

          var value = Math.round(circle.value() * 100);
          circle.setText(value + '%');
        },
      });
      bar.animate(skillsPercent[index]); // Number from 0.0 to 1.0
      index++;
    });
    const progressTexts = document.querySelectorAll('.progressbar-text');
    [].forEach.call(progressTexts, function (progressTexts) {
      progressTexts.style = '';
    });
  }
  if (!skillsFlag.current && scrollPercentage > 0.31) {
    console.log('아이콘 펼치기');
    skillsFlag.current = true;
    setTimeout(setProgress, 2500);
    let iconWrap = document.querySelector('.Skills .skills-wrap');
    iconWrap.classList.add('unfold-icon');
    let skillsAnimationBox = document.querySelector('.Skills').firstChild;
    skillsAnimationBox.classList.add('animation-box');
  }

  if (!greetingFlag.current && scrollPercentage > 0.13) {
    console.log('Greeting right 페이드 시작');
    greetingFlag.current = true;
    document.querySelector('.Greetings .right').classList.add('fade-right');
  }

  return (
    <div className="App">
      <CenterLine ref={centerLine} strokeDashoffset={pathLength.current - drawLength.current} />
      <GreetingsLine />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
