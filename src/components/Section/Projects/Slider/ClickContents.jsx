import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ClickContents = ({ isOpen, modalData }) => {
  const [flag, setFlag] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const onContent = () => {
    setFlag(true);
  };

  const toggleMoreContainer = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  useEffect(() => {
    if (isOpen) setTimeout(onContent, 500);
    else {
      setFlag(false);
      setIsMoreOpen(false);
    }
  }, [isOpen]);
  console.log(modalData.releaseLink);
  return (
    <Container isOpen={isOpen} flag={flag}>
      <OpenEffect isOpen={isOpen} flag={flag}></OpenEffect>
      <DetailButton flag={flag} onClick={toggleMoreContainer}>
        <p>More Detail</p>
      </DetailButton>
      <Detail isMoreOpen={isMoreOpen}>
        <CloseButton onClick={toggleMoreContainer}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </CloseButton>
        {modalData.detail?.map((val) => {
          return <p id={val}>- {val}</p>;
        })}
      </Detail>
      <Title flag={flag}>{modalData.title}</Title>
      <Contents isOpen={isOpen} flag={flag}>
        <p>기술스택 : {modalData.techStack}</p>
        <p>요약 : {modalData.description}</p>
        <p>기여한 부분 : {modalData.contribution}</p>
        <p>{modalData.takeaway}</p>
      </Contents>
      <LinkWrap flag={flag}>
        <a href={modalData.githubLink} target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-original" />
        </a>
        {modalData.releaseLink === '' ? null : (
          <a href={modalData.releaseLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faHouse} />
          </a>
        )}
      </LinkWrap>
    </Container>
  );
};

export default ClickContents;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-main-2);
  color: var(--color-main-1);
  border: ${(props) => (props.isOpen ? '4px' : '0px')} solid var(--color-point-1);
  border-radius: 1%;
  transition: all 0.7s;
  transition-delay: 1s;
  overflow: hidden;
`;
const OpenEffect = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  width: ${(props) => props.isOpen && '35px'};
  width: ${(props) => props.flag && '150%'};
  height: ${(props) => props.isOpen && '35px'};
  height: ${(props) => props.flag && '150%'};
  padding: ${(props) => props.flag && '30px'};
  background-color: var(--color-main-2);
  color: var(--color-main-1);
  z-index: 1;
  border: ${(props) => (props.isOpen ? '3px' : '0px')} solid var(--color-point-1);
  border-radius: 50%;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: all 0.7s;
  cursor: default;
`;
const DetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 20%;
  height: 6%;
  top: 2%;
  left: 0;
  opacity: ${(props) => (props.flag ? '1' : '0')};
  transform: ${(props) => (props.flag ? 'translateX(0%)' : 'translateX(-100%)')};
  background-color: var(--color-point-1);
  cursor: pointer;
  border: none;
  z-index: 3;
  p {
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
    transition: all 0.3s;
  }
  transition: all 1s;
  transition-delay: 0.7s;
  :hover {
    p {
      color: var(--color-main-1);
    }
  }
`;
const Title = styled.div`
  position: absolute;
  top: 7%;
  width: 100%;
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  margin: 10px 0;
  opacity: ${(props) => (props.flag ? '1' : '0')};
  transition: all 1s;
  transition-delay: 0.5s;
  z-index: 2;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  width: 90%;
  padding-top: 10%;
  p {
    width: 100%;
    opacity: ${(props) => (props.flag ? '1' : '0')};
    font-size: 18px;
    font-weight: 500;
    text-align: start;
    transition: all 1s;
    transition-delay: 0.7s;
    cursor: default;
  }
  z-index: 2;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: absolute;
  padding-top: 5%;
  top: 20%;
  left: 49%;
  width: 98%;
  height: 68%;
  background-color: var(--color-main-1);
  opacity: ${(props) => (props.isMoreOpen ? '1' : '0')};
  transform: ${(props) => (props.isMoreOpen ? 'translateX(-50%)' : 'translateX(-150%)')};
  transition: all 0.5s;
  border: none;
  overflow-y: hidden;
  p {
    font-size: 16px;
    margin: 10px 40px;
    color: var(--color-main-2);
    font-weight: 500;
    text-align: start;
  }
  z-index: 3;
  cursor: default;
`;
const CloseButton = styled.div`
  position: absolute;
  right: 2%;
  top: 1%;
  font-size: 28px;
  color: var(--color-main-2);
  z-index: 5;
  cursor: pointer;
  :hover {
    color: var(--color-point-1);
  }
`;
const LinkWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 3%;
  font-size: 42px;
  color: var(--color-main-1);
  mix-blend-mode: difference;
  a {
    display: ${(props) => (props.flag ? 'static' : 'none')};
    margin: 0 30px;
    transition: all 0.3s;
    :hover {
      color: var(--color-point-1);
    }
  }
  :last-child {
    font-size: 36px;
  }
  transition: all 1.5s;
  transition-delay: 0.8s;
  opacity: ${(props) => (props.flag ? '1' : '0')};
  z-index: 4;
`;
