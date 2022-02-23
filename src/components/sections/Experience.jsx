import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ScrollContext } from '../../context/ScrollContext';
const myExperienceData = {
  0: {
    title: `
    금오공과대학교
    컴퓨터소프트웨어공학과
    `,
    contents: `
    학교에서 C++로 처음 개발을 접했습니다. 당시 콘솔창으로 이루어지는 출력은 늘 흥미롭지 않았습니다.
    그렇게 개발에 무던했던 와중 웹프로그래밍을 접하면서 코드가 화면에 그려지는 모습을 보며 다시 흥미를 찾았습니다. 
    점차적으로 생각을 프로그래밍언어로 구현하는 것에 익숙해졌고, 문제를 분석하고 코드로 옮기는 일련의 과정을 즐기게 되었습니다.
    그 외에도 자료구조와 데이터베이스, 네트웍 과목을 수강하며 전반적인 CS지식을 쌓았습니다.
    `,
    period: {
      start: '120302',
      end: '210820',
    },
    img: require('./university_portfolio.jpg'),
  },
  1: {
    title: '국어정보처리시스템 경진대회 동상 수상',
    contents: `
    2학년 여름방학에 ‘자기소개서 첨삭 시스템’ 프로젝트에 참여하여 클린코드의 중요성을 느꼈던 경험입니다.
    이 프로젝트는 처음 접하는 언어로 자연어 처리 기술을 구현하려 했기에 쉽지 않은 도전이었습니다. 
    이러한 타이트한 개발 과정으로 일부 기능들을 일명 스파게티 코드로 작성하게 되었습니다. 
    결국, 코드 해석이 난해하여 취합과정 도중 마치 부실공사처럼 뒤늦게 많은 이슈가 발생하였고 더욱 일정을 준수하기가 어려워지게 되었습니다.
    
    이 경험을 통해 깨끗한 코드를 작성하는 이유를 절실하게 느꼈고, 코드의 상태는 마감기한 준수와 시스템 성능에 직결적인 역할을 한다고 생각하였습니다.
    지저분한 코드에서는 작은 기능에서도 눈에 보이지 않는 문제가 발생할 것이고 팀원과의 소통에서도 문제가 발생할 것입니다. 
    저는 크고 작은 알고리즘 문제에서 코드 가독성 개선에 많은 시간을 할애하여 좋은 코드 작성을 위해 꾸준히 노력해왔습니다. 
    이 경험을 토대로 클린코드를 작성하기 위해 더욱 노력하여 같이 일하게 될 분들과 최선의 결과를 만들고 싶습니다.
    `,
    period: {
      start: '',
      end: '181012',
    },
    img: require('./competition_portfolio.jpg'),
  },
  2: {
    title: '정보처리기사 취득',
    contents: `
      졸업을 위해 공부를 시작했습니다.
      저는 단순히 외우는것에 재능이 없고 이해하는 공부법을 선호하기에 많은 시간투자가 필요했습니다.
      두번은 없다고 생각하고 공부에 임하기위해 삭발을 하고 공부했고 필기와 실기 모두 한번의 응시로 합격하였습니다.
      전반적인 CS지식을 검증해보는 좋은 기회였으며, 노력하면 뭐든지 할 수 있다는 자신감을 얻었던 경험입니다.
    `,
    period: {
      start: '',
      end: '210602',
    },
    img: require('./certificate_portfolio.jpg'),
  },
  3: {
    title: '알고리즘 공부',
    contents: `
    문제 해결 능력은 개발에 필요한 기본역량이라고 생각합니다.
    백준 알고리즘 사이트에서 다양한 접근법을 통해 문제를 해결하며 진정한 끈기를 배웠습니다.
    그리고 최적의 방법을 찾는것은 많은 노력이 필요하다는것을 알게 되었습니다. 
    앞으로도 문제를 해결하는 집념을 통해 새로운 문제를 마주했을 때 최적의 방법을 찾는 개발자가 되겠습니다.
    `,
    period: {
      start: '210628',
      end: '211011',
    },
    img: require('./backjoon_portfolio.jpg'),
  },
  4: {
    title: '멋쟁이사자처럼 프론트엔드스쿨',
    contents: '준비중입니다.',
    period: {
      start: '211029',
      end: '220127',
    },
  },
};
const ButtonWrap = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: fit-content;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;
const Button = styled.div`
  height: 20px;
  width: 20px;
  background-color: var(--color-main-3);
  border-radius: 100%;
  border: 3px solid var(--color-point-1);
  &:hover {
    background-color: var(--color-point-1);
    transform: scale(1.3);
  }
  transition: all 0.5s;
  cursor: pointer;
`;

const ItemWrapper = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid var(--color-point-3);
`;
const ImageBox = styled.div`
  position: absolute;
  width: 50%;
  min-width: 500px;
  height: 90%;
  left: 50%;
  top: 0%;
  align-self: flex-end;
`;
const ContentsBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 40%;
  min-width: 400px;
  padding: 100px;
  top: 0;
  right: 50%;
  color: var(--color-main-3);
  /* border: 4px solid var(--color-point-1); */
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 50px;
`;
const Period = styled.div`
  font-size: 15px;
  color: #999999;
`;
const Contents = styled.div`
  font-size: 18px;
  color: #555555;
`;

function ExperienceItem(props) {
  return (
    <div className="ExperienceItem">
      <ContentsBox>
        <Period>
          {props.period.start === ''
            ? props.period.end
            : props.period.start + '~' + props.period.end}
        </Period>
        <Title>{props.title}</Title>
        <Contents>{props.contents}</Contents>
      </ContentsBox>
      <ImageBox
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></ImageBox>
    </div>
  );
}

function Experience() {
  const scrollPercentage = useContext(ScrollContext);
  let flag = useRef(false);
  const buttonWrapRef = useRef();
  const [target, setTarget] = useState();
  useEffect(() => {
    if (!flag.current && scrollPercentage > 0.529) {
      flag.current = true;
      buttonWrapRef.current.firstChild.click();
    }
  }, [scrollPercentage]);
  function targetHandler(index) {
    for (let i = 0; i < buttonWrapRef.current.children.length; i++) {
      if (index === i) buttonWrapRef.current.children[i].style.background = 'var(--color-point-1)';
      else buttonWrapRef.current.children[i].style.background = 'var(--color-main-3)';
    }
    setTarget(index);
  }
  return (
    <div className="Experience" id="Experience">
      <ButtonWrap ref={buttonWrapRef}>
        <Button onClick={() => targetHandler(0)}></Button>
        <Button onClick={() => targetHandler(1)}></Button>
        <Button onClick={() => targetHandler(2)}></Button>
        <Button onClick={() => targetHandler(3)}></Button>
        <Button onClick={() => targetHandler(4)}></Button>
      </ButtonWrap>
      {target !== undefined && <ExperienceItem {...myExperienceData[target]} style={ItemWrapper} />}
    </div>
  );
}
export default Experience;
