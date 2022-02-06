import { useState } from 'react';
import Slide from './Slide';
import SliderControl from './SliderControl';

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

  // 다른 페이지 클릭 시 이동, 현재 페이지 클릭 시 상세정보 모달
  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    } else {
      props.showModal();
      props.handleModalIndex(index);
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

export default Slider;
