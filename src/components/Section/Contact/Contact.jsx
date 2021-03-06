import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from '../../../context/ScrollContext';
import * as Styled from './styled';

function Contact() {
  const scrollPercentage = useContext(ScrollContext);
  const items = useRef();
  let contactFlag = useRef(false);
  function onItem(target) {
    if (target === 'center') {
      items.current.children[1].style.animation = 'on-contact-item 1s linear forwards';
    } else if (target === 'left') {
      items.current.children[0].style.animation = 'to-left 2s linear forwards';
    } else {
      items.current.children[2].style.animation = 'to-right 2s linear forwards';
    }
  }
  function setText() {
    for (let i = 0; i < 3; i++) {
      items.current.children[i].firstChild.style.opacity = 1;
    }
  }
  useEffect(() => {
    if (!contactFlag.current && scrollPercentage > 0.94) {
      contactFlag.current = true;
      onItem('center');
      setTimeout(() => onItem('left'), 300);
      setTimeout(() => onItem('right'), 600);
      setTimeout(setText, 1200);
    }
  }, [scrollPercentage]);
  return (
    <Styled.ContactWrap ref={items} id="Contact">
      <Styled.ContactItem href="https://github.com/woobba94" target="_blank" rel="noopener noreferrer">
        <Styled.Text>github</Styled.Text>
      </Styled.ContactItem>
      <Styled.ContactItem href="https://woobba.notion.site/7aa56c4553954cc282e37f0b20562aaf" target="_blank" rel="noopener noreferrer">
        <Styled.Text>이력서 보기</Styled.Text>
      </Styled.ContactItem>
      <Styled.ContactItem href="mailto:jwj3199@gmail.com" target="_blank" rel="noopener noreferrer">
        <Styled.Text>gmail</Styled.Text>
      </Styled.ContactItem>
      <Styled.Footer />
    </Styled.ContactWrap>
  );
}
export default Contact;
