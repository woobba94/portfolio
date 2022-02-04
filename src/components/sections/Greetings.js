import Tab from '../Tab';

function Greetings() {
  return (
    <div className="Greetings">
      <div className="greetingsContent">
        <p>안녕하세요. 주니어 프론트엔드 개발자 정우진입니다.</p>
        <p>
          학부시절 자료구조와 알고리즘을 배우고 다양한 프로젝트에 참여하였고 생각을 프로그래밍언어로
          구현하는 것에 익숙해졌습니다.
        </p>
        <p>
          그 중에서도 웹개발에 관심이 많았던 저는 프론트엔드스쿨과정을 통해 전반적인 프론트엔드
          프로세스를 이해하였습니다.
        </p>
        <p>저는 끊임없는 성장의 가치를 알고있고 어디에서든 성장 할 준비가 되어있습니다.</p>
        <p>이런 저와 함께 성장 할 회사를 찾고 있습니다.</p>
      </div>
      <Tab />
    </div>
  );
}
export default Greetings;