import { MOCK_LINKS, MOCK_PROFILE_DATA } from "@/data/mockData";
import { LinkItem, MyLinkProfileData } from "@/types/link";

export const LOCAL_STORAGE_KEY = "mylink_profile_data";

/**
 * 브라우저 로컬 스토리지 또는 Mock 데이터로부터 전체 프로필 및 링크 데이터를 받아옵니다.
 * - 최초 접속 시 로컬스토리지에 데이터가 없으면 MOCK_PROFILE_DATA를 자동 시딩(저장)합니다.
 * - SSR / Node 환경에서는 Mock 데이터를 안전하게 반환합니다.
 */
export async function getMyLinkData(): Promise<MyLinkProfileData> {
  if (typeof window === "undefined") {
    return MOCK_PROFILE_DATA;
  }

  try {
    const rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!rawData) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(MOCK_PROFILE_DATA));
      return MOCK_PROFILE_DATA;
    }

    const parsedData: MyLinkProfileData = JSON.parse(rawData);
    return parsedData;
  } catch (error) {
    console.error("Failed to load data from localStorage:", error);
    return MOCK_PROFILE_DATA;
  }
}

/**
 * 링크 목록 데이터만 필터링하여 받아옵니다.
 * @param onlyActive true일 경우 활성화된(isActive === true) 링크만 필터링하여 반환합니다. (기본값: true)
 */
export async function getLinks(onlyActive: boolean = true): Promise<LinkItem[]> {
  const data = await getMyLinkData();
  const links = data.links || MOCK_LINKS;

  if (onlyActive) {
    return links.filter((link) => link.isActive);
  }

  return links;
}

/**
 * 로컬스토리지에 변경된 프로필 및 링크 데이터를 저장합니다.
 */
export function saveMyLinkData(data: MyLinkProfileData): boolean {
  if (typeof window === "undefined") return false;

  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Failed to save data to localStorage:", error);
    return false;
  }
}

/**
 * 로컬스토리지 데이터를 기본 Mock 더미 데이터로 리셋합니다.
 */
export function resetToMockData(): MyLinkProfileData {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(MOCK_PROFILE_DATA));
  }
  return MOCK_PROFILE_DATA;
}
