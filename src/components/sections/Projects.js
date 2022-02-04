import { useState } from 'react';
import React from 'react';
import Modal from '../Modal';
const slideData = [
  {
    index: 0,
    headline: 'jsQizzz',
    button: 'Shop now',
    src: './project-jsqizzz.gif',
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
  },
];

// =========================
// Slide
// =========================

function Slide(props) {
  const [slide, setSlide] = useState(React.createRef());

  const handleMouseMove = (event) => {
    const el = slide.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
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

  const { src, button, headline, index } = props.slide;
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
        <button className="slide__action btn" onClick={props.showModal}>
          {button}
        </button>
      </article>
    </li>
  );
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

// =========================
// Slider
// =========================

function Slider(props) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? props.slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === props.slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  // const { current, direction } = state;
  const { slides, heading } = props;
  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">
          {heading}
        </h3>

        {slides.map((slide) => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              current={current}
              handleSlideClick={handleSlideClick}
              modalState={props.modalState}
              showModal={props.showModal}
              hideModal={props.hideModal}
            />
          );
        })}
      </ul>

      <div className="slider__controls">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <SliderControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
}

function ProjectTemp() {
  const [modalState, setModalState] = useState(false);
  const showModal = () => {
    document.body.style.overflow = 'hidden';
    setModalState(true);
  };
  const hideModal = () => {
    document.body.style.overflow = 'unset';
    setModalState(false);
  };
  return (
    <div className="ProjectTemp">
      <Slider
        heading="Example Slider"
        slides={slideData}
        modalState={modalState}
        showModal={showModal}
        hideModal={hideModal}
      />
      <Modal show={modalState} handleClose={hideModal}>
        <p>Modal</p>
        <p>Data</p>
      </Modal>
    </div>
  );
}
export default ProjectTemp;
