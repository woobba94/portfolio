import './App.css';
import { Header, Body, Footer } from './components/index';
import GreetingsLine from './components/GreetingsLine';
import CenterLine from './components/CenterLine';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import Modal from './components/Modal';
function App() {
  const centerLine = useRef();
  // 얼마나 스크롤된 상태인지 저장
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [drawLength, setDrawLength] = useState(0);
  const [pathLength, setPathLength] = useState(0);

  const [greetingFlag, setGreetingFlag] = useState(false);
  const [skillFlag, setSkillFlag] = useState(false);
  // 그려지는 속도 가중치 1.0 = 1배
  const speed = 1.2;
  let path;
  // const pathLength = path.getTotalLength();
  // console.log(`drawLength ${drawLength}`);

  useEffect(() => {
    path = centerLine.current;
    setPathLength(path.getTotalLength());
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = pathLength;
    const onScroll = () => {
      setScrollPercentage(
        window.pageYOffset /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      );
      setDrawLength(
        ((pathLength * window.pageYOffset) /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
          speed
      );
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [pathLength]);
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

  if (!skillFlag && scrollPercentage > 0.31) {
    setSkillFlag(true);
    console.log('아이콘 펼치기');
    let iconWrap = document.querySelector('.Skills .skills-wrap');
    iconWrap.classList.add('unfold-icon');
    let skillsAnimationBox = document.querySelector('.Skills').firstChild;
    skillsAnimationBox.classList.add('animation-box');
    setTimeout(setProgress, 2500);
  } else if (!greetingFlag && scrollPercentage > 0.13) {
    setGreetingFlag(true);
    console.log('Greeting right 페이드 시작');
    document.querySelector('.Greetings .right').classList.add('fade-right');
    // let greetingsLinepath = document.querySelector('.GreetingsLine svg path');
    // greetingsLinepath.style.display = 'block';
    // greetingsLinepath.classList.add('draw');
  }

  // scroll-down object
  const downTarget = document.querySelectorAll('.scroll-down');
  for (let i = 0; i < downTarget.length; i++) {
    let pos = window.pageYOffset * downTarget[i].dataset.rate;
    if (downTarget[i].dataset.direction === 'vertical') {
      downTarget[i].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
    } else {
      let posX = window.pageYOffset * downTarget[i].dataset.ratex;
      let posY = window.pageYOffset * downTarget[i].dataset.ratey;
      downTarget[i].style.transform = 'translate3d(' + posX + 'px,' + posY + 'px,0px)';
    }
  }
  // scroll-up object
  const upTarget = document.querySelectorAll('.scroll-up');
  for (let i = 0; i < upTarget.length; i++) {
    let pos = window.pageYOffset * upTarget[i].dataset.rate;
    if (upTarget[i].dataset.direction === 'vertical') {
      upTarget[i].style.transform = 'translate3d(0px, ' + -pos + 'px, 0px)';
    } else {
      let posX = window.pageYOffset * upTarget[i].dataset.ratex;
      let posY = window.pageYOffset * upTarget[i].dataset.ratey;
      upTarget[i].style.transform = 'translate3d(' + -posX + 'px,' + -posY + 'px,0px)';
    }
  }
  // console.log(`pathLength : ${pathLength}`);
  // console.log(`drawLength : ${drawLength}`);
  return (
    <div className="App">
      <CenterLine ref={centerLine} strokeDashoffset={pathLength - drawLength} />
      <GreetingsLine />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
