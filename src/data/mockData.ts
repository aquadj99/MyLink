import { LinkItem, MyLinkProfileData } from "@/types/link";

export const MOCK_LINKS: LinkItem[] = [
  {
    id: "link-1",
    title: "✍️ 기술 블로그 & 엔지니어링 아카이브",
    url: "https://velog.io/@aquadj99",
    icon: "BookOpen",
    description: "Next.js 16과 React 19 아키텍처, 웹 성능 최적화 기록",
    isActive: true,
  },
  {
    id: "link-2",
    title: "🎨 프로덕션 포트폴리오 쇼케이스",
    url: "https://github.com/aquadj99/portfolio",
    icon: "Briefcase",
    description: "실제 런칭 및 운영 중인 웹 서비스 UI/UX 모음",
    isActive: true,
  },
  {
    id: "link-3",
    title: "⚡ GitHub 오픈소스 프로젝트",
    url: "https://github.com/aquadj99",
    icon: "Github",
    description: "MyLink를 포함한 프론트엔드 오픈소스 레포지토리",
    isActive: true,
  },
  {
    id: "link-4",
    title: "📦 Next.js 16 엔터프라이즈 스타터 킷",
    url: "https://github.com/aquadj99/next16-starter-template",
    icon: "Package",
    description: "Turbopack + Tailwind v4 + shadcn/ui 기반 스타터 템플릿",
    isActive: true,
  },
  {
    id: "link-5",
    title: "☕ 개발자에게 커피 한 잔 후원하기",
    url: "https://buymeacoffee.com/aquadj99",
    icon: "Coffee",
    description: "유용한 오픈소스 개발과 기술 글 작성을 응원해주세요",
    isActive: true,
  },
  {
    id: "link-6",
    title: "💼 1:1 커피챗 및 프로젝트 협업 문의",
    url: "mailto:aquadj99@gmail.com",
    icon: "Mail",
    description: "새로운 기술 제안, 채용 및 외주 프로젝트 논의",
    isActive: true,
  },
  {
    id: "link-7",
    title: "🔒 비공개 아카이브 (비활성화 예시)",
    url: "https://example.com/draft",
    icon: "Lock",
    description: "준비 중인 프로젝트 링크 (비활성화 상태)",
    isActive: false,
  },
];

export const MOCK_PROFILE_DATA: MyLinkProfileData = {
  profile: {
    handle: "aquadj99",
    displayName: "이동재 (Dongjae Lee)",
    bio: "사용자 중심의 프론트엔드 아키텍트 & 개발자 🚀\n자연스럽고 반응성이 뛰어난 웹 인터페이스를 만듭니다.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces&q=80",
    themeId: "apple-modern",
  },
  socialLinks: [
    {
      id: "social-1",
      platform: "github",
      url: "https://github.com/aquadj99",
    },
    {
      id: "social-2",
      platform: "instagram",
      url: "https://instagram.com/aquadj99",
    },
    {
      id: "social-3",
      platform: "email",
      url: "mailto:aquadj99@gmail.com",
    },
    {
      id: "social-4",
      platform: "website",
      url: "https://github.com/aquadj99",
    },
  ],
  links: MOCK_LINKS,
};
