import { useState } from 'react';
import React from 'react';
import Modal from './ProjectSlide/Modal';
import Slider from './ProjectSlide/Slider';
const slideData = [
  {
    index: 0,
    headline: 'jsQizzz',
    button: '상세보기',
    src: './project-jsqizzz.gif',
    contents: {
      title: 'jsQizzz',
      summary: '자바스크립트 공부를 위한 퀴즈사이트 구축',
      contribution: '전체적인 UI구현, 메인페이지 동작 구현, 결과페이지 동작 구현',
      takeaway:
        'github을 이용한 협업과 html css js에 대한 전반적인 이해를 할 수 있었던 프로젝트입니다.',
      stack: 'html css js',
      releaseLink: 'https://jsquizzz.netlify.app/',
      githubLink: 'https://github.com/useon/js-quiz',
    },
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
    contents: {
      title: 'jsQizzz',
      summary: '자바스크립트 공부를 위한 퀴즈사이트 구축',
      contribution: '전체적인 UI구현, 메인페이지 동작 구현, 결과페이지 동작 구현',
      takeaway:
        'github을 이용한 협업과 html css js에 대한 전반적인 이해를 할 수 있었던 프로젝트입니다.',
      stack: 'html css js',
      releaseLink: 'https://jsquizzz.netlify.app/',
      githubLink: 'https://github.com/useon/js-quiz',
    },
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
    contents: {
      title: 'jsQizzz',
      summary: '자바스크립트 공부를 위한 퀴즈사이트 구축',
      contribution: '전체적인 UI구현, 메인페이지 동작 구현, 결과페이지 동작 구현',
      takeaway:
        'github을 이용한 협업과 html css js에 대한 전반적인 이해를 할 수 있었던 프로젝트입니다.',
      stack: 'html css js',
      releaseLink: 'https://jsquizzz.netlify.app/',
      githubLink: 'https://github.com/useon/js-quiz',
    },
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
    contents: {
      title: 'jsQizzz',
      summary: '자바스크립트 공부를 위한 퀴즈사이트 구축',
      contribution: '전체적인 UI구현, 메인페이지 동작 구현, 결과페이지 동작 구현',
      takeaway:
        'github을 이용한 협업과 html css js에 대한 전반적인 이해를 할 수 있었던 프로젝트입니다.',
      stack: 'html css js',
      releaseLink: 'https://jsquizzz.netlify.app/',
      githubLink: 'https://github.com/useon/js-quiz',
    },
  },
];

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

  const [modalIndex, setModalIndex] = useState(0);
  const handleModalIndex = (index) => {
    setModalIndex(index);
  };

  return (
    <div className="ProjectTemp" id="Projects">
      <Slider
        heading="Example Slider"
        slides={slideData}
        modalState={modalState}
        modalIndex={modalIndex}
        showModal={showModal}
        hideModal={hideModal}
        handleModalIndex={handleModalIndex}
      />
      <Modal show={modalState} handleClose={hideModal} modalData={slideData[modalIndex]}></Modal>
    </div>
  );
}
export default ProjectTemp;
