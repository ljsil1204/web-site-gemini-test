import { PortfolioProfile } from '../types';

export const portfolioData: PortfolioProfile = {
  name: '이진실',
  nameEnglish: 'Jin-shil Lee',
  role: '교육대학원생 (석사과정)',
  affiliation: '교육대학원 교육학과',
  email: 'leetruth1204@gmail.com',
  heroCatchphrase: '모든 배움에는 고유한 온도가 있습니다.',
  heroHeadline: '배움의 본질을 묻고, 가능성을 깨우는 교육을 꿈꿉니다.',
  heroIntro:
    '안녕하세요. 학생 한 사람 한 사람의 눈높이에서 배움의 기쁨을 함께 찾아가는 교육대학원생 이진실입니다. 교육학 이론과 살아있는 교실 현장의 가교가 되어, 더 따뜻하고 공정한 배움의 생태계를 연구하고 실천합니다.',
  aboutHeadline: '진심(眞心)과 진실(眞實)이 깃든 교육을 향하여',
  aboutPhilosophy: [
    '교육은 단순히 정형화된 지식을 전달하는 일방향의 과정이 아닙니다. 학생 스스로 질문을 던지고, 자신의 생각에 귀 기울이며, 실패를 두려워하지 않고 세상으로 나아갈 수 있도록 든든한 디딤돌을 놓아주는 일입니다.',
    '교육대학원에서 교수-학습 이론과 교육과정 설계, 그리고 급변하는 미래 사회에 요구되는 에듀테크 활용 역량을 학문적으로 체계화하고 있습니다. 교과서 속 문자에 머무르는 이론이 아니라, 교실 속 아이들의 표정과 목소리에 닿는 살아있는 교육 실천을 지향합니다.',
    '저마다 다른 출발선과 학습 속도를 지닌 모든 학생들이 소외되지 않고, 자신의 고유한 색깔대로 성장할 수 있는 포용적 교실을 만들어가는 연구자이자 교육자가 되고자 합니다.'
  ],
  coreValues: [
    {
      id: 'learner-centered',
      title: '학습자 중심의 공감',
      englishTitle: 'Empathy & Learner-Centeredness',
      description:
        '학생의 현재 위치와 감정에 먼저 귀 기울입니다. 일방적 정답 제시보다 스스로 생각의 매듭을 풀어가는 주체적 탐구 여정을 묵묵히 응원합니다.',
      quote: '"배움의 주어는 언제나 학생이어야 합니다."'
    },
    {
      id: 'theory-practice',
      title: '이론과 실천의 유기적 결합',
      englishTitle: 'Praxis: Theory into Living Practice',
      description:
        '탄탄한 교육학적 이론 연구를 바탕으로, 교실 현장의 구체적인 갈등과 수업 고민을 해결할 수 있는 실효성 높은 수업 모형을 탐색합니다.',
      quote: '"연구실의 고민은 반드시 교실의 따뜻한 변화로 이어져야 합니다."'
    },
    {
      id: 'equity-inclusion',
      title: '포용과 교육 격차 해소',
      englishTitle: 'Equity & Inclusive Education',
      description:
        '환경과 배경의 차이가 배움의 격차로 이어지지 않도록, 기초학력 안전망과 보편적 학습 설계(UDL)를 통해 누구도 뒤처지지 않는 교실을 지향합니다.',
      quote: '"한 명의 아이도 배움의 문턱 앞에서 길을 잃지 않도록 돕습니다."'
    }
  ],
  researchAreas: [
    {
      id: 'curriculum-instruction',
      number: '01',
      title: '역량 중심 교육과정 및 수업·평가 설계',
      englishTitle: 'Competency-Based Curriculum & Authentic Assessment',
      summary:
        '학생이 배운 지식을 실제 삶의 맥락에서 적용할 수 있도록 돕는 프로젝트 기반 학습(PBL)과 결과 중심이 아닌 성장을 지원하는 과정 중심 평가 모형을 연구합니다.',
      keywords: ['과정중심평가', '역량기반수업', '프로젝트학습(PBL)', '피드백설계'],
      keyQuestions: [
        '단편적 암기를 넘어 실생활 문제 해결 역량을 어떻게 평가할 것인가?',
        '교실 속 협력 수업에서 학습자의 자기주도성을 증진시키는 발문 전략은 무엇인가?'
      ]
    },
    {
      id: 'edtech-literacy',
      number: '02',
      title: '에듀테크 기반 맞춤형 학습과 디지털 리터러시',
      englishTitle: 'EdTech Integration & Digital Citizenship',
      summary:
        '인공지능(AI)과 상호작용형 디지털 도구를 활용하여 개별 학습자에게 최적화된 학습 경로를 제시하고, 비판적 사고력을 갖춘 디지털 시민성을 함양하는 교육 방안을 모색합니다.',
      keywords: ['AI코스웨어', '맞춤형학습', '디지털시민성', '교수학습공학'],
      keyQuestions: [
        '에듀테크 도구가 교사와 학생 간의 인간적 유대를 어떻게 보완할 수 있는가?',
        '디지털 전환 시대에 모든 학생에게 공평한 디지털 접근성과 리터러시를 어떻게 보장할 것인가?'
      ]
    },
    {
      id: 'educational-equity',
      number: '03',
      title: '기초학력 안전망 구축과 포용적 교육(UDL)',
      englishTitle: 'Educational Equity & Universal Design for Learning',
      summary:
        '다양한 인지적·문화적 배경을 가진 학습자가 동일한 교육 목표에 도달할 수 있도록 다감각적 학습 자료와 보편적 학습 설계(UDL) 원리를 적용한 포용적 교실 환경을 연구합니다.',
      keywords: ['기초학력보장', '보편적학습설계(UDL)', '다문화교육', '학습부진지원'],
      keyQuestions: [
        '학습 부진의 정서적 요인(학습된 무기력)을 교실 내에서 어떻게 조기에 발견하고 회복시킬 것인가?',
        '다양한 배경을 가진 학생들이 상호 존중하는 통합적 교실 문화를 어떻게 형성할 것인가?'
      ]
    },
    {
      id: 'sel-classroom',
      number: '04',
      title: '교실 심리학과 사회·정서 학습(SEL)',
      englishTitle: 'Classroom Psychology & Social-Emotional Learning',
      summary:
        '학업 성취의 든든한 밑거름이 되는 심리적 안정감과 회복탄력성을 높이기 위해, 자기인식·관계형성 역량을 기르는 사회·정서 학습(SEL) 프로그램을 교과 수업과 연계하여 탐구합니다.',
      keywords: ['사회정서학습(SEL)', '회복탄력성', '교실공동체', '관계성형성'],
      keyQuestions: [
        '경쟁 중심 분위기를 협력과 심리적 안전감이 공존하는 교실 생태계로 전환하는 방법은 무엇인가?',
        '교사의 긍정적 지지 발문이 학생의 학업적 자기효능감에 미치는 영향은 어떠한가?'
      ]
    }
  ],
  socialLinks: [
    {
      name: '이메일 문의',
      iconName: 'mail',
      url: 'mailto:leetruth1204@gmail.com',
      label: 'leetruth1204@gmail.com',
      description: '연구 협업, 학술 교류 및 교육 관련 문의'
    },
    {
      name: '학술 블로그 / 연구 노트',
      iconName: 'bookOpen',
      url: 'https://velog.io',
      label: '교육학 탐구 일지',
      description: '교육과정 분석, 최신 논문 리뷰 및 수업 아이디어 아카이빙'
    },
    {
      name: '연구 포트폴리오 (Notion)',
      iconName: 'fileText',
      url: 'https://notion.so',
      label: '포트폴리오 워크스페이스',
      description: '수업 지도안, 교재 개발 이력 및 대학원 연구 과제 모음'
    },
    {
      name: 'LinkedIn 프로필',
      iconName: 'linkedin',
      url: 'https://linkedin.com',
      label: 'Jin-shil Lee on LinkedIn',
      description: '교육 연구자 및 동문 네트워크 연결'
    },
    {
      name: '교육자료 저장소 (GitHub)',
      iconName: 'github',
      url: 'https://github.com',
      label: 'EdTech & Teaching Repo',
      description: '디지털 수업 도구 코드 및 공개 교육 자료'
    }
  ]
};
