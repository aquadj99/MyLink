"use client";

import { useState } from "react";

interface SocialLink {
  title: string;
  subtitle: string;
  url: string;
  icon: string;
  badge?: string;
  isExternal?: boolean;
  action?: "copy" | "link";
  copyValue?: string;
}

export default function Home() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${label} 복사되었습니다! 🎉`);
    setTimeout(() => {
      setCopiedText(null);
    }, 2500);
  };

  const shareProfile = () => {
    if (navigator.share) {
      navigator.share({
        title: "이동재 | Frontend Developer",
        text: "프론트엔드 개발자 이동재의 프로필 링크입니다.",
        url: window.location.href,
      }).catch(() => {});
    } else {
      copyToClipboard(window.location.href, "프로필 링크가");
    }
  };

  const links: SocialLink[] = [
    {
      title: "GitHub",
      subtitle: "github.com/aquadj99 • 코드 저장소 및 오픈소스",
      url: "https://github.com/aquadj99",
      icon: "github",
      badge: "Active",
      isExternal: true,
    },
    {
      title: "Portfolio",
      subtitle: "주요 프로젝트 및 상세 작업 모음",
      url: "#",
      icon: "portfolio",
      badge: "Featured",
      isExternal: true,
    },
    {
      title: "Tech Blog",
      subtitle: "개발 인사이트 및 트러블슈팅 기록",
      url: "#",
      icon: "blog",
      isExternal: true,
    },
    {
      title: "LinkedIn",
      subtitle: "경력 소개 및 프로페셔널 네트워킹",
      url: "https://linkedin.com",
      icon: "linkedin",
      isExternal: true,
    },
    {
      title: "Email Me",
      subtitle: "aquadj99@gmail.com • 언제든 편하게 연락주세요",
      url: "mailto:aquadj99@gmail.com",
      icon: "email",
      action: "copy",
      copyValue: "aquadj99@gmail.com",
    },
  ];

  const skills = [
    { name: "Next.js 16", color: "from-zinc-700 to-zinc-900 text-white" },
    { name: "React 19", color: "from-cyan-500 to-blue-600 text-white" },
    { name: "TypeScript", color: "from-blue-600 to-indigo-600 text-white" },
    { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500 text-white" },
    { name: "UI / UX Design", color: "from-purple-500 to-pink-500 text-white" },
    { name: "Performance Optimization", color: "from-amber-500 to-orange-500 text-white" },
  ];

  const highlights = [
    { label: "직무", value: "Frontend" },
    { label: "상태", value: "협업 가능 🟢" },
    { label: "위치", value: "Seoul, KR 🇰🇷" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 selection:bg-indigo-500 selection:text-white dark:bg-zinc-950 font-sans">
      {/* Dynamic Background Glow Effects */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-400/25 via-purple-400/20 to-transparent blur-3xl dark:from-indigo-600/20 dark:via-purple-600/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-gradient-to-tl from-pink-400/25 via-rose-300/15 to-transparent blur-3xl dark:from-pink-600/15 dark:via-purple-900/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-sky-400/20 via-teal-300/15 to-transparent blur-3xl dark:from-teal-700/15"
        aria-hidden="true"
      />

      {/* Main Container */}
      <main className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col items-center px-5 py-12 sm:py-16">
        {/* Floating Top Actions */}
        <div className="flex w-full items-center justify-between pb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur-md dark:border-emerald-500/20 dark:bg-emerald-950/40 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for Projects
          </div>

          <button
            onClick={shareProfile}
            type="button"
            className="group inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:text-zinc-900 hover:shadow active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-white cursor-pointer"
            title="프로필 공유하기"
          >
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            공유
          </button>
        </div>

        {/* Profile Card Container */}
        <section className="w-full rounded-3xl border border-white/60 bg-white/70 p-7 shadow-xl shadow-indigo-500/5 backdrop-blur-xl transition-all dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-black/40 sm:p-9">
          {/* Avatar Section */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-sm transition duration-500 group-hover:opacity-100 animate-pulse" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 text-4xl font-extrabold tracking-wider text-white shadow-xl ring-4 ring-white dark:ring-zinc-900">
                동재
              </div>
              <div
                className="absolute right-1 bottom-1 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-900"
                title="인증된 프로필"
              >
                <svg
                  className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Name & Titles */}
            <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              이동재
            </h1>
            <p className="mt-1 text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
              Frontend &amp; Web Developer
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
              @dongjae • aquadj99
            </p>

            {/* Bio Description */}
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              작은 디테일이 주는 뛰어난 사용자 경험과 깔끔하고 유연한 코드 아키텍처를 추구합니다.
              사용자의 문제를 해결하고 새로운 웹 기술을 탐구하는 것에 큰 즐거움을 느낍니다.
            </p>

            {/* Mini Highlight Stats */}
            <div className="mt-6 grid w-full grid-cols-3 gap-2.5 rounded-2xl bg-zinc-100/70 p-3 text-center dark:bg-zinc-800/50">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </span>
                  <span className="mt-0.5 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-xs font-bold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                Connected Links
              </h2>
              <span className="text-[11px] text-zinc-400">클릭하여 이동 및 복사</span>
            </div>

            {links.map((link, idx) => {
              const isCopy = link.action === "copy";
              const content = (
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50/80 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-zinc-800 dark:text-indigo-400 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                    {renderIcon(link.icon)}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400 transition-colors">
                        {link.title}
                      </span>
                      {link.badge && (
                        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                      {link.subtitle}
                    </p>
                  </div>
                  <div className="text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {isCopy ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    )}
                  </div>
                </div>
              );

              if (isCopy && link.copyValue) {
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => copyToClipboard(link.copyValue!, link.title)}
                    className="group block w-full rounded-2xl border border-zinc-200/80 bg-white/60 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-indigo-500/50 dark:hover:bg-zinc-800/80 cursor-pointer"
                  >
                    {content}
                  </button>
                );
              }

              return (
                <a
                  key={idx}
                  href={link.url}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="group block w-full rounded-2xl border border-zinc-200/80 bg-white/60 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-indigo-500/50 dark:hover:bg-zinc-800/80 cursor-pointer"
                >
                  {content}
                </a>
              );
            })}
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8">
            <h2 className="mb-3 px-1 text-xs font-bold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
              Tech Stack &amp; Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-xl border border-zinc-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
                >
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
          <p>© 2026 Dongjae Lee. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Next.js 16</span>
            &amp;
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Tailwind CSS</span>
          </p>
        </footer>
      </main>

      {/* Toast Notification */}
      {copiedText && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <div className="flex items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md dark:bg-white/90 dark:text-zinc-900">
            <svg className="h-4 w-4 text-emerald-400 dark:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {copiedText}
          </div>
        </aside>
      )}
    </div>
  );
}

function renderIcon(icon: string) {
  switch (icon) {
    case "github":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "portfolio":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
      );
    case "blog":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      );
    case "email":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      );
    default:
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      );
  }
}
