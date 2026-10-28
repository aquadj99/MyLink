export type SocialPlatform =
  | 'instagram'
  | 'youtube'
  | 'github'
  | 'twitter'
  | 'email'
  | 'website';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: string;
  description?: string;
  isActive: boolean;
}

export interface UserProfile {
  handle: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  themeId: string;
}

export interface MyLinkProfileData {
  profile: UserProfile;
  socialLinks: SocialLink[];
  links: LinkItem[];
}
