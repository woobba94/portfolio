import { useRef } from 'react';
import React from 'react';
import ClickContents from './ClickContents';
import styled from 'styled-components';

const Headline = styled.h1`
  opacity: ${(props) => (props.isOpen ? '0' : '1')};
  transition: all 0.5s;
  font-size: 8vmin;
  font-weight: 600;
  position: relative;
  cursor: ${(props) => (props.isOpen ? 'default' : 'pointer')};
`;
const Image = styled.img`
  z-index: 0;
  opacity: ${(props) => (props.isOpen ? '0' : '0.5')};
  transition-delay: 1s;
`;
function Slide(props) {
  let slide = useRef();

  const handleMouseLeave = (event) => {
    slide.current.style.setProperty('--x', 0);
    slide.current.style.setProperty('--y', 0);
  };

  const handleSlideClick = (event) => {
    props.handleSlideClick(props.slide.index);
  };

  const { src, headline, index } = props.slide;
  const current = props.current;
  let classNames = 'slide';

  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';
  return (
    <>
      <li ref={slide} className={classNames} onClick={handleSlideClick} onMouseLeave={handleMouseLeave}>
        <div className="slide__image-wrapper">
          <ClickContents isOpen={props.isOpen[props.slide.index]} modalData={props.slide.contents} />
          <Image isOpen={props.isOpen[props.slide.index]} alt={headline} src={src} />
        </div>

        <Headline isOpen={props.isOpen[props.slide.index]}>{headline}</Headline>
      </li>
    </>
  );
}

export default Slide;
