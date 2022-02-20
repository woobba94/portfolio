const Modal = ({ handleClose, show, modalData }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className="modal-main">
        <p>{modalData.contents.title}</p>
        <p>{modalData.contents.summary}</p>
        <p>{modalData.contents.contribution}</p>
        <p>{modalData.contents.takeaway}</p>
        <p>{modalData.contents.stack}</p>
        <p>{modalData.contents.releaseLink}</p>
        <p>{modalData.contents.githubLink}</p>
      </section>
    </div>
  );
};

export default Modal;
