import Tab from './InformationTabs/Tab';

function ExperienceItem(props) {
  // console.log(props.flag);
  let direction = 'left';
  if (props.flag === 'right') direction = 'right';
  return (
    <div className={`ExperienceItem ${direction}`}>
      <div className="title">{props.title}</div>
      {props.contents && <div className="contents">{props.contents}</div>}
      <div className="period">{props.period.end}</div>
    </div>
  );
}

function Experience() {
  const myExperienceData = {
    highSchool: {
      title: '능인고등학교',
      contents: '',
      period: {
        start: '090302',
        end: '120208',
      },
    },
    university: {
      title: '금오공과대학교',
      contents: '컴퓨터소프트웨어공학과',
      period: {
        start: '120302',
        end: '210820',
      },
    },
    competition_1: {
      title: '국어정보처리시스템 경진대회 동상 수상',
      contents: '대회입니다.',
      period: {
        start: '',
        end: '181012',
      },
    },
    certificate_1: {
      title: '정보처리기사 취득',
      contents: '자격증입니다.',
      period: {
        start: '',
        end: '210602',
      },
    },
  };

  return (
    <div className="Experience">
      {/* <div className="left"></div>
      <Tab /> */}
      <ExperienceItem {...myExperienceData.highSchool} flag="left" />
      <ExperienceItem {...myExperienceData.university} flag="right" />
      <ExperienceItem {...myExperienceData.competition_1} flag="left" />
      <ExperienceItem {...myExperienceData.certificate_1} flag="right" />
    </div>
  );
}
export default Experience;
