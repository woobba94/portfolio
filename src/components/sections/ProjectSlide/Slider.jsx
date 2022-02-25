import Modal from 'antd/lib/modal/Modal';
import { useState, useRef } from 'react';
import Slide from './Slide';
import SliderControl from './SliderControl';
function Slider(props) {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState([false, false, false, false, false]);
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? props.slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === props.slides.length ? 0 : next);
  };

  // 다른 페이지 클릭 시 이동
  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    } else {
      let newOpenState = [false, false, false, false, false];
      newOpenState[index] = true;
      setIsOpen(newOpenState);
    }
  };
  const { slides, heading } = props;
  const headingId = `slider-heading__${heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`;
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
          // console.log(slide.contents);
          return (
            <Slide
              key={slide.index}
              slide={slide}
              current={current}
              handleSlideClick={handleSlideClick}
              isOpen={isOpen}
            />
          );
        })}
      </ul>

      <div className="slider__controls">
        <SliderControl
          type="previous"
          title="이전 슬라이드"
          handleClick={handlePreviousClick}
        />

        <SliderControl
          type="next"
          title="다음 슬라이드"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Slider;
