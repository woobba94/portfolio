import { useRef } from 'react';
import React from 'react';
import ClickContents from './ClickContents';
import styled from 'styled-components';

const Headline = styled.h1`
  opacity: ${(props) => props.isOpen && '0'};
  transition: all 0.5s;
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

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  const { src, headline, index } = props.slide;
  const current = props.current;
  let classNames = 'slide';

  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';
  return (
    <>
      <li
        ref={slide}
        className={classNames}
        onClick={handleSlideClick}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={imageLoaded}
          />
          <ClickContents
            isOpen={props.isOpen[props.slide.index]}
            modalData={props.slide.contents}
          />
        </div>

        <article className="slide__content">
          <Headline
            isOpen={props.isOpen[props.slide.index]}
            className="slide__headline"
          >
            {headline}
          </Headline>
        </article>
      </li>
    </>
  );
}

export default Slide;
