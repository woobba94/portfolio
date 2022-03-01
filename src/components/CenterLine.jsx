import React, { useContext, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ScrollContext } from '../context/ScrollContext';

const Wrapper = styled.div`
  height: 500vh;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  z-index: 1;
  svg {
    height: 100%;
  }
`;

const CenterLine = (_props) => {
  const scrollPercentage = useContext(ScrollContext);

  const [drawLength, setDrawLength] = useState(0);

  // 그려지는 속도 가중치 1.0 = 1배
  const speed = 1.12;
  let path = useRef(null);
  let pathLength = useRef(0);

  useEffect(() => {
    pathLength.current = path.current.getTotalLength();
    path.current.style.strokeDasharray =
      pathLength.current + ' ' + pathLength.current;
    path.current.style.strokeDashoffset = pathLength.current;
  }, []);

  useEffect(() => {
    setDrawLength(pathLength.current * scrollPercentage * speed);
  }, [scrollPercentage]);

  return (
    <Wrapper>
      <svg
        viewBox="0 0 207 2854"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          style={{ strokeDashoffset: pathLength.current - drawLength }}
          ref={path}
          d="M102.999 0.5C102.999 0.5 102.999 268 102.999 276.5C102.999 285 109.306 291 102.999 301C96.693 311 97.4507 315.5 102.999 319.5C124.501 335 127.501 345.5 102.999 362.5C78.4981 379.5 78.3938 391.647 102.999 408.5C120.501 420.487 112.084 432.005 102.999 444.5C99.0008 450 99.4981 456 102.999 464C106.501 472 105.501 476 102.999 483.5C102.999 483.5 102.999 1232 102.999 1317.5C102.999 1403 158.639 1423.02 185.501 1413.5C225.001 1399.5 196.5 1370.85 159 1377C121.5 1383.15 104.754 1395.5 90.4998 1407.5C76.2459 1419.5 30.5148 1425.98 11.4999 1413.5C-12.2509 1397.92 11.2746 1377.14 39 1377C66.7254 1376.86 109.833 1405.5 135.5 1419.5C144.666 1424.5 173.039 1440 189.5 1423C205.961 1406 156.5 1380.5 118.5 1419.5C102.999 1435.41 127.5 1443.5 127.5 1455C127.5 1469.3 62.8042 1469.11 102.999 1501C153.001 1540.67 153.001 1574.47 102.999 1607.5C48.5008 1643.5 52.9981 1681.76 102.999 1712.5C153.001 1743.24 157.498 1781.5 102.999 1818.5C48.5008 1855.5 48.5008 1883 102.999 1923.5C133.365 1946.07 135.5 1955 102.999 1982.5C84.5702 1998.09 102.999 2013.5 102.999 2034.5C102.999 2548.56 102.999 2853.5 102.999 2853.5"
          stroke="#f44957"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Wrapper>
  );
};

export default CenterLine;
