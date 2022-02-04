const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className="modal-main">{children}</section>
    </div>
  );
};

export default Modal;
