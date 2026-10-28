"use client";

import React from "react";
import { SocialLink } from "@/types/link";
import { ThemeConfig } from "@/types/theme";
import { Mail, Globe } from "lucide-react";

interface SocialIconsBarProps {
  socialLinks: SocialLink[];
  theme: ThemeConfig;
}

// 브랜드 아이콘 SVG 컴포넌트
function GithubIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TwitterIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const PLATFORM_META: Record<
  string,
  { label: string; component: React.ComponentType<{ className?: string }> }
> = {
  github: { label: "GitHub", component: GithubIcon },
  instagram: { label: "Instagram", component: InstagramIcon },
  youtube: { label: "YouTube", component: YoutubeIcon },
  twitter: { label: "X (Twitter)", component: TwitterIcon },
  email: { label: "Email", component: Mail },
  website: { label: "Website", component: Globe },
};

export function SocialIconsBar({ socialLinks, theme }: SocialIconsBarProps) {
  if (!socialLinks || socialLinks.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 py-1">
      {socialLinks.map((item) => {
        const meta = PLATFORM_META[item.platform.toLowerCase()] || {
          label: item.platform,
          component: Globe,
        };
        const Component = meta.component;

        return (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={meta.label}
            title={meta.label}
            className={`apple-press-scale group relative flex size-11 items-center justify-center rounded-full transition-all duration-200 ${theme.socialIconClass}`}
          >
            <Component className="size-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-0.5 text-[11px] font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 z-30">
              {meta.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
