import { useState } from 'react';
import React from 'react';
function Slide(props) {
  // console.log(props);
  let count = 15;
  const [slide, setSlide] = useState(React.createRef());

  const handleMouseMove = (event) => {
    count--;
    if (!count) {
      const el = slide.current;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
      el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
      count = 15;
    }
  };

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
    <li
      ref={slide}
      className={classNames}
      onClick={handleSlideClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img className="slide__image" alt={headline} src={src} onLoad={imageLoaded} />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
      </article>
    </li>
  );
}

export default Slide;
