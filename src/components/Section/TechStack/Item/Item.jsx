import * as Styled from './styled';
import data from '../data';

function Item(props) {
  const target = data[props.skillName];
  return (
    <Styled.Wrapper>
      <Styled.Logo>
        <i className={target.skillLogo} style={{ color: target.color }}></i>
      </Styled.Logo>
      <Styled.Contents>{target.skillContent}</Styled.Contents>
    </Styled.Wrapper>
  );
}

export default Item;
