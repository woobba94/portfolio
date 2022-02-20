function Move({ direction, rate, children, addClass }) {
  let pos = window.pageYOffset * rate;
  if (direction === 'up') {
    pos *= -1;
  }

  return (
    <div
      className={`Move ${addClass}`}
      style={{ transform: 'translate3d(0px, ' + pos + 'px, 0px)' }}
    >
      {children}
    </div>
  );
}
export default Move;
