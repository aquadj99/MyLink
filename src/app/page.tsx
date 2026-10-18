"use client";

import { useState } from "react";

export default function Home() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedChip, setSelectedChip] = useState<string>("nextjs");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${label}가 클립보드에 복사되었습니다.`);
    setTimeout(() => {
      setCopiedText(null);
    }, 2400);
  };

  const stackChips = [
    { id: "nextjs", label: "Next.js 16", desc: "Turbopack 기반의 빠른 빌드와 React 서버 컴포넌트(RSC) 아키텍처" },
    { id: "react", label: "React 19", desc: "동시성 렌더링, 서버 액션 및 향상된 상태 관리 훅" },
    { id: "ts", label: "TypeScript", desc: "엄격한 타입 안전성과 안정적인 컴포넌트 인터페이스 설계" },
    { id: "tailwind", label: "Tailwind CSS v4", desc: "고성능 유틸리티 퍼스트 스타일링과 최적화된 CSS 번들" },
    { id: "perf", label: "웹 성능 최적화", desc: "50ms 미만의 즉각적인 인터랙션 반응성과 코어 웹 바이탈 최적화" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased selection:bg-[#0066cc] selection:text-white cursor-default">
      
      {/* ========================================================= */}
      {/* 1. 글로벌 네비게이션: 44px, 순수 블랙 (#000000)           */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-[#000000] text-white">
        <div className="mx-auto flex h-[44px] max-w-[1024px] items-center justify-between px-4 sm:px-6 text-[12px] font-normal tracking-[-0.01em]">
          
          {/* 텍스트 브랜드 로고 (애플 로고 완전 제거) */}
          <a href="#" className="font-semibold text-white tracking-tight hover:opacity-80 transition-opacity">
            MyLink
          </a>

          <div className="hidden sm:flex items-center gap-7 text-[#cccccc]">
            <a href="#overview" className="hover:text-white transition-colors">소개</a>
            <a href="#mylink" className="hover:text-white transition-colors">엔지니어링</a>
            <a href="#hubs" className="hover:text-white transition-colors">연결 허브</a>
            <a href="#capabilities" className="hover:text-white transition-colors">기술 스택</a>
            <a href="#contact" className="hover:text-white transition-colors">문의하기</a>
          </div>

          <div className="flex items-center gap-4 text-[#cccccc]">
            <button
              type="button"
              onClick={() => copyToClipboard("aquadj99@gmail.com", "이메일 주소")}
              className="hover:text-white transition-colors text-[11px] text-[#2997ff]"
            >
              이메일 복사
            </button>
            <span className="opacity-40">|</span>
            <span className="text-[11px] text-zinc-400">한국어</span>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. 서브 네비게이션: 52px, 프로스티드 글래스, 블루 필 버튼 */}
      {/* ========================================================= */}
      <nav className="sticky top-[44px] z-40 apple-frosted border-b border-[#0000000a]">
        <div className="mx-auto flex h-[52px] max-w-[1024px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="text-[20px] sm:text-[21px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
              이동재
            </span>
            <span className="text-[12px] font-normal text-zinc-400 hidden sm:inline">
              웹 프론트엔드 엔지니어
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#overview" className="hidden md:inline text-[14px] text-[#1d1d1f] hover:text-[#0066cc]">
              개요
            </a>
            <a href="#hubs" className="hidden md:inline text-[14px] text-[#1d1d1f] hover:text-[#0066cc]">
              링크 허브
            </a>
            <a href="#capabilities" className="hidden md:inline text-[14px] text-[#1d1d1f] hover:text-[#0066cc]">
              기술 역량
            </a>

            {/* 영구 고정 블루 필 액션 버튼 */}
            <a
              href="mailto:aquadj99@gmail.com"
              className="apple-press-scale inline-flex items-center justify-center rounded-full bg-[#0066cc] px-4 py-1.5 text-[12px] font-normal text-white hover:bg-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-colors"
            >
              프로젝트 제안
            </a>
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* 섹션 1: 순수 화이트 히어로 타일 (product-tile-light)      */}
      {/* ========================================================= */}
      <section id="overview" className="bg-white py-16 sm:py-24 text-center">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6">
          
          <p className="text-[17px] font-semibold tracking-[-0.015em] text-[#0066cc] mb-2">
            프로필 &amp; 웹 아키텍처
          </p>

          <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-[-0.025em] leading-[1.07] text-[#1d1d1f]">
            이동재
          </h1>

          <p className="mt-3 text-[22px] sm:text-[28px] font-normal tracking-[0.007em] leading-[1.14] text-[#1d1d1f]">
            사용자 중심의 프론트엔드 아키텍트 &amp; 개발자.
          </p>

          <p className="mt-4 max-w-xl mx-auto text-[17px] font-normal leading-[1.47] text-[#1d1d1f]">
            전문적인 워크플로우와 뛰어난 반응성. 모든 인터랙션이 자연스럽고 무게감 없이 즉각적으로 전달되는 웹 인터페이스를 만듭니다.
          </p>

          {/* 블루 필 액션 버튼 2개: Primary + Ghost Pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#hubs"
              className="apple-press-scale inline-flex items-center justify-center rounded-full bg-[#0066cc] px-[22px] py-[11px] text-[17px] font-normal text-white hover:bg-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
            >
              허브 둘러보기
            </a>
            <a
              href="https://github.com/aquadj99"
              target="_blank"
              rel="noreferrer"
              className="apple-press-scale inline-flex items-center justify-center rounded-full border border-[#0066cc] bg-transparent px-[22px] py-[11px] text-[17px] font-normal text-[#0066cc] hover:bg-[#0066cc08]"
            >
              GitHub 바로가기 ↗
            </a>
          </div>

          {/* 스튜디오 화면 렌더 프레임 (Apple 단일 소프트 섀도우 적용) */}
          <div className="mt-14 sm:mt-16 flex justify-center">
            <div className="w-full max-w-[840px] rounded-[18px] border border-[#e0e0e0] bg-[#fafafc] overflow-hidden apple-product-shadow text-left">
              
              {/* 상단 윈도우 바 */}
              <div className="flex h-10 items-center justify-between border-b border-[#0000000d] bg-[#f5f5f7] px-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="rounded-md bg-white/80 px-4 py-1 text-[11px] text-zinc-500 font-mono border border-black/5">
                  dongjae.dev/소개
                </div>
                <div className="w-10" />
              </div>

              {/* 윈도우 본문 영역 */}
              <div className="p-8 sm:p-12 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <span className="text-[12px] font-semibold text-[#0066cc] uppercase tracking-wider">
                      핵심 지향점
                    </span>
                    <h2 className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                      손끝에서 느껴지는 즉각적인 반응성.
                    </h2>
                    <p className="text-[17px] font-normal leading-[1.47] text-[#1d1d1f]">
                      Next.js 16의 레이아웃 이동 없는 서버 컴포넌트부터 서브 밀리초 단위의 정밀한 상태 전환까지, 
                      모든 코드는 명확함과 확장성, 순수한 디지털 경험의 우아함을 추구합니다.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-6 text-[14px]">
                      <div>
                        <span className="text-zinc-400 block text-[12px]">위치</span>
                        <span className="font-semibold">대한민국 서울</span>
                      </div>
                      <div>
                        <span className="text-zinc-400 block text-[12px]">전문 분야</span>
                        <span className="font-semibold">Next.js &amp; TypeScript</span>
                      </div>
                      <div>
                        <span className="text-zinc-400 block text-[12px]">협업 상태</span>
                        <span className="font-semibold text-[#0066cc]">프로젝트 협업 가능</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[14px] bg-[#f5f5f7] p-5 flex flex-col justify-between border border-[#e0e0e0]">
                    <div>
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                        주요 지표
                      </span>
                      <div className="mt-3 text-[32px] font-semibold tracking-tight text-[#1d1d1f]">
                        100%
                      </div>
                      <p className="text-[14px] text-zinc-600 mt-1">
                        완성도와 픽셀 정밀도를 향한 집념.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard("aquadj99@gmail.com", "이메일 주소")}
                      className="apple-press-scale mt-6 w-full rounded-full bg-white border border-[#e0e0e0] py-2 text-[13px] font-semibold text-[#0066cc] hover:bg-zinc-50"
                    >
                      연락처 이메일 복사
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 섹션 2: 니어블랙 다크 타일 (#272729) (product-tile-dark)  */}
      {/* ========================================================= */}
      <section id="mylink" className="bg-[#272729] py-20 sm:py-28 text-white text-center">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6">
          
          <p className="text-[17px] font-semibold tracking-[-0.015em] text-[#2997ff] mb-2">
            MyLink Pro
          </p>

          <h2 className="text-[34px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1] text-white">
            현대적인 웹 성능을 위한 엔지니어링.
          </h2>

          <p className="mt-3 text-[22px] sm:text-[28px] font-normal leading-[1.14] text-[#cccccc]">
            불필요한 추상화 없는 극상의 유연함.
          </p>

          <p className="mt-4 max-w-xl mx-auto text-[17px] font-normal leading-[1.47] text-[#cccccc]">
            Next.js 16과 Turbopack 기반으로 설계되었습니다. 정갈하고 고요하며, 
            사용자의 모든 프레임을 존중하는 신뢰도 높은 소프트웨어 아키텍처를 지향합니다.
          </p>

          {/* 다크 서피스 전용 스카이 링크 블루 (#2997ff) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[17px]">
            <a
              href="https://github.com/aquadj99"
              target="_blank"
              rel="noreferrer"
              className="text-[#2997ff] hover:underline"
            >
              GitHub 저장소 살펴보기 ↗
            </a>
            <a
              href="#capabilities"
              className="text-[#2997ff] hover:underline"
            >
              아키텍처 스펙 확인하기 ↗
            </a>
          </div>

          {/* 다크 스펙 프레임 */}
          <div className="mt-14 flex justify-center">
            <div className="w-full max-w-[760px] rounded-[18px] bg-[#1d1d1f] p-8 border border-white/10 apple-product-shadow text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[12px] text-[#2997ff]">
                  // 시스템 사양
                </span>
                <span className="text-[12px] text-[#cccccc]">
                  v2.0 • 공식 릴리즈
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[13px]">
                <div className="p-4 rounded-[12px] bg-[#2a2a2c] border border-white/5">
                  <span className="text-zinc-400 block text-[11px]">프레임워크</span>
                  <span className="text-white font-semibold text-[15px] mt-1 block">Next.js 16.3</span>
                  <span className="text-zinc-500 text-[11px] mt-1 block">App Router 네이티브</span>
                </div>
                <div className="p-4 rounded-[12px] bg-[#2a2a2c] border border-white/5">
                  <span className="text-zinc-400 block text-[11px]">런타임</span>
                  <span className="text-white font-semibold text-[15px] mt-1 block">React 19.2</span>
                  <span className="text-zinc-500 text-[11px] mt-1 block">동시성 렌더링 &amp; 액션</span>
                </div>
                <div className="p-4 rounded-[12px] bg-[#2a2a2c] border border-white/5">
                  <span className="text-zinc-400 block text-[11px]">컴파일러</span>
                  <span className="text-white font-semibold text-[15px] mt-1 block">Turbopack</span>
                  <span className="text-zinc-500 text-[11px] mt-1 block">초고속 증분 빌드</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 섹션 3: 파치먼트 유틸리티 카드 그리드 (#f5f5f7)           */}
      {/* ========================================================= */}
      <section id="hubs" className="bg-[#f5f5f7] py-20 sm:py-24">
        <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-[34px] sm:text-[40px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
              연결된 허브.
            </h2>
            <p className="mt-2 text-[17px] font-normal text-zinc-600">
              핵심 채널, 소스코드 저장소 및 직접적인 연락처 모음입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "GitHub 저장소",
                desc: "오픈소스 기여 내역, 실험적인 프로젝트 및 전체 소스코드를 확인하실 수 있습니다.",
                meta: "@aquadj99",
                action: "코드 보기",
                url: "https://github.com/aquadj99",
                isExternal: true,
              },
              {
                title: "포트폴리오 쇼케이스",
                desc: "인터랙티브 웹 프로덕션 작업물과 상세 구현 사례를 모아놓은 쇼케이스입니다.",
                meta: "주요 작업 모음",
                action: "작업물 확인",
                url: "#overview",
                isExternal: false,
              },
              {
                title: "기술 블로그 & 기록",
                desc: "웹 성능 최적화, 프론트엔드 아키텍처 및 트러블슈팅 경험을 깊이 있게 기록합니다.",
                meta: "엔지니어링 아카이브",
                action: "글 읽어보기",
                url: "#mylink",
                isExternal: false,
              },
              {
                title: "직접 문의 & 이메일",
                desc: "프로젝트 협업, 기술 상담, 채용 제안 등 언제든 편하게 연락 주실 수 있습니다.",
                meta: "aquadj99@gmail.com",
                action: "이메일 복사",
                copyValue: "aquadj99@gmail.com",
                isCopy: true,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-[18px] border border-[#e0e0e0] bg-white p-6 transition-all duration-200 hover:border-zinc-300"
              >
                <div>
                  <div className="h-10 w-10 rounded-[8px] bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-4">
                    <span className="text-[15px] font-semibold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0f0f0]">
                  <span className="text-[12px] text-zinc-400 block mb-2 font-mono">
                    {card.meta}
                  </span>
                  {card.isCopy ? (
                    <button
                      type="button"
                      onClick={() => copyToClipboard(card.copyValue!, "이메일 주소")}
                      className="text-[15px] font-normal text-[#0066cc] hover:underline cursor-default"
                    >
                      {card.action} ↗
                    </button>
                  ) : (
                    <a
                      href={card.url}
                      target={card.isExternal ? "_blank" : undefined}
                      rel={card.isExternal ? "noreferrer" : undefined}
                      className="text-[15px] font-normal text-[#0066cc] hover:underline"
                    >
                      {card.action} ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 섹션 4: 기술 스택 및 역량 칩 (화이트 #ffffff)              */}
      {/* ========================================================= */}
      <section id="capabilities" className="bg-white py-20 sm:py-24 text-center">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6">
          
          <h2 className="text-[34px] sm:text-[40px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
            기술 스택 및 역량.
          </h2>
          <p className="mt-2 text-[17px] font-normal text-zinc-600 max-w-lg mx-auto">
            속도, 정밀도, 그리고 지속 가능성을 위해 검증된 현대적인 도구들로 개발합니다.
          </p>

          {/* 알약 형태의 기술 스택 셀렉터 칩 */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {stackChips.map((chip) => {
              const isSelected = selectedChip === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setSelectedChip(chip.id)}
                  className={`apple-press-scale rounded-full px-4 py-3 text-[14px] transition-all cursor-default ${
                    isSelected
                      ? "border-2 border-[#0071e3] bg-white font-semibold text-[#1d1d1f]"
                      : "border border-[#e0e0e0] bg-[#fafafc] font-normal text-zinc-700 hover:border-zinc-400"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          {/* 선택된 칩 상세 설명 박스 */}
          <div className="mt-8 mx-auto max-w-md rounded-[18px] bg-[#f5f5f7] p-6 border border-[#e0e0e0]">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0066cc]">
              아키텍처 세부 사항
            </span>
            <p className="mt-2 text-[17px] font-normal text-[#1d1d1f]">
              {stackChips.find((c) => c.id === selectedChip)?.desc}
            </p>
          </div>

          <div className="mt-10">
            <a
              href="mailto:aquadj99@gmail.com"
              className="apple-press-scale inline-flex items-center justify-center rounded-full bg-[#0066cc] px-6 py-3 text-[17px] font-normal text-white hover:bg-[#0071e3] transition-colors"
            >
              대화 시작하기
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. 푸터: 파치먼트 (#f5f5f7), 2.41 행간의 여유로운 링크     */}
      {/* ========================================================= */}
      <footer id="contact" className="bg-[#f5f5f7] border-t border-[#0000000d] py-14 text-zinc-500">
        <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
          
          <div className="border-b border-zinc-200 pb-4 text-[12px] leading-relaxed text-zinc-500">
            <p>
              1. MyLink는 이동재 개발자가 직접 설계 및 관리하는 공식 프로필 허브입니다. 최신 웹 표준 및 브라우저 엔진에 완벽히 최적화되어 있습니다.
            </p>
            <p className="mt-1">
              2. 주요 기반 기술은 Next.js 16, React 19, TypeScript 및 Tailwind CSS입니다. 모든 권리는 해당 소유자에게 귀속됩니다.
            </p>
          </div>

          {/* 컬럼 링크 그리드 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 text-[12px]">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2 text-[13px]">
                프로필
              </h4>
              <ul className="space-y-2 leading-[2.41]">
                <li><a href="#overview" className="hover:underline">개요</a></li>
                <li><a href="#mylink" className="hover:underline">엔지니어링 원칙</a></li>
                <li><a href="#hubs" className="hover:underline">프로젝트 쇼케이스</a></li>
                <li><a href="#capabilities" className="hover:underline">핵심 역량</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2 text-[13px]">
                연결 허브
              </h4>
              <ul className="space-y-2 leading-[2.41]">
                <li><a href="https://github.com/aquadj99" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
                <li><a href="#hubs" className="hover:underline">포트폴리오</a></li>
                <li><a href="#hubs" className="hover:underline">기술 블로그</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2 text-[13px]">
                기술 스택
              </h4>
              <ul className="space-y-2 leading-[2.41]">
                <li><a href="#capabilities" className="hover:underline">Next.js 16 (App Router)</a></li>
                <li><a href="#capabilities" className="hover:underline">React 19 동시성 렌더링</a></li>
                <li><a href="#capabilities" className="hover:underline">TypeScript 엄격 모드</a></li>
                <li><a href="#capabilities" className="hover:underline">Tailwind CSS 4.0</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2 text-[13px]">
                직접 문의
              </h4>
              <ul className="space-y-2 leading-[2.41]">
                <li><a href="mailto:aquadj99@gmail.com" className="hover:underline">이메일 보내기</a></li>
                <li><span className="text-zinc-400">대한민국 서울</span></li>
                <li><span className="text-zinc-400">프로젝트 협업 환영</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-zinc-500">
            <p>
              Copyright © 2026 이동재. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="hover:underline cursor-default">개인정보 처리방침</span>
              <span>|</span>
              <span className="hover:underline cursor-default">이용약관</span>
              <span>|</span>
              <span className="hover:underline cursor-default">법적 고지</span>
              <span>|</span>
              <span className="hover:underline cursor-default">사이트맵</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 부드러운 토스트 알림창 */}
      {copiedText && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="apple-frosted flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-[14px] font-normal text-[#1d1d1f] shadow-lg">
            <svg className="h-4 w-4 text-[#0066cc]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{copiedText}</span>
          </div>
        </aside>
      )}

    </div>
  );
}
