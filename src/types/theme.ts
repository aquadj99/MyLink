export interface ThemeConfig {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  isDark: boolean;
  pageBgClass: string;
  pageBgStyle?: React.CSSProperties;
  cardBgClass: string;
  cardBorderClass: string;
  textPrimaryClass: string;
  textSecondaryClass: string;
  accentColor: string;
  linkButtonClass: string;
  linkTitleClass: string;
  linkDescClass: string;
  linkIconWrapperClass: string;
  socialIconClass: string;
  badgeClass: string;
  controlBgClass: string;
  previewColor: string;
}

export const THEMES: Record<string, ThemeConfig> = {
  "apple-modern": {
    id: "apple-modern",
    name: "애플 모던",
    nameEn: "Apple Modern",
    description: "은은한 파치먼트 그레이와 정갈한 Action Blue 포인트",
    isDark: false,
    pageBgClass: "bg-[#f5f5f7]",
    cardBgClass: "bg-white/90 backdrop-blur-xl",
    cardBorderClass: "border-[#00000010] shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
    textPrimaryClass: "text-[#1d1d1f]",
    textSecondaryClass: "text-[#6e6e73]",
    accentColor: "#0066cc",
    linkButtonClass:
      "bg-white hover:bg-[#fafafc] border border-[#0000000d] hover:border-[#0066cc33] text-[#1d1d1f] shadow-[0_2px_8px_rgb(0,0,0,0.02)]",
    linkTitleClass: "text-[#1d1d1f]",
    linkDescClass: "text-[#6e6e73]",
    linkIconWrapperClass: "bg-[#f5f5f7] text-[#1d1d1f]",
    socialIconClass:
      "bg-white hover:bg-[#fafafc] text-[#1d1d1f] border border-[#0000000d] hover:border-[#0066cc]",
    badgeClass: "bg-[#0066cc15] text-[#0066cc] border-[#0066cc30]",
    controlBgClass: "bg-white/80 border-[#00000010]",
    previewColor: "#0066cc",
  },
  "clean-white": {
    id: "clean-white",
    name: "클린 화이트",
    nameEn: "Clean White",
    description: "미니멀한 순백의 캔버스와 깔끔한 블랙 헤어라인",
    isDark: false,
    pageBgClass: "bg-white",
    cardBgClass: "bg-white",
    cardBorderClass: "border-zinc-200/80 shadow-sm",
    textPrimaryClass: "text-zinc-900",
    textSecondaryClass: "text-zinc-500",
    accentColor: "#18181b",
    linkButtonClass:
      "bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-900 text-zinc-900",
    linkTitleClass: "text-zinc-900 font-semibold",
    linkDescClass: "text-zinc-500",
    linkIconWrapperClass: "bg-zinc-100 text-zinc-900",
    socialIconClass:
      "bg-zinc-50 hover:bg-zinc-100 text-zinc-800 border border-zinc-200",
    badgeClass: "bg-zinc-100 text-zinc-800 border-zinc-300",
    controlBgClass: "bg-white border-zinc-200",
    previewColor: "#18181b",
  },
  "midnight-dark": {
    id: "midnight-dark",
    name: "미드나잇 다크",
    nameEn: "Midnight Dark",
    description: "딥 블랙과 차콜 서피스, Sky Link Blue 글로우",
    isDark: true,
    pageBgClass: "bg-[#141416]",
    cardBgClass: "bg-[#1f1f23]/90 backdrop-blur-xl",
    cardBorderClass: "border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
    textPrimaryClass: "text-white",
    textSecondaryClass: "text-zinc-400",
    accentColor: "#2997ff",
    linkButtonClass:
      "bg-[#27272b] hover:bg-[#303035] border border-white/10 hover:border-[#2997ff66] text-white",
    linkTitleClass: "text-white font-medium",
    linkDescClass: "text-zinc-400",
    linkIconWrapperClass: "bg-[#18181b] text-[#2997ff]",
    socialIconClass:
      "bg-[#27272b] hover:bg-[#323237] text-zinc-200 hover:text-white border border-white/10 hover:border-[#2997ff]",
    badgeClass: "bg-[#2997ff20] text-[#2997ff] border-[#2997ff40]",
    controlBgClass: "bg-[#1f1f23]/80 border-white/10",
    previewColor: "#2997ff",
  },
  "warm-sunset": {
    id: "warm-sunset",
    name: "웜 선셋",
    nameEn: "Warm Sunset",
    description: "노을을 담은 따스한 오렌지 & 앰버 그라데이션",
    isDark: false,
    pageBgClass: "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100",
    cardBgClass: "bg-white/85 backdrop-blur-xl",
    cardBorderClass: "border-orange-200/70 shadow-[0_8px_30px_rgb(249,115,22,0.08)]",
    textPrimaryClass: "text-stone-900",
    textSecondaryClass: "text-stone-600",
    accentColor: "#ea580c",
    linkButtonClass:
      "bg-white/95 hover:bg-orange-50/80 border border-orange-200/80 hover:border-orange-400 text-stone-900 shadow-sm",
    linkTitleClass: "text-stone-900 font-semibold",
    linkDescClass: "text-stone-500",
    linkIconWrapperClass: "bg-orange-100/80 text-orange-600",
    socialIconClass:
      "bg-white hover:bg-orange-50 text-stone-700 border border-orange-200/80 hover:border-orange-500",
    badgeClass: "bg-orange-100 text-orange-700 border-orange-200",
    controlBgClass: "bg-white/80 border-orange-200",
    previewColor: "#ea580c",
  },
  "ocean-blue": {
    id: "ocean-blue",
    name: "오션 블루",
    nameEn: "Ocean Blue",
    description: "시원하고 깊이감 있는 딥 네이비 & 아쿠아 블루 톤",
    isDark: true,
    pageBgClass: "bg-gradient-to-b from-[#0b192c] to-[#1e3e62]",
    cardBgClass: "bg-[#00000045] backdrop-blur-2xl",
    cardBorderClass: "border-sky-500/20 shadow-[0_8px_32px_rgba(0,102,204,0.25)]",
    textPrimaryClass: "text-white",
    textSecondaryClass: "text-sky-200/80",
    accentColor: "#38bdf8",
    linkButtonClass:
      "bg-white/10 hover:bg-white/15 border border-sky-400/25 hover:border-sky-400 text-white backdrop-blur-md",
    linkTitleClass: "text-white font-medium",
    linkDescClass: "text-sky-200/70",
    linkIconWrapperClass: "bg-sky-500/20 text-sky-300",
    socialIconClass:
      "bg-white/10 hover:bg-white/20 text-sky-100 border border-sky-400/30 hover:border-sky-300",
    badgeClass: "bg-sky-500/20 text-sky-300 border-sky-400/40",
    controlBgClass: "bg-[#0b192c]/80 border-sky-500/20",
    previewColor: "#38bdf8",
  },
  "forest-mint": {
    id: "forest-mint",
    name: "포레스트 민트",
    nameEn: "Forest Mint",
    description: "차분하고 싱그러운 세이지 그린 & 보태니컬 무드",
    isDark: false,
    pageBgClass: "bg-[#eaf1ec]",
    cardBgClass: "bg-white/90 backdrop-blur-xl",
    cardBorderClass: "border-emerald-200/70 shadow-[0_8px_30px_rgb(16,185,129,0.06)]",
    textPrimaryClass: "text-emerald-950",
    textSecondaryClass: "text-emerald-700/80",
    accentColor: "#059669",
    linkButtonClass:
      "bg-white hover:bg-emerald-50/60 border border-emerald-200/80 hover:border-emerald-500 text-emerald-950 shadow-sm",
    linkTitleClass: "text-emerald-950 font-semibold",
    linkDescClass: "text-emerald-700/70",
    linkIconWrapperClass: "bg-emerald-100/80 text-emerald-700",
    socialIconClass:
      "bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200 hover:border-emerald-600",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    controlBgClass: "bg-white/80 border-emerald-200",
    previewColor: "#059669",
  },
  "neon-violet": {
    id: "neon-violet",
    name: "네온 바이올렛",
    nameEn: "Neon Violet",
    description: "사이버틱한 딥 인디고 & 발광하는 일렉트릭 퍼플",
    isDark: true,
    pageBgClass: "bg-[#0d071a]",
    cardBgClass: "bg-[#180e2d]/90 backdrop-blur-xl",
    cardBorderClass: "border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.2)]",
    textPrimaryClass: "text-white",
    textSecondaryClass: "text-purple-200/70",
    accentColor: "#c084fc",
    linkButtonClass:
      "bg-[#251645]/80 hover:bg-[#321c5f] border border-purple-500/30 hover:border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.08)]",
    linkTitleClass: "text-white font-medium",
    linkDescClass: "text-purple-200/60",
    linkIconWrapperClass: "bg-purple-500/20 text-purple-300",
    socialIconClass:
      "bg-[#251645] hover:bg-[#351c66] text-purple-200 hover:text-white border border-purple-500/30 hover:border-purple-400",
    badgeClass: "bg-purple-500/25 text-purple-300 border-purple-400/40",
    controlBgClass: "bg-[#180e2d]/80 border-purple-500/30",
    previewColor: "#a855f7",
  },
  "soft-peach": {
    id: "soft-peach",
    name: "소프트 피치",
    nameEn: "Soft Peach",
    description: "부드럽고 사랑스러운 파스텔 살구빛 핑크",
    isDark: false,
    pageBgClass: "bg-gradient-to-br from-[#fff1eb] to-[#ace0f9]/20",
    cardBgClass: "bg-white/90 backdrop-blur-xl",
    cardBorderClass: "border-rose-200/80 shadow-[0_8px_30px_rgb(244,63,94,0.06)]",
    textPrimaryClass: "text-zinc-900",
    textSecondaryClass: "text-zinc-600",
    accentColor: "#f43f5e",
    linkButtonClass:
      "bg-white hover:bg-rose-50/50 border border-rose-200/80 hover:border-rose-400 text-zinc-900 shadow-sm",
    linkTitleClass: "text-zinc-900 font-semibold",
    linkDescClass: "text-zinc-500",
    linkIconWrapperClass: "bg-rose-100 text-rose-500",
    socialIconClass:
      "bg-white hover:bg-rose-50 text-zinc-700 border border-rose-200 hover:border-rose-400",
    badgeClass: "bg-rose-100 text-rose-600 border-rose-200",
    controlBgClass: "bg-white/80 border-rose-200",
    previewColor: "#fb7185",
  },
};

export const DEFAULT_THEME_ID = "apple-modern";

export function getTheme(themeId: string): ThemeConfig {
  return THEMES[themeId] || THEMES[DEFAULT_THEME_ID];
}
