import React, { useContext, useRef, useEffect, useState } from 'react';
import { ScrollContext } from '../context/ScrollContext';
const CenterLine = (_props) => {
  const scrollPercentage = useContext(ScrollContext);

  const [drawLength, setDrawLength] = useState(0);

  // 그려지는 속도 가중치 1.0 = 1배
  const speed = 1.12;
  let path = useRef(null);
  let pathLength = useRef(0);

  useEffect(() => {
    pathLength.current = path.current.getTotalLength();
    path.current.style.strokeDasharray = pathLength.current + ' ' + pathLength.current;
    path.current.style.strokeDashoffset = pathLength.current;
  }, []);

  useEffect(() => {
    setDrawLength(pathLength.current * scrollPercentage * speed);
  }, [scrollPercentage]);

  return (
    // <div className="CenterLine" onScroll={callbackFunc}>
    <div className="CenterLine">
      {/* <svg viewBox="0 0 45 2854" fill="none" preserveAspectRatio="xMidYMax meet">
        <path
          style={{ strokeDashoffset: pathLength.current - drawLength }}
          ref={path}
          d="M21.9999 0.5V292.5C23.5412 296.224 23.2521 298.009 21.9999 301C17.7066 307.808 18.2079 310.583 21.9999 314.5C46.8595 332.158 50.589 342.504 21.9999 362.5C-4.86933 381.677 -2.60575 391.647 21.9999 408.5C48.8153 423.117 47.0755 432.062 21.9999 449C14.9317 454.729 15.2894 458.617 21.9999 466.5C23.5858 469.417 23.9345 471.389 21.9999 476.5V2853.5"
          stroke="#f44957"
          strokeWidth="3"
        />
      </svg> */}
      <svg viewBox="0 0 206 2854" fill="none" preserveAspectRatio="xMidYMax meet">
        <path
          style={{ strokeDashoffset: pathLength.current - drawLength }}
          ref={path}
          d="M101.999 0.5C101.999 0.5 101.999 268 101.999 276.5C101.999 285 108.306 291 101.999 301C95.693 311 96.4507 315.5 101.999 319.5C123.501 335 126.501 345.5 101.999 362.5C77.4981 379.5 77.3938 391.647 101.999 408.5C119.501 420.487 111.084 432.005 101.999 444.5C98.0008 450 98.4981 456 101.999 464C105.501 472 104.501 476 101.999 483.5C101.999 483.5 101.999 1232 101.999 1317.5C101.999 1403 157.639 1423.02 184.501 1413.5C224.001 1399.5 195.5 1370.85 158 1377C120.5 1383.15 103.754 1395.5 89.4998 1407.5C75.2459 1419.5 30.5148 1425.98 11.4999 1413.5C-12.2509 1397.92 11.2746 1377.14 39 1377C66.7254 1376.86 108.833 1405.5 134.5 1419.5C143.666 1424.5 172.039 1440 188.5 1423C204.961 1406 155.5 1380.5 117.5 1419.5C101.999 1435.41 126.5 1443.5 126.5 1455C126.5 1469.3 61.8042 1486.11 101.999 1518C152.001 1557.67 152.001 1583.47 101.999 1616.5C47.5008 1652.5 51.9981 1681.76 101.999 1712.5C152.001 1743.24 156.498 1773.5 101.999 1810.5C47.5008 1847.5 47.5008 1865 101.999 1905.5C132.365 1928.07 134.5 1955 101.999 1982.5C83.5702 1998.09 101.999 2013.5 101.999 2034.5C101.999 2548.56 101.999 2853.5 101.999 2853.5"
          stroke="#f44957"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CenterLine;
