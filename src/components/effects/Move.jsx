function Move({ direction, rate, children }) {
  let pos = window.pageYOffset * rate;
  if (direction === 'up') {
    pos *= -1;
  }

  return (
    <div
      className={`Move`}
      style={{ transform: 'translate3d(0px, ' + pos + 'px, 0px)' }}
    >
      {children}
    </div>
  );
}
export default Move;
