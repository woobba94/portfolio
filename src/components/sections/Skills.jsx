import { useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';

const skillData = {
  html: {
    skillLogo: 'devicon-html5-plain',
    skillContent: '시멘틱한 마크업 구조를 지향합니다.',
  },
  css: {
    skillLogo: 'devicon-css3-plain',
    skillContent: '스타일 구조화에 관심이 많습니다.',
  },
  javascript: {
    skillLogo: 'devicon-javascript-plain',
    skillContent: '요구하는 기능을 javascript로 구현할 수 있습니다.',
  },
  react: {
    skillLogo: 'devicon-react-original',
    skillContent: '모듈화의 장점과 component간 state변경을 이해하고 있습니다.',
  },
  cplusplus: {
    skillLogo: 'devicon-cplusplus-plain',
    skillContent:
      '주력 언어로 C++을 배웠으며 코딩테스트 경험이 있습니다. 이는 새로운 언어를 배우는데에 도움이 됩니다.',
  },
  python: {
    skillLogo: 'devicon-python-plain',
    skillContent: 'Flask 라이브러리와 Django 프레임워크를 사용해 본 경험이 있습니다.',
  },
  github: {
    skillLogo: 'devicon-github-original colored',
    skillContent: '여러 팀프로젝트를 통해 github을 통한 협업과정을 배웠습니다.',
  },
};

function Skill(props) {
  const target = skillData[props.skillName];
  return (
    <div className="Skill">
      <div className="skill-logo">
        <i className={target.skillLogo}></i>
      </div>
      <div className="skill-content">{target.skillContent}</div>
    </div>
  );
}

function setProgress() {
  console.log('setProgress()');
  const skillsPercent = [0.8, 0.7, 0.7, 0.5, 0.9, 0.4, 0.6];
  let index = 0;
  var ProgressBar = require('progressbar.js');
  const progressBox = document.querySelectorAll('.skill-logo');
  [].forEach.call(progressBox, function (progressBox) {
    var bar = new ProgressBar.Circle(progressBox, {
      color: '#f44957',
      trailColor: '#e9e9e9',
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

function Skills() {
  const [skillsFlag, setSkillsFlag] = useState(false);
  const scrollPercentage = useContext(ScrollContext);
  const iconWrap = useRef(null);
  const skillsAnimationBox = useRef(null);

  function fadeOn() {
    console.log('skills fadeOn');
    let arr = iconWrap.current.children;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      arr[i].classList.add('fadeOn');
    }
  }

  useEffect(() => {
    if (!skillsFlag && scrollPercentage > 0.31) {
      console.log('skillsFlag');
      setSkillsFlag(true);
      setTimeout(setProgress, 2000);
      setTimeout(fadeOn, 2000);
      iconWrap.current.classList.add('unfoldSkills');
      skillsAnimationBox.current.classList.add('animation-box');
    }
  }, [scrollPercentage]);

  return (
    <div className="Skills" id="Skills">
      <div ref={skillsAnimationBox}></div>
      <div className="skills-wrap" ref={iconWrap}>
        <Skill skillName="html" />
        <Skill skillName="css" />
        <Skill skillName="javascript" />
        <Skill skillName="react" />
        <Skill skillName="cplusplus" />
        <Skill skillName="python" />
        <Skill skillName="github" />
      </div>
    </div>
  );
}
export default Skills;
