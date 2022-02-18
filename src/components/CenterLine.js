import React from 'react';
const CenterLine = React.forwardRef((_props, ref) => {
  return (
    // <div className="CenterLine" onScroll={callbackFunc}>
    <div className="CenterLine">
      <svg viewBox="0 0 45 2854" fill="none" preserveAspectRatio="xMidYMax meet">
        <path
          style={{ strokeDashoffset: _props.strokeDashoffset }}
          ref={ref}
          d="M21.9999 0.5V292.5C23.5412 296.224 23.2521 298.009 21.9999 301C17.7066 307.808 18.2079 310.583 21.9999 314.5C46.8595 332.158 50.589 342.504 21.9999 362.5C-4.86933 381.677 -2.60575 391.647 21.9999 408.5C48.8153 423.117 47.0755 432.062 21.9999 449C14.9317 454.729 15.2894 458.617 21.9999 466.5C23.5858 469.417 23.9345 471.389 21.9999 476.5V2853.5"
          stroke="#f44957"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
});
export default CenterLine;
