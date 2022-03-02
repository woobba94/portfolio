import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Contents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: var(--color-main-2);
  color: var(--color-main-1);
  z-index: 2;
  transform: ${(props) => !props.isOpen && 'translateY(-101%)'};
  border: 3px solid var(--color-point-1);
  p {
    font-size: 18px;
    text-align: start;
  }
  transition: all 1s;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 42px;
  font-weight: 500;
  margin: 10px 0;
`;
const LinkWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 36px;
  a {
    transition: all 0.5s;
  }
  a:hover {
    color: var(--color-point-1);
    transform: scale(1.2);
  }
`;

const ClickContents = ({ isOpen, modalData }) => {
  return (
    <Contents isOpen={isOpen}>
      <Title>{modalData.title}</Title>
      <p>기술스택 : {modalData.techStack}</p>
      <p>요약 : {modalData.description}</p>
      <p>기여한 부분 : {modalData.contribution}</p>
      <p>{modalData.takeaway}</p>
      <LinkWrap>
        <a
          href={modalData.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-original" />
        </a>
        <a
          href={modalData.releaseLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </LinkWrap>
    </Contents>
  );
};

export default ClickContents;
