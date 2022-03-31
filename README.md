# portfolio

💡 개인 포트폴리오 사이트입니다. 여러 인터렉티브한 효과를 배웠으며, 코드 재사용성과 유지보수를 위한 **구조적 고민을 많이 했던 프로젝트**입니다.

## 0. Release.

[Link](https://woobba.site/){:target="_blank"}

## 1. Tech stack.

JavaScript | React.js | styled-component

## 2. Details.

- 메인 인터렉션 효과인 ScrollEvent를 위해 컴포넌트 트리 전체에서 Scroll값을 제공하는 useContext사용
- 코드 재사용성 & 유지보수성 & 가독성 확보를 위해 모든 컴포넌트를 함수로 구현했으며 공통 비즈니스 로직을 적절히 모듈화해 사용
- 불필요한 re-rendering을 방지하기 위해 상황에 따라 useState대신 useRef를 이용하여 변수 유지
- 기존 css로 스타일링했지만 리팩토링 과정에서 styled-component를 도입하여 css-in-js구조로 변경
