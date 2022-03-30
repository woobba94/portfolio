import { useContext, useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { ScrollContext } from '../../context/ScrollContext';

function NavBar() {
  const [childStates, setChildStates] = useState([true, false, false, false, false]);
  const scrollPercentage = useContext(ScrollContext);
  const buttonWrap = useRef();
  const beforeTarget = useRef(0);
  let navFlag = useRef(false);
  function open() {
    buttonWrap.current.style.animation = 'openNav .5s linear forwards';
  }
  function close() {
    buttonWrap.current.style.animation = 'closeNav .5s linear forwards';
  }
  function childStatesHandler(target) {
    // target이 전과 같을땐 state변경x
    if (beforeTarget.current === target) return;
    let newState = [false, false, false, false, false];
    newState[target] = true;
    setChildStates(newState);
    beforeTarget.current = target;
  }
  useEffect(() => {
    if (!navFlag.current && scrollPercentage > 0.13) {
      navFlag.current = true;
      open();
    } else if (navFlag.current && scrollPercentage <= 0.13) {
      navFlag.current = false;
      close();
    }
    if (scrollPercentage > 0.91) {
      childStatesHandler(4);
    } else if (scrollPercentage > 0.71) {
      childStatesHandler(3);
    } else if (scrollPercentage > 0.51) {
      childStatesHandler(2);
    } else if (scrollPercentage > 0.31) {
      childStatesHandler(1);
    } else if (scrollPercentage > 0.13) {
      childStatesHandler(0);
    }
  }, [scrollPercentage]);

  return (
    <Styled.ButtonWrap className="NavBar" ref={buttonWrap}>
      <Styled.Button active={childStates[0]} href="#Intro">
        ABOUT ME
      </Styled.Button>
      <Styled.Button active={childStates[1]} href="#TechStack">
        TECH STACK
      </Styled.Button>
      <Styled.Button active={childStates[2]} href="#Experience">
        EXPERIENCE
      </Styled.Button>
      <Styled.Button active={childStates[3]} href="#Projects">
        PROJECTS
      </Styled.Button>
      <Styled.Button active={childStates[4]} href="#Contact">
        CONTACT ME
      </Styled.Button>
    </Styled.ButtonWrap>
  );
}
export default NavBar;
