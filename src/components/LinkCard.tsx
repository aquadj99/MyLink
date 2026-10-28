"use client";

import React from "react";
import { LinkItem } from "@/types/link";
import { ThemeConfig } from "@/types/theme";
import { DynamicIcon } from "./DynamicIcon";
import { ChevronRight } from "lucide-react";

interface LinkCardProps {
  link: LinkItem;
  theme: ThemeConfig;
}

export function LinkCard({ link, theme }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      title={link.title}
      className={`apple-press-scale group relative flex w-full items-center justify-between gap-3.5 rounded-2xl p-3.5 sm:p-4 transition-all duration-200 cursor-pointer ${theme.linkButtonClass}`}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {/* 아이콘 컨테이너 */}
        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${theme.linkIconWrapperClass}`}
        >
          <DynamicIcon name={link.icon} className="size-5" />
        </div>

        {/* 텍스트 정보 */}
        <div className="flex flex-col min-w-0 text-left">
          <span
            className={`text-[15px] sm:text-[16px] font-semibold leading-snug tracking-tight truncate ${theme.linkTitleClass}`}
          >
            {link.title}
          </span>
          {link.description && (
            <span
              className={`text-[12px] sm:text-[13px] leading-tight truncate opacity-80 mt-0.5 ${theme.linkDescClass}`}
            >
              {link.description}
            </span>
          )}
        </div>
      </div>

      {/* 우측 네비게이션 화살표 */}
      <div className="shrink-0 pl-1 opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5">
        <ChevronRight className="size-5" />
      </div>
    </a>
  );
}
