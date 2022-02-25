import styled from 'styled-components';

const Contents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: var(--color-main-3);
  color: var(--color-main-1);
  z-index: 2;
  transform: ${(props) => !props.isOpen && 'translateY(-101%)'};
  border: 3px solid var(--color-point-1);
  p {
    font-size: 14px;
  }
  transition: all 1s;
`;
const Title = styled.div`
  font-size: 24px;
`;

const SlideContents = ({ isOpen, modalData }) => {
  return (
    <Contents isOpen={isOpen}>
      <Title>{modalData.title}</Title>
      <p>{modalData.summary}</p>
      <p>{modalData.contribution}</p>
      <p>{modalData.takeaway}</p>
      <p>{modalData.stack}</p>
      <p>{modalData.releaseLink}</p>
      <p>{modalData.githubLink}</p>
    </Contents>
  );
};

export default SlideContents;
