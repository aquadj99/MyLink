"use client";

import React, { useState } from "react";
import { MyLinkProfileData, LinkItem } from "@/types/link";
import { THEMES } from "@/types/theme";
import { X, Plus, Trash2, Eye, EyeOff, Sparkles, Check } from "lucide-react";

interface QuickEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: MyLinkProfileData;
  onSave: (newData: MyLinkProfileData) => void;
}

const SAMPLE_AVATARS = [
  {
    name: "미소 (기본)",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces&q=80",
  },
  {
    name: "스마트",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces&q=80",
  },
  {
    name: "크리에이터",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces&q=80",
  },
  {
    name: "테크",
    url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=faces&q=80",
  },
];

export function QuickEditModal({
  isOpen,
  onClose,
  data,
  onSave,
}: QuickEditModalProps) {
  const [activeTab, setActiveTab] = useState<"profile" | "links">("profile");
  const [displayName, setDisplayName] = useState(data.profile.displayName);
  const [handle, setHandle] = useState(data.profile.handle);
  const [bio, setBio] = useState(data.profile.bio);
  const [avatarUrl, setAvatarUrl] = useState(data.profile.avatarUrl);
  const [themeId, setThemeId] = useState(data.profile.themeId);
  const [links, setLinks] = useState<LinkItem[]>(data.links);

  // 신규 링크 추가용 상태
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDesc, setNewDesc] = useState("");

  if (!isOpen) return null;

  const handleAddLink = () => {
    if (!newTitle.trim() || !newUrl.trim()) return;
    const newLink: LinkItem = {
      id: `link-${Date.now()}`,
      title: newTitle.trim(),
      url: newUrl.trim().startsWith("http") ? newUrl.trim() : `https://${newUrl.trim()}`,
      description: newDesc.trim() || undefined,
      icon: "Globe",
      isActive: true,
    };
    setLinks([newLink, ...links]);
    setNewTitle("");
    setNewUrl("");
    setNewDesc("");
  };

  const handleDeleteLink = (id: string) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  const handleToggleActive = (id: string) => {
    setLinks(
      links.map((l) => (l.id === id ? { ...l, isActive: !l.isActive } : l))
    );
  };

  const handleSave = () => {
    const updatedData: MyLinkProfileData = {
      ...data,
      profile: {
        ...data.profile,
        displayName: displayName.trim() || "MyLink 사용자",
        handle: handle.trim().replace(/^@/, "") || "user",
        bio: bio.trim(),
        avatarUrl: avatarUrl.trim(),
        themeId,
      },
      links,
    };
    onSave(updatedData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-zinc-200/80 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 헤더 */}
        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-[#0066cc]/10 flex items-center justify-center text-[#0066cc]">
              <Sparkles className="size-4" />
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#1d1d1f]">
                프로필 빠른 수정 (Quick Edit)
              </h2>
              <p className="text-[12px] text-zinc-500">
                로컬스토리지에 즉시 동기화되어 실시간 반영됩니다.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="apple-press-scale rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex border-b border-zinc-100 px-6 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`pb-2.5 text-[14px] font-medium transition-colors border-b-2 mr-6 ${
              activeTab === "profile"
                ? "border-[#0066cc] text-[#0066cc]"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            프로필 & 테마
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("links")}
            className={`pb-2.5 text-[14px] font-medium transition-colors border-b-2 ${
              activeTab === "links"
                ? "border-[#0066cc] text-[#0066cc]"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            링크 목록 관리 ({links.length})
          </button>
        </div>

        {/* 탭 컨텐츠 (스크롤 영역) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {activeTab === "profile" ? (
            <div className="space-y-4 text-left">
              {/* 이름 */}
              <div>
                <label className="block text-[13px] font-semibold text-zinc-700 mb-1">
                  표시 이름 (DisplayName)
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="예: 홍길동"
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2 text-[14px] text-zinc-900 focus:border-[#0066cc] focus:outline-none focus:ring-1 focus:ring-[#0066cc]"
                />
              </div>

              {/* 핸들 */}
              <div>
                <label className="block text-[13px] font-semibold text-zinc-700 mb-1">
                  고유 핸들 (@handle)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-zinc-400 text-[14px]">@</span>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="mylink_user"
                    className="w-full rounded-xl border border-zinc-200 pl-8 pr-3.5 py-2 text-[14px] text-zinc-900 focus:border-[#0066cc] focus:outline-none focus:ring-1 focus:ring-[#0066cc]"
                  />
                </div>
              </div>

              {/* 바이오 */}
              <div>
                <label className="block text-[13px] font-semibold text-zinc-700 mb-1">
                  한 줄 소개 (Bio)
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="자기 소개나 슬로건을 입력해주세요."
                  className="w-full rounded-xl border border-zinc-200 p-3 text-[14px] text-zinc-900 focus:border-[#0066cc] focus:outline-none focus:ring-1 focus:ring-[#0066cc]"
                />
              </div>

              {/* 아바타 선택 */}
              <div>
                <label className="block text-[13px] font-semibold text-zinc-700 mb-1">
                  아바타 이미지 URL
                </label>
                <input
                  type="text"
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2 text-[13px] text-zinc-900 focus:border-[#0066cc] focus:outline-none focus:ring-1 focus:ring-[#0066cc] mb-2"
                />
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-zinc-500">샘플 프리셋:</span>
                  <div className="flex gap-2">
                    {SAMPLE_AVATARS.map((sample, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setAvatarUrl(sample.url)}
                        className="apple-press-scale size-8 rounded-full overflow-hidden border border-zinc-300 hover:ring-2 hover:ring-[#0066cc]"
                        title={sample.name}
                      >
                        <img src={sample.url} alt={sample.name} className="size-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 테마 프리셋 */}
              <div>
                <label className="block text-[13px] font-semibold text-zinc-700 mb-1.5">
                  기본 테마 프리셋
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.values(THEMES).map((t) => {
                    const isSelected = t.id === themeId;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setThemeId(t.id)}
                        className={`apple-press-scale flex items-center gap-2 rounded-xl border p-2 text-left text-[12px] transition-all ${
                          isSelected
                            ? "border-[#0066cc] bg-[#0066cc]/10 font-semibold text-[#0066cc]"
                            : "border-zinc-200 hover:border-zinc-300 text-zinc-700"
                        }`}
                      >
                        <span
                          className="size-3.5 rounded-full border border-black/10 shrink-0"
                          style={{ backgroundColor: t.previewColor }}
                        />
                        <span className="truncate">{t.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5 text-left">
              {/* 링크 추가 카드 */}
              <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-200/80 space-y-2.5">
                <span className="text-[12px] font-semibold text-zinc-700 flex items-center gap-1.5">
                  <Plus className="size-3.5 text-[#0066cc]" /> 새 링크 추가
                </span>
                <input
                  type="text"
                  placeholder="링크 제목 (예: 포트폴리오 쇼케이스)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-1.5 text-[13px] text-zinc-900 bg-white"
                />
                <input
                  type="text"
                  placeholder="URL 주소 (예: https://...)"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-1.5 text-[13px] text-zinc-900 bg-white"
                />
                <input
                  type="text"
                  placeholder="보조 설명 (선택)"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-1.5 text-[13px] text-zinc-900 bg-white"
                />
                <button
                  type="button"
                  onClick={handleAddLink}
                  disabled={!newTitle.trim() || !newUrl.trim()}
                  className="apple-press-scale w-full rounded-lg bg-[#0066cc] py-2 text-[13px] font-medium text-white hover:bg-[#0071e3] disabled:opacity-40"
                >
                  목록에 추가하기
                </button>
              </div>

              {/* 기존 링크 목록 */}
              <div className="space-y-2">
                <span className="text-[12px] font-semibold text-zinc-500">
                  현재 링크 항목 ({links.length})
                </span>
                {links.map((link) => (
                  <div
                    key={link.id}
                    className="flex items-center justify-between rounded-xl border border-zinc-200 p-3 bg-white hover:border-zinc-300 transition-colors"
                  >
                    <div className="flex flex-col min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[13px] font-semibold truncate ${
                            link.isActive ? "text-zinc-900" : "text-zinc-400 line-through"
                          }`}
                        >
                          {link.title}
                        </span>
                        {!link.isActive && (
                          <span className="text-[10px] rounded bg-zinc-100 text-zinc-500 px-1 py-0.5">
                            숨김
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-zinc-400 truncate">
                        {link.url}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleToggleActive(link.id)}
                        className="apple-press-scale p-1.5 rounded-lg text-zinc-500 hover:bg-zinc-100"
                        title={link.isActive ? "링크 숨기기" : "링크 보이기"}
                      >
                        {link.isActive ? (
                          <Eye className="size-4 text-[#0066cc]" />
                        ) : (
                          <EyeOff className="size-4 text-zinc-400" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteLink(link.id)}
                        className="apple-press-scale p-1.5 rounded-lg text-red-500 hover:bg-red-50"
                        title="링크 삭제"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 모달 풋터 (저장/취소 버튼) */}
        <div className="flex items-center justify-end gap-3 border-t border-zinc-100 px-6 py-4 bg-zinc-50/50">
          <button
            type="button"
            onClick={onClose}
            className="apple-press-scale rounded-full px-4 py-2 text-[14px] font-normal text-zinc-600 hover:bg-zinc-100"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="apple-press-scale flex items-center gap-1.5 rounded-full bg-[#0066cc] px-5 py-2 text-[14px] font-medium text-white hover:bg-[#0071e3]"
          >
            <Check className="size-4" />
            변경사항 저장
          </button>
        </div>
      </div>
    </div>
  );
}
