import { useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../../../context/ScrollContext';
import * as Styled from './styled';
import data from './data';
import Item from './Item/Item';

function Experience() {
  const scrollPercentage = useContext(ScrollContext);
  let flag = useRef(false);
  const buttonWrapRef = useRef();
  const itemWrapRef = useRef();
  const [target, setTarget] = useState();
  useEffect(() => {
    if (!flag.current && scrollPercentage > 0.529) {
      flag.current = true;
      buttonWrapRef.current.firstChild.click();
    }
  }, [scrollPercentage]);
  function targetHandler(index) {
    for (let i = 0; i < buttonWrapRef.current.children.length; i++) {
      if (index === i) {
        buttonWrapRef.current.children[i].firstChild.style.background =
          'var(--color-point-1)';
        itemWrapRef.current.children[i].style.opacity = '1';
      } else {
        buttonWrapRef.current.children[i].firstChild.style.background =
          'var(--color-main-2)';
        itemWrapRef.current.children[i].style.opacity = '0';
      }
    }
    setTarget(index);
  }
  return (
    <Styled.Wrapper id="Experience">
      <Styled.ButtonWrap ref={buttonWrapRef}>
        <Styled.ButtonBox onClick={() => targetHandler(0)}>
          <Styled.Button />
        </Styled.ButtonBox>
        <Styled.ButtonBox onClick={() => targetHandler(1)}>
          <Styled.Button />
        </Styled.ButtonBox>
        <Styled.ButtonBox onClick={() => targetHandler(2)}>
          <Styled.Button />
        </Styled.ButtonBox>
        <Styled.ButtonBox onClick={() => targetHandler(3)}>
          <Styled.Button />
        </Styled.ButtonBox>
        <Styled.ButtonBox onClick={() => targetHandler(4)}>
          <Styled.Button />
        </Styled.ButtonBox>
      </Styled.ButtonWrap>
      <div ref={itemWrapRef}>
        <Item {...data[0]} />
        <Item {...data[1]} />
        <Item {...data[2]} />
        <Item {...data[3]} />
        <Item {...data[4]} />
      </div>
      {/* {target !== undefined && <Item {...data[target]} style={ItemWrapper} />} */}
    </Styled.Wrapper>
  );
}
export default Experience;
