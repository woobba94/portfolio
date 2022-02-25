import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ScrollContext } from '../context/ScrollContext';
const ButtonWrap = styled.div`
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  opacity: 0;
  transform: translateX(-100px);
  mix-blend-mode: difference;
`;

const Button = styled.div`
  background-color: var(--color-main-1);
  margin: 10px 0;
  height: fit-content;
  padding: 20px 10px;
  text-align: end;
  width: fit-content;
  cursor: pointer;
  font-weight: 700;
  transform: ${(props) =>
    props.active ? 'translateX(0px)' : 'translateX(-100px)'};
  transition: all 0.4s;
  &:hover {
    background-color: var(--color-point-1);
    transform: translateX(0px);
  }
`;

// const Active = styled.div`
//   isolation: isolate;
// `;

function NavBar() {
  const [childStates, setChildStates] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
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
    // console.log('childStatesHandler');
    let newState = [false, false, false, false, false];
    newState[target] = true;
    setChildStates(newState);
    beforeTarget.current = target;
  }
  useEffect(() => {
    if (!navFlag.current && scrollPercentage > 0.13) {
      // console.log('navBar open');
      navFlag.current = true;
      open();
    } else if (navFlag.current && scrollPercentage <= 0.13) {
      // console.log('navBar close');
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
    <ButtonWrap className="NavBar" ref={buttonWrap}>
      <a href="#Intro">
        <Button active={childStates[0]}>ABOUT ME</Button>
      </a>
      <a href="#TechStack">
        <Button active={childStates[1]}>TECH STACK</Button>
      </a>
      <a href="#Experience">
        <Button active={childStates[2]}>EXPERIENCE</Button>
      </a>
      <a href="#Projects">
        <Button active={childStates[3]}>PROJECTS</Button>
      </a>
      <a href="#Contact">
        <Button active={childStates[4]}>CONTACT ME</Button>
      </a>
    </ButtonWrap>
  );
}
export default NavBar;
