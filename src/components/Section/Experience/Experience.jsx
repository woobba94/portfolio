import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from '../../../context/ScrollContext';
import * as Styled from './styled';
import data from './data';
import Item from './Item/Item';

function Experience() {
  const scrollPercentage = useContext(ScrollContext);
  let flag = useRef(false);
  const buttonWrapRef = useRef();
  const itemWrapRef = useRef();

  useEffect(() => {
    if (!flag.current && scrollPercentage > 0.529) {
      flag.current = true;
      buttonWrapRef.current.firstChild.click();
    }
  }, [scrollPercentage]);

  function targetHandler(index) {
    for (let i = 0; i < buttonWrapRef.current.children.length; i++) {
      if (index === i) {
        buttonWrapRef.current.children[i].firstChild.style.background = 'var(--color-point-1)';
        itemWrapRef.current.children[i].style.opacity = '1';
      } else {
        buttonWrapRef.current.children[i].firstChild.style.background = 'var(--color-main-2)';
        itemWrapRef.current.children[i].style.opacity = '0';
      }
    }
  }

  return (
    <Styled.Wrapper id="Experience">
      <Styled.ButtonWrap ref={buttonWrapRef}>
        {[0, 1, 2, 3, 4].map((index) => {
          return (
            <Styled.ButtonBox onClick={() => targetHandler(index)}>
              <Styled.Button />
            </Styled.ButtonBox>
          );
        })}
      </Styled.ButtonWrap>
      <div ref={itemWrapRef}>
        {[0, 1, 2, 3, 4].map((index) => {
          return <Item {...data[index]} />;
        })}
      </div>
    </Styled.Wrapper>
  );
}
export default Experience;
