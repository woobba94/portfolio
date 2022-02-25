import { useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../../../context/ScrollContext';
import styled from 'styled-components';
import data from './data';
import Item from './Item';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
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
      if (index === i)
        buttonWrapRef.current.children[i].style.background =
          'var(--color-point-1)';
      else
        buttonWrapRef.current.children[i].style.background =
          'var(--color-main-3)';
    }
    setTarget(index);
  }
  return (
    <Wrapper id="Experience">
      <ButtonWrap ref={buttonWrapRef}>
        <Button onClick={() => targetHandler(0)}></Button>
        <Button onClick={() => targetHandler(1)}></Button>
        <Button onClick={() => targetHandler(2)}></Button>
        <Button onClick={() => targetHandler(3)}></Button>
        <Button onClick={() => targetHandler(4)}></Button>
      </ButtonWrap>
      {target !== undefined && <Item {...data[target]} style={ItemWrapper} />}
    </Wrapper>
  );
}
export default Experience;
