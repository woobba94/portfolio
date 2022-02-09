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

function Skills() {
  return (
    <div className="Skills">
      <div></div>
      <div className="skills-wrap">
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
