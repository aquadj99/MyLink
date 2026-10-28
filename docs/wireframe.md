# [와이어프레임] 마이링크 메인 프로필 화면 UI 명세서

## 1. 개요
본 문서는 **Phase 1(시연용 프로필 페이지)** 구현을 위한 메인 화면 와이어프레임 및 컴포넌트 구조를 정의합니다.
데스크톱과 태블릿 등 대화면에서도 스마트폰 뷰포트(`max-w-[420px]`)를 기준으로 중앙 정렬되어, 인스타그램이나 트위터 등 모바일 인앱 브라우저에서 최적의 가독성을 제공하도록 설계되었습니다.

---

## 2. 레이아웃 구조 (ASCII Wireframe)

```text
+-------------------------------------------------------------+
|  [상단 플로팅 툴바: 🎨 테마 변경 드롭다운 | ✏️ 간이 편집 | 🔄 리셋]  |
+-------------------------------------------------------------+
|                                                             |
|                   [ 스마트폰 중앙 프레임 ]                      |
|                  +-----------------------+                  |
|                  |     (••• Dynamic)     |                  |
|                  |                       |                  |
|                  |        ( O )          | <- 프로필 아바타 (88px)
|                  |       ✓ 뱃지          |                   |
|                  |     홍길동 / 이름     | <- 타이틀 (18px Bold)
|                  |    @creative_hong     | <- 핸들 아이디
|                  |  크리에이터 & 개발자  | <- 바이오 (14px)
|                  |                       |                  |
|                  |    [IG] [YT] [GH] [@] | <- 소셜 아이콘 바
|                  |                       |                  |
|                  | +-------------------+ |                  |
|                  | | [✍️] 기술 블로그   >| | <- 링크 카드 1
|                  | +-------------------+ |                  |
|                  | | [🎨] 포트폴리오   >| | <- 링크 카드 2
|                  | +-------------------+ |                  |
|                  | | [⚡] 오픈소스     >| | <- 링크 카드 3
|                  | +-------------------+ |                  |
|                  | | [☕] 후원 링크     >| | <- 링크 카드 4
|                  | +-------------------+ |                  |
|                  |                       |                  |
|                  |   🔗 Powered by MyLink| <- 푸터 브랜딩
|                  |                       |                  |
|                  |         _____         | <- 홈 인디케이터
|                  +-----------------------+                  |
|                                                             |
+-------------------------------------------------------------+
```

---

## 3. 세부 컴포넌트 명세

### 3.1. 프로필 헤더 (Profile Header)
- **아바타 이미지**:
  - 크기: `w-20 h-20` (80px) 또는 `w-22 h-22` (88px), 완전한 원형(`rounded-full`)
  - 테두리: 2px 솔리드 보더 + 부드러운 드롭 섀도우
  - 공식 뱃지: 우측 하단 24px 블루 인증 체크 마크 오버레이
- **텍스트 계층**:
  - **이름 (Display Name)**: `18px` / `Font-Bold` / 자간 `-0.02em`
  - **핸들 (@handle)**: `12px` / `Font-Medium` / 불투명도 70%
  - **소개글 (Bio)**: `13px` / 줄간격 1.5 / 최대 폭 `280px` 내 중앙 정렬

### 3.2. 소셜 아이콘 바 (Social Icons Bar)
- **컨테이너**: 가로 플렉스(`flex items-center justify-center gap-3`)
- **아이콘 버튼**:
  - 크기: `36×36px` 원형 캡슐
  - 호버 인터랙션: 위로 살짝 뜨는 효과 (`translate-y-[-2px]` 및 `scale-105`)
  - 지원 채널: Instagram, YouTube, GitHub, Email

### 3.3. 링크 블록 스택 (Links Stack)
- **카드 규격**:
  - 너비: 100% (부모 컨테이너 `max-w-[380px]`)
  - 높이: 최소 `64px` (모바일 터치 타겟 `min-h-[48px]` 이상 준수)
  - 모서리 곡률: `rounded-2xl` (16px ~ 20px)
- **카드 내부 그리드**:
  1. **좌측 아이콘 영역 (40×40px)**: 이모지 또는 플랫폼 썸네일 아이콘 (연한 배경 칩)
  2. **중앙 텍스트 영역**:
     - 제목: `13px` / 볼드 / 한 줄 말줄임(`truncate`)
     - 서브타이틀: `11px` / 은은한 톤 / 한 줄 말줄임
  3. **우측 화살표 (Arrow)**:
     - 우측 셰브론(`➔` or `ChevronRight`) 아이콘
     - 호버 시 우측으로 2px 이동 애니메이션
- **인터랙션 피드백**:
  - 터치/클릭 시 `active:scale-[0.98]` 적용으로 실제 버튼을 누르는 듯한 물리적 햅틱감 부여

### 3.4. 푸터 영역 (Footer Badge)
- 중앙 정렬된 미니 캡슐 알약 버튼 (`rounded-full`, 11px)
- "🔗 Powered by MyLink" 표기 및 서비스 소개/생성 링크 연결

---

## 4. 8종 테마 프리셋 스타일 가이드

| 테마 ID | 테마명 | 배경 캔버스 | 카드 배경 | 카드 보더 | 강조 포인트 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `apple-modern` | Apple Modern | `#f5f5f7` (Parchment) | Pure White | `rgba(0,0,0,0.06)` | Action Blue (`#0066cc`) |
| `clean-white` | Clean White | `#ffffff` (Pure) | `#ffffff` | `#e2e8f0` (1px) | Charcoal Black (`#18181b`) |
| `midnight-dark` | Midnight Dark | `#0f172a` (Slate 900) | `rgba(30,41,59,0.7)` | `rgba(255,255,255,0.1)` | Glassmorphism Blur |
| `warm-sunset` | Warm Sunset | Peach Gradient | Pure White (90% Alpha) | `#fdba74` | Warm Orange (`#ea580c`) |
| `ocean-blue` | Ocean Blue | Deep Ocean Gradient | `rgba(255,255,255,0.15)` | `rgba(255,255,255,0.2)` | Sky Blue (`#38bdf8`) |
| `forest-mint` | Forest Mint | Sage Green Tone | White / Mint Light | `#a7f3d0` | Emerald Green (`#059669`) |
| `neon-violet` | Neon Violet | `#09090b` (Deep Zinc) | `#18181b` | `#a855f7` (Purple) | Cyber Purple Glow |
| `soft-peach` | Soft Peach | Pastel Peach Wash | `#ffffff` | `#fecdd3` | Rose Pink (`#e11d48`) |

---

## 5. 인터랙티브 와이어프레임 프리뷰
브라우저 및 아티팩트 환경에서 실제 인터랙션이 가능한 프로토타입은 아래 파일에서 확인하실 수 있습니다:
- **인터랙티브 HTML 와이어프레임**: [wireframe.html](file:///C:/Users/aquadj/.gemini/antigravity/brain/7e72d594-1208-4d68-908e-86ed7625f91e/wireframe.html)
