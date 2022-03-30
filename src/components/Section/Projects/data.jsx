const data = [
  {
    index: 0,
    headline: '투칵',
    src: '',
    contents: {
      title: "투칵(Today's Cocktail)",
      techStack: 'TypeScript | React.js | Next.js | ESLint | Jest | Axios',
      description: 'CocktailDB API를 활용하여 검색한 재료로 만들 수 있는 칵테일을 추천해주는 서비스.',
      contribution: '모든 기능',
      takeaway: 'TypeScript와 Next프레임웍, CI/CD, Jest라이브러리를 이용한 단위테스트 등 기존 지식을 베이스로 여러 기술스택을 확장시키기 위해 구현한 프로젝트입니다.',
      detail: [
        '추후 실 서비스를 위해 SEO에 유리한 CNA로 개발환경을 구축하고 Vercel로 배포',
        '기존 SPA의 단점인 긴 초기렌더링 시간과 SEO가 원활히 되지 않는점을 고려하여 사전 렌더링 및 SSR을 제공하는 Next.js프레임워크 사용',
        '일관성 있는 프로젝트 관리를 위한 airbnb eslint 설정',
        '데이터를 로드 시 상태 관리를 위해 axios, swr 라이브러리를 활용',
        '사용자 경험 향상을 위해 데이터 로딩중, 로딩 실패 컴포넌트 렌더링 & 결과 데이터가 다량 로드될 때 무한스크롤 구현 & 검색 자동완성과 키보드컨트롤 구현',
        'API 중복 호출 및 임시 저장 데이터로 인한 성능 저하를 최소화하기 위해 페어프로그래밍을 통한 교집합 알고리즘 설계',
      ],
      releaseLink: '',
      githubLink: 'https://github.com/jiseung-kang/cocktail.vercel.com',
    },
  },
  {
    index: 1,
    headline: 'Portfolio',
    src: './project-portfolio.gif',
    contents: {
      title: 'Portfolio',
      techStack: 'JavaScript | React.js | Node.js',
      description: '포트폴리오 사이트 구축.',
      contribution: '(개인프로젝트)',
      takeaway: 'React의 학습을 위해 만든 프로젝트입니다. 여러 인터렉티브한 효과를 배웠으며, 코드 재사용성과 유지보수를 위한 구조적 고민을 많이 했던 프로젝트입니다.',
      detail: [
        '메인 인터렉션 효과인 ScrollEvent를 위해 컴포넌트 트리 전체에서 Scroll값을 제공하는 useContext사용',
        '코드 재사용성 & 유지보수성 & 가독성 확보를 위해 모든 컴포넌트를 함수로 구현했으며 공통 비즈니스 로직을 적절히 모듈화해 사용',
        '불필요한 re-rendering을 방지하기 위해 상황에 따라 useState대신 useRef를 이용하여 변수 유지',
        '기존 css로 스타일링했지만 리팩토링 과정에서 styled-component를 도입하여 css-in-js구조로 변경',
      ],
      releaseLink: 'https://woobba.site/',
      githubLink: 'https://github.com/woobba94/portfolio',
    },
  },
  {
    index: 2,
    headline: '오이마켓',
    src: './project-52market.gif',
    contents: {
      title: '오이마켓',
      techStack: 'HTML | CSS | SCSS | JavaScript | Node.js',
      description: '글 혹은 상품을 등록하며 다른 유저들과 댓글과 좋아요로 소통할수있는 SNS 서비스',
      contribution: '유저 검색 기능 | 유저 팔로우, 언팔로우 기능 | 팔로잉, 팔로워 리스트 | 판매상품 등록, 수정',
      takeaway:
        '협업을 통해 Git을 좀 더 유연하게 다루게 되었고 팀원끼리 이슈를 공유하여 함께 문제를 해결하는 과정을 경험한 프로젝트입니다. API를 이용하여 받은 데이터를 잘 뿌리는 것에 집중했던 것이 기억에 남습니다.',
      detail: [
        '주어진 API 명세서를 이용하여 요청에 따라 API 호출을 구현: 이 과정에서 비동기 프로그래밍의 개념을 이해',
        '상품등록 페이지 기능 구현에서 형식 체크 함수를 정의하여 예외처리 수행했으며, 팔로우/언팔로우 기능 간 중복코드가 많아 follow-toggle을 정의하여 모듈화',
        'Github으로 프로젝트를 관리하며 여러 충돌상황을 경험하고 극복',
      ],
      releaseLink: 'https://market-52.herokuapp.com/',
      githubLink: 'https://github.com/woobba94/52market',
    },
  },
  {
    index: 3,
    headline: 'JSQuizzz',
    src: './project-jsqizzz.gif',
    contents: {
      title: 'JSQuizzz',
      techStack: 'HTML | CSS | JavaScript | Chart.js | firebase',
      description: 'JavaScript 문법을 공부하는 퀴즈 사이트.',
      contribution: '전체적인 UI | 테스트 페이지 이벤트 | 콤보와 점수산출 로직 | 결과 페이지 이벤트',
      takeaway:
        'DOM을 이용한 이벤트 컨트롤을 배웠으며, 생각을 코드로 구현하는 과정에 깊이 몰입했던 기억이 있습니다. 추가로 개발자 도구를 이용한 부정행위 방지를 위해 코드 난독화와 클로저기법을 시도했던 프로젝트입니다.',
      detail: [
        '연속 정답 콤보 이펙트 구현과정에서 별도의 함수를 정의하고 콤보변수에 분기를 두어 DOM 접근을 통해 가져온 element의 style을 변경',
        'Floating Text 구현과정에서 setInterval()을 이용하여 10ms마다 함수를 실행시켜 해당 element의 style을 서서히 변경',
        '정답 제출 엔터키 이벤트 구현과정 중 mac OS기준 크롬 브라우저에서 input 창에 한글 입력 후 엔터 시 이벤트 2회 발생하는 버그가 있어 300ms내 연속발생을 차단',
        '클로저기법과 코드난독화를 도입하여 개발자도구로 점수 값을 조작하는 부정행위 방지',
      ],
      releaseLink: ' https://jsquizzz.netlify.app/',
      githubLink: 'https://github.com/woobba94/js-quiz',
    },
  },
  {
    index: 4,
    headline: '색깔의 신',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
    contents: {
      title: '색깔의 신',
      techStack: 'HTML | CSS | JavaScript',
      description: '다른 색을 찾는 재미있는 사이트 구축.',
      contribution: '(개인프로젝트)',
      takeaway:
        'JavaScript를 연습하기 위해 만든 간단한 게임 서비스입니다. 난이도 조절을 효율적으로 하기 위해 고민하였고 레벨별 박스 크기와 색상을 변화시키는 과정을 구현해보았습니다. 이론상 무한한 스테이지를 만들어 주변인들도 만족했던 서비스입니다.',
      releaseLink: 'https://god-of-color.netlify.app/',
      githubLink: 'https://github.com/woobba94/GodOfColor',
    },
  },
  {
    index: 5,
    headline: '이제 취미를 곁들인',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
    contents: {
      title: '이제 취미를 곁들인',
      techStack: 'HTML | CSS | JavaScript',
      description: '재미있는 테스트 사이트 구축.',
      contribution: '(개인프로젝트)',
      takeaway:
        'JavaScript를 공부하기 위해 만들어 본 사이트입니다. 제가 취미가 없었기에 취미를 골라주는 주제를 정했고, 답변의 정해진 가중치에 따라 취미를 뿌려주는 작은 서비스를 만들었습니다. 배포 후 모바일 지원 피드백을 받은 후 미디어쿼리를 적용한 프로젝트입니다.',
      releaseLink: 'https://now-with-hobbies.netlify.app/',
      githubLink: 'https://github.com/woobba94/NowWithHobbies',
    },
  },
];

export default data;
