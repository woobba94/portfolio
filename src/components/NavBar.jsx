import styled from 'styled-components';


const ButtonWrap = styled.div`
  position: fixed;
  display: ;
`

const Button = styled.div`
  cursor: pointer;
`

function NavBar() {
  return (
    <div className="NavBar">
      <div>ABOUT ME</div>
      <div>TECH STACK</div>
      <div>EXPERIENCE</div>
      <div>PROJECTS</div>
      <div>CONTACT ME</div>
    </div>
  );
}
export default NavBar;
