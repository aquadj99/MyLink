"use client";

import React from "react";
import { UserProfile } from "@/types/link";
import { ThemeConfig } from "@/types/theme";
import { CheckCircle2 } from "lucide-react";

interface ProfileHeaderProps {
  profile: UserProfile;
  theme: ThemeConfig;
}

export function ProfileHeader({ profile, theme }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* 아바타 이미지 영역 */}
      <div className="relative mb-4">
        <div className="relative size-24 sm:size-28 overflow-hidden rounded-full border-2 border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <img
            src={profile.avatarUrl}
            alt={profile.displayName}
            className="size-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              // 이미지 로딩 실패 시 기본 아바타로 대체
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces&q=80";
            }}
          />
        </div>
      </div>

      {/* 표시 이름 & 인증 뱃지 */}
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <h1
          className={`text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] leading-tight ${theme.textPrimaryClass}`}
        >
          {profile.displayName}
        </h1>
        <div title="인증된 프로필" className="flex items-center text-[#0066cc]">
          <CheckCircle2 className="size-5 fill-[#0066cc] text-white" />
        </div>
      </div>

      {/* 핸들 ID */}
      <p className="text-[13px] font-medium opacity-65 tracking-tight mb-2.5">
        @{profile.handle}
      </p>

      {/* 바이오 (한 줄 소개) */}
      {profile.bio && (
        <p
          className={`max-w-xs sm:max-w-sm text-[14px] sm:text-[15px] font-normal leading-[1.5] whitespace-pre-line ${theme.textSecondaryClass}`}
        >
          {profile.bio}
        </p>
      )}
    </div>
  );
}
