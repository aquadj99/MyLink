"use client";

import React, { useEffect, useState } from "react";
import { MyLinkProfileData } from "@/types/link";
import { THEMES, getTheme, ThemeConfig } from "@/types/theme";
import {
  getMyLinkData,
  saveMyLinkData,
  resetToMockData,
} from "@/lib/linkService";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SocialIconsBar } from "@/components/SocialIconsBar";
import { LinkCard } from "@/components/LinkCard";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { QuickEditModal } from "@/components/QuickEditModal";
import {
  RotateCcw,
  Share2,
  Edit3,
  Check,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function MyLinkPage() {
  const [data, setData] = useState<MyLinkProfileData | null>(null);
  const [currentThemeId, setCurrentThemeId] = useState<string>("apple-modern");
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 로컬스토리지 데이터 로드 및 초기 시딩
  useEffect(() => {
    async function loadData() {
      const loaded = await getMyLinkData();
      setData(loaded);
      if (loaded.profile.themeId && THEMES[loaded.profile.themeId]) {
        setCurrentThemeId(loaded.profile.themeId);
      }
    }
    loadData();
  }, []);

  const theme: ThemeConfig = getTheme(currentThemeId);

  // 토스트 메시지 유틸리티
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // 테마 변경 핸들러
  const handleSelectTheme = (themeId: string) => {
    setCurrentThemeId(themeId);
    if (data) {
      const updated = {
        ...data,
        profile: {
          ...data.profile,
          themeId,
        },
      };
      setData(updated);
      saveMyLinkData(updated);
      showToast(`'${THEMES[themeId]?.name || themeId}' 테마가 적용되었습니다.`);
    }
  };

  // 빠른 수정 저장 핸들러
  const handleSaveQuickEdit = (newData: MyLinkProfileData) => {
    setData(newData);
    setCurrentThemeId(newData.profile.themeId);
    saveMyLinkData(newData);
    showToast("프로필 및 링크 정보가 저장되었습니다.");
  };

  // 샘플 데이터 원클릭 리셋 핸들러
  const handleResetData = () => {
    if (
      window.confirm(
        "로컬스토리지 데이터를 초기 시연용 기본 더미 데이터로 리셋하시겠습니까?"
      )
    ) {
      const resetData = resetToMockData();
      setData(resetData);
      setCurrentThemeId(resetData.profile.themeId);
      showToast("초기 데모 데이터로 복원되었습니다.");
    }
  };

  // 링크 공유 (클립보드 복사)
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      showToast("프로필 링크가 클립보드에 복사되었습니다!");
    }
  };

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f7]">
        <div className="flex flex-col items-center gap-3">
          <div className="size-8 animate-spin rounded-full border-2 border-[#0066cc] border-t-transparent" />
          <p className="text-[14px] text-zinc-500 font-medium">
            마이링크 프로필을 불러오는 중...
          </p>
        </div>
      </div>
    );
  }

  // 활성화된 링크만 노출
  const activeLinks = (data.links || []).filter((l) => l.isActive);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 font-sans antialiased flex flex-col justify-between ${theme.pageBgClass}`}
    >
      {/* ========================================================= */}
      {/* 1. 상단 글로벌 시연 유틸리티 헤더 바                      */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-white/70 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          {/* 브랜드 로고 */}
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-[#0066cc] text-white font-bold text-xs shadow-sm">
              M
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-[#1d1d1f]">
              MyLink
            </span>
            <span className="hidden sm:inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-600">
              Demo Phase 1
            </span>
          </div>

          {/* 우측 컨트롤 도구들 (테마 전환기, 빠른 편집, 공유, 리셋) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* 테마 스위처 */}
            <ThemeSwitcher
              currentThemeId={currentThemeId}
              onSelectTheme={handleSelectTheme}
            />

            {/* 빠른 수정 버튼 */}
            <button
              type="button"
              onClick={() => setIsEditModalOpen(true)}
              className="apple-press-scale flex items-center gap-1.5 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[13px] font-medium text-[#1d1d1f] shadow-sm backdrop-blur-md hover:bg-white"
              title="프로필 및 링크 빠른 편집"
            >
              <Edit3 className="size-3.5 text-[#0066cc]" />
              <span className="hidden md:inline">빠른 편집</span>
            </button>

            {/* 공유하기 버튼 */}
            <button
              type="button"
              onClick={handleShare}
              className="apple-press-scale flex size-8 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#1d1d1f] shadow-sm backdrop-blur-md hover:bg-white"
              title="프로필 링크 공유"
            >
              <Share2 className="size-3.5" />
            </button>

            {/* 초기화 버튼 */}
            <button
              type="button"
              onClick={handleResetData}
              className="apple-press-scale flex size-8 items-center justify-center rounded-full border border-black/10 bg-white/90 text-zinc-500 shadow-sm backdrop-blur-md hover:bg-white hover:text-red-500"
              title="샘플 데이터로 초기화"
            >
              <RotateCcw className="size-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. 중앙 집중형 모바일 뷰 카드 레이아웃 (480px)            */}
      {/* ========================================================= */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 sm:py-12">
        <div
          className={`w-full max-w-[480px] rounded-[28px] sm:rounded-[36px] border p-6 sm:p-8 transition-all duration-300 ${theme.cardBgClass} ${theme.cardBorderClass}`}
        >
          {/* 프로필 헤더 (아바타, 이름, 인증 뱃지, 바이오) */}
          <ProfileHeader profile={data.profile} theme={theme} />

          {/* 소셜 아이콘 바 */}
          <div className="mt-5 mb-7">
            <SocialIconsBar socialLinks={data.socialLinks} theme={theme} />
          </div>

          {/* 링크 목록 스택 (Links Stack) */}
          <div className="space-y-3">
            {activeLinks.length > 0 ? (
              activeLinks.map((link) => (
                <LinkCard key={link.id} link={link} theme={theme} />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center">
                <p className="text-[14px] text-zinc-500">
                  활성화된 링크가 없습니다.
                </p>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(true)}
                  className="mt-3 text-[13px] font-medium text-[#0066cc] hover:underline"
                >
                  [빠른 편집]에서 링크 활성화하기
                </button>
              </div>
            )}
          </div>

          {/* 모바일 카드 내부 하단 브랜딩 */}
          <div className="mt-8 pt-5 border-t border-black/5 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-1.5 text-[12px] font-medium opacity-60">
              <span>MyLink</span>
              <span>•</span>
              <span>스마트 멀티링크</span>
            </div>
            <p className="text-[11px] opacity-40 mt-1">
              언제 어디서나 간편하게 나만의 링크를 공유하세요
            </p>
          </div>
        </div>
      </main>

      {/* ========================================================= */}
      {/* 3. 하단 글로벌 푸터 바                                    */}
      {/* ========================================================= */}
      <footer className="w-full py-6 text-center text-[12px] opacity-50">
        <div className="mx-auto max-w-md px-4 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Powered by <strong>MyLink</strong></span>
          <span className="hidden sm:inline">|</span>
          <span>Apple 스타일 디자인 시스템 &amp; 로컬스토리지 시연 데모</span>
        </div>
      </footer>

      {/* 빠른 수정 팝업 모달 */}
      <QuickEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        data={data}
        onSave={handleSaveQuickEdit}
      />

      {/* 토스트 알림 메시지 */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-[#1d1d1f] px-5 py-2.5 text-[13px] font-medium text-white shadow-xl backdrop-blur-md">
            <Check className="size-4 text-[#2997ff]" />
            <span>{toastMessage}</span>
          </div>
        </aside>
      )}
    </div>
  );
}
