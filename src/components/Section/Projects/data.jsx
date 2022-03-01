const data = [
  {
    index: 0,
    headline: '포트폴리오',
    button: '상세보기',
    src: '',
    contents: {
      title: '포트폴리오',
      techStack: 'JavaScript | React.js | Node.js',
      description: '개인 포트폴리오 사이트 구축.',
      contribution: '(개인프로젝트)',
      takeaway:
        'React의 학습을 위해 만든 프로젝트입니다. 여러 인터렉티브한 효과를 배웠으며, 코드 재사용성과 유지보수를 위한 구조적 고민을 많이 했던 프로젝트입니다.',
      releaseLink: 'https://woobba.site/',
      githubLink: 'https://github.com/woobba94/portfolio',
    },
  },
  {
    index: 1,
    headline: '오이마켓',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
    contents: {
      title: '오이마켓',
      techStack: 'HTML | CSS | SCSS | JavaScript | Node.js',
      description: 'SNS를 구현하는 팀프로젝트.',
      contribution:
        '유저 검색 기능 | 유저 팔로우, 언팔로우 기능 | 팔로잉, 팔로워 리스트 | 판매상품 등록, 수정',
      takeaway:
        '협업을 통해 Git을 좀 더 유연하게 다루게 되었고 팀원끼리 이슈를 공유하여 함께 문제를 해결하는 과정을 경험한 프로젝트입니다. API를 이용하여 받은 데이터를 잘 뿌리는 것에 집중했던 것이 기억에 남습니다.',
      releaseLink: 'https://market-52.herokuapp.com/',
      githubLink: 'https://github.com/woobba94/52market',
    },
  },
  {
    index: 2,
    headline: 'JSQizzz',
    button: 'Listen',
    src: './project-jsqizzz.gif',
    contents: {
      title: 'JSQizzz',
      techStack: 'HTML | CSS | JavaScript | Chart.js | firebase',
      description: 'JavaScript퀴즈 사이트를 구축하는 팀프로젝트.',
      contribution:
        '전체적인 UI | 테스트 페이지 이벤트 | 콤보와 점수산출 로직 | 결과 페이지 이벤트',
      takeaway:
        'DOM을 이용한 이벤트 컨트롤을 배웠으며, 생각을 코드로 구현하는 과정에 깊이 몰입했던 기억이 있습니다. 추가로 개발자 도구를 이용한 부정행위 방지를 위해 코드 난독화와 클로저기법을 시도했던 프로젝트입니다.',
      releaseLink: ' https://jsquizzz.netlify.app/',
      githubLink: 'https://github.com/woobba94/js-quiz',
    },
  },
  {
    index: 3,
    headline: '색깔의 신',
    button: 'Get Focused',
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
    index: 4,
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
