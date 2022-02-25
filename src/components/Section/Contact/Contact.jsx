import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ScrollContext } from '../../../context/ScrollContext';

const ContactWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const ContactItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s;
  background-color: var(--color-main-3);
  border-radius: 30px;
  z-index: 2;
  font-weight: 700;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover {
    background-color: var(--color-point-1);
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 50%;
  background-color: var(--color-main-3);
  position: absolute;
  bottom: 0;
`;
const Text = styled.div`
  opacity: 0;
  transition: all 1s;
`;

function Contact() {
  const [contactFlag, setContactFlag] = useState(false);
  const scrollPercentage = useContext(ScrollContext);
  const items = useRef();
  function onItem(target) {
    if (target === 'center') {
      items.current.children[1].style.animation =
        'on-contact-item 1s linear forwards';
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
    if (!contactFlag && scrollPercentage > 0.94) {
      setContactFlag(true);
      onItem('center');
      setTimeout(() => onItem('left'), 300);
      setTimeout(() => onItem('right'), 600);
      setTimeout(setText, 1200);
    }
  }, [scrollPercentage]);
  return (
    <ContactWrap ref={items} id="Contact">
      <ContactItem href="https://github.com/woobba94" target="_blank">
        <Text>github</Text>
      </ContactItem>
      <ContactItem
        href="https://woobba.notion.site/fb82da99654240e29c39adabd9f398f4"
        target="_blank"
      >
        <Text>이력서 보기</Text>
      </ContactItem>
      <ContactItem href="mailto:jwj3199@gmail.com" target="_blank">
        <Text>gmail</Text>
      </ContactItem>
      <Footer />
    </ContactWrap>
  );
}
export default Contact;
