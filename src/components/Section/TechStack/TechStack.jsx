import { useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../../../context/ScrollContext';
import * as Styled from './styled';
import Item from './Item/Item';

function TechStack() {
  const [skillsFlag, setSkillsFlag] = useState(false);
  const scrollPercentage = useContext(ScrollContext);
  const iconWrap = useRef(null);

  function setProgress() {
    const skillsPercent = [0.8, 0.7, 0.7, 0.5, 0.9, 0.4, 0.6];
    let index = 0;
    var ProgressBar = require('progressbar.js');
    console.log();
    const item = iconWrap.current.children;
    [].forEach.call(item, function (item) {
      var bar = new ProgressBar.Circle(item.firstChild, {
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
      const progressTexts = item.firstChild.lastChild;
      progressTexts.style = '';
    });
  }

  // 코드 수정필요
  function fadeOn() {
    let arr = iconWrap.current.children;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      arr[i].classList.add('fadeOn');
    }
  }

  useEffect(() => {
    if (!skillsFlag && scrollPercentage > 0.31) {
      // console.log('skillsFlag');
      setSkillsFlag(true);
      setTimeout(setProgress, 2000);
      setTimeout(fadeOn, 2000);
    }
  }, [scrollPercentage]);

  return (
    <Styled.Wrapper id="TechStack">
      <Styled.BackgroundBox skillsFlag={skillsFlag}></Styled.BackgroundBox>
      <Styled.ItemWrapper skillsFlag={skillsFlag} ref={iconWrap}>
        <Item skillName="html" />
        <Item skillName="css" />
        <Item skillName="javascript" />
        <Item skillName="react" />
        <Item skillName="cplusplus" />
        <Item skillName="python" />
        <Item skillName="github" />
      </Styled.ItemWrapper>
    </Styled.Wrapper>
  );
}
export default TechStack;
