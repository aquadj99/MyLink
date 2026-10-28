"use client";

import React, { useState } from "react";
import { THEMES, ThemeConfig } from "@/types/theme";
import { Palette, Check } from "lucide-react";

interface ThemeSwitcherProps {
  currentThemeId: string;
  onSelectTheme: (themeId: string) => void;
}

export function ThemeSwitcher({
  currentThemeId,
  onSelectTheme,
}: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const themeList = Object.values(THEMES);
  const currentTheme = THEMES[currentThemeId] || THEMES["apple-modern"];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="apple-press-scale flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3.5 py-1.5 text-[13px] font-medium text-[#1d1d1f] shadow-sm backdrop-blur-md hover:bg-white transition-all"
        title="테마 변경"
      >
        <span
          className="size-3.5 rounded-full border border-black/10 shrink-0"
          style={{ backgroundColor: currentTheme.previewColor }}
        />
        <span className="hidden sm:inline font-normal text-zinc-500">테마:</span>
        <span className="font-medium">{currentTheme.name}</span>
        <Palette className="size-3.5 opacity-60 ml-0.5" />
      </button>

      {/* 테마 선택 팝오버 */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-10 z-50 w-64 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="px-2.5 py-1.5 border-b border-black/5 mb-1.5 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-zinc-500">
                프리셋 테마 선택 (8종)
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">
                {themeList.length} Themes
              </span>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
              {themeList.map((t) => {
                const isSelected = t.id === currentThemeId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      onSelectTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`apple-press-scale flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left text-[13px] transition-colors ${
                      isSelected
                        ? "bg-[#0066cc12] text-[#0066cc] font-semibold"
                        : "text-zinc-700 hover:bg-zinc-100/80 font-normal"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className="size-4 shrink-0 rounded-full border border-black/15 shadow-inner"
                        style={{ backgroundColor: t.previewColor }}
                      />
                      <div className="flex flex-col truncate">
                        <span className="truncate">{t.name}</span>
                        <span className="text-[10px] text-zinc-400 truncate">
                          {t.nameEn}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="size-4 text-[#0066cc] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
