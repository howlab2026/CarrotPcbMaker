# 🥕 당근 PCB 메이커스 (Carrot PCB Makers)

> 당근마켓 지역 기반의 **PCB 설계·하드웨어 메이커 모임**을 위한 올인원 커뮤니티 웹 플랫폼입니다.  
> 회로 스케치, PCB 설계 도구, BOM 원가 분석, 해외 발주 트래커, 부품 나눔·공구 장터, 공유 장비 대여, 주간 챌린지, 지식 위키, 멘토링 매칭, 잔디 활동 히트맵까지 — 하드웨어 메이커를 위한 모든 것을 제공합니다.

### 🌐 [실시간 온라인 라이브 데모 바로가기](https://howlab2026.github.io/CarrotPcbMaker/)
**URL**: https://howlab2026.github.io/CarrotPcbMaker/  
*(GitHub Pages의 `gh-pages` 브랜치를 통해 정적 웹 호스팅 및 클라이언트 스토리지 백업 모드로 상시 서비스됩니다)*

---

## ✨ 16대 핵심 기능

### 🏠 1. 기본 플랫폼 & 네비게이션
- 🥕 **홈 대시보드 (`Dashboard`)**: 모임 소개, 주요 활동 통계(회원, 프로젝트, 밋업, 글), D-Day 임박 모임 배너, 최신 공개 PCB 작업물 피드
- ⚡ **PCB 작업실 & 갤러리 (`Workspace`)**:
  - **개인 작업 보관함**: 나만의 PCB 설계 노트, 층수/MCU/BOM 스펙, 회로도/기판 사진 업로드
  - **공개 공유 전환**: 스위치 클릭 한 번으로 커뮤니티 갤러리에 공개하여 피어 리뷰 및 좋아요, 댓글 토론 수집
- 📅 **일정 & 오프라인 밋업 (`CalendarView`)**: 정기 오프라인 납땜 워크숍, 기판 품평회, 해외 묶음 발주 일정 등록 및 실시간 참석(RSVP) 신청
- 💬 **실시간 채팅 (`ChatView`)**:
  - **4개 멀티 채널**: `#자유수다방`, `⚡ 회로 & 아트웍 Q&A`, `📦 부품 공구 & 발주 나눔`, `☕ 오프라인 번개 모임`
  - **1:1 개인 DM**: 회원 간 실시간 귓속말 & 사진/회로도 첨부 전송
- 👥 **사용자 등록 & 간편 계정 전환 (`AuthModal`)**: 신규 회원가입, 로그인 및 원클릭 데모 계정 전환
- 🔔 **실시간 알림 센터 (`NotificationCenter`)**: 댓글, 좋아요, 공구 참여, 밋업 D-Day, SOS 채택 실시간 알림 드롭다운
- 🌙 **다크 모드 전역 테마**: 시스템 환경 및 헤더 우측 토글(Sun/Moon)을 통한 라이트/다크 테마 원클릭 전환

### 🔧 2. PCB 설계 & 발주 전문 도구
- 📐 **회로 스케치 메모장 (`SchematicNotepad`)**: 브라우저 Canvas 기반 자유 스케치, 12종 회로 기호 스탬프(R, C, L, D, LED, IC, GND, VCC 등), 모눈 그리드, Undo/Redo, PNG 다운로드
- 🧮 **PCB 설계 계산기 (`PcbCalculator`)**: 마이크로스트립/스트립라인 임피던스, 전류 용량, 비아 열저항, 열 해석, RC 필터 등 다중 계산기
- 🔍 **거버 파일 뷰어 (`GerberViewer`)**: Gerber RS-274X 및 Excellon 드릴 포맷 파싱, 레이어별 on/off 토글, 줌·패닝 지원
- 📋 **BOM 관리 & 부품 검색기 (`BomManager`)**: 프로젝트 BOM 부품 테이블 편집, 원가 자동 합산(USD/KRW 환산), 부품 DB 가격 비교, CSV 가져오기/내보내기
- 📦 **기판 발주 트래커 (`OrderTracker`)**: JLCPCB, PCBWay 등 5단계 칸반 파이프라인(주문접수 → 기판제작 → SMT실장 → 국제배송 → 수령완료), D-Day 카운트다운, 송장 추적

### 🤝 3. 장터 & 공유 생태계
- 📦 **부품 나눔 & 해외 공구 장터 (`MarketView`)**: 부품 나눔 등록 및 해외 기판 묶음 공구 모집, 진행률 바, 참여/취소 토글
- 🔧 **동네 공유 장비 대여 (`EquipmentView`)**: 납땜/측정/제작/공구 카테고리별 장비 등록, 이용 가능/대여중 상태 관리, DM 연결

### 🏆 4. 커뮤니티 & 지식 공유
- 📋 **커뮤니티 게시판 6종 (`BoardView`)**:
  - 공지사항, 정보게시판, 일반게시판, 비밀게시판(익명 닉네임), 건의사항(상태배지)
  - 🆘 **SOS 클리닉**: PCB/회로 사진 위에 **핀포인트 마킹**으로 정확한 버그 위치 지정, 댓글 해결책 채택 시 도우미에게 온도 +1.5℃ 보상
- 🏆 **주간 챌린지 & 콘테스트 (`ChallengeView`)**: 주제별 초미니 보드/아름다운 아트웍 콘테스트 개최, 출품작 제출, 투표 및 우승자 명예의 전당
- 📚 **메이커 지식 위키 (`WikiView`)**: KiCad 팁, 부품 선정, 발주 가이드, 납땜 노하우 등 집단 지성 아티클 검색 및 마크다운 작성
- 🎓 **멘토링 매칭 시스템 (`MentoringView`)**: 납땜 온도 50℃ 이상 멘토와 초보 멘티 간 1:1 결연, 기술 코칭 및 1:1 대화방 연동
- 📈 **활동 히트맵 & 통계 분석 (`StatsView`)**: GitHub 스타일 26주 잔디 히트맵, 4대 요약 지표, 활동 분포 바 차트, 상위 랭커 명예의 전당

### 🌡️ 5. 당근 납땜 온도 & 6단계 메이커 등급 체계
커뮤니티 활동에 따라 유저의 **납땜 온도**(36.5℃ ~ 99.9℃)가 실시간 변동하며, 시각적인 6단계 등급이 자동 부여됩니다:

| 등급 | 칭호 | 온도 범위 | 아이콘 |
| :---: | :--- | :---: | :---: |
| **Lv.1** | **새싹 메이커** | 36.5 ~ 39.9℃ | 🌱 |
| **Lv.2** | **납땜 견습생** | 40.0 ~ 49.9℃ | 🔥 |
| **Lv.3** | **회로 장인** | 50.0 ~ 64.9℃ | ⚡ |
| **Lv.4** | **아트웍 대가** | 65.0 ~ 79.9℃ | 💎 |
| **Lv.5** | **PCB 마스터** | 80.0 ~ 94.9℃ | 👑 |
| **Lv.6** | **전설의 납땜러** | 95.0 ~ 99.9℃ | 🏆 |

**온도 부스트 규칙**: 마켓 등록 (+0.5℃), 공유 장비 등록 (+0.8℃), SOS 채택 (+1.5℃), 멘토링 완료 (+2.0℃), 챌린지 우승 (+3.0℃)  
**업적 뱃지 7종 도감 완비** (`ProfileModal.jsx`)

### ⚙️ 6. 운영진 관리자 화면
- **운영진 관리자 화면 (`AdminPanel`)**: 회원 등급 관리(`정회원` ↔ `운영진` ↔ `활동정지`), 건의사항 일괄 검토 및 처리, 활동 지표 통계

---

## 🏗️ 기술 스택

| 레이어 | 기술 | 비고 |
| :--- | :--- | :--- |
| **프론트엔드** | React 18, Vite | 함수형 컴포넌트 + Hooks |
| **아이콘** | Lucide React | `lucide-react` 패키지 |
| **스타일링** | Vanilla CSS | 인라인 `<style>` JSX 패턴 + CSS 변수 (다크 모드 지원) |
| **상태 관리** | React useState + Context API | `context/AuthContext.jsx` |
| **데이터** | localStorage (클라이언트) / JSON (서버) | `mockApi.js` + `mockData.js` |
| **백엔드** | Node.js, Express, Socket.io | 실시간 웹소켓 + REST API |
| **배포** | GitHub Pages (`gh-pages`) | `scripts/deploy.js` |

---

## 📁 프로젝트 구조

```
CarrotPcbMaker/
├── AGENTS.md                    # AI 에이전트 개발 가이드 (필수 준수 수칙)
├── README.md                    # 프로젝트 소개 및 매뉴얼 (이 문서)
├── package.json                 # 루트 스크립트
├── docs/                        # 📄 기획·개발 문서 (타임스탬프 이력 누적)
│   ├── planning/                # 기능 기획 로드맵 문서
│   ├── implementation/          # 구현 상세 기술 문서
│   └── progress/                # 개발 진도 보고서
├── scripts/
│   └── deploy.js                # GitHub Pages 자동 배포 스크립트
├── client/                      # 프론트엔드 (Vite + React)
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx             # 엔트리 포인트
│       ├── App.jsx              # 메인 앱 라우터 (activeTab 기반)
│       ├── index.css            # 전역 디자인 토큰 및 다크 테마 변수
│       ├── mockApi.js           # fetch() 인터셉터 (정적 호스팅용 Mock API)
│       ├── mockData.js          # 시드 데이터 & 6단계 등급/뱃지 정의
│       ├── context/
│       │   └── AuthContext.jsx  # 인증 Context
│       └── components/
│           ├── Header.jsx       # 상단 네비게이션, 알림벨, 다크모드, 유저 위젯
│           ├── Dashboard.jsx    # 홈 대시보드
│           ├── Workspace.jsx    # PCB 작업실 & 갤러리
│           ├── SchematicNotepad.jsx # 회로 스케치 메모장 (신규)
│           ├── BomManager.jsx   # BOM 관리 & 원가 계산기 (신규)
│           ├── OrderTracker.jsx # 기판 발주 트래커 (신규)
│           ├── PcbCalculator.jsx # PCB 설계 계산기
│           ├── GerberViewer.jsx # 거버 파일 뷰어
│           ├── MarketView.jsx   # 부품 나눔 & 해외 공구 장터
│           ├── EquipmentView.jsx # 동네 공유 장비 대여
│           ├── CalendarView.jsx # 일정 & 오프라인 밋업
│           ├── BoardView.jsx    # 커뮤니티 게시판 6종 + SOS
│           ├── ChatView.jsx     # 실시간 채팅 (멀티채널 + DM)
│           ├── ChallengeView.jsx # 주간 챌린지 & 콘테스트 (신규)
│           ├── WikiView.jsx     # 메이커 지식 위키 (신규)
│           ├── MentoringView.jsx # 메이커 멘토링 매칭 (신규)
│           ├── StatsView.jsx    # 활동 히트맵 & 통계 분석 (신규)
│           ├── NotificationCenter.jsx # 실시간 알림 센터 (신규)
│           ├── ProfileModal.jsx # 프로필, 6단계 등급 & 뱃지 도감
│           ├── AdminPanel.jsx   # 운영진 관리자 화면
│           ├── AuthModal.jsx    # 로그인 / 간편 계정 전환 모달
│           └── NewProjectModal.jsx # 새 PCB 작업 등록 모달
└── server/                      # 백엔드 (Express + Socket.io)
    ├── index.js                 # API 및 웹소켓 서버 엔트리
    └── package.json
```

---

## 🔧 로컬 개발 환경 실행

```bash
# 1. 의존성 설치
cd client
npm install

# 2. 로컬 개발 서버 실행 (Mock API 모드)
npm run dev
# → 브라우저에서 http://localhost:5173/CarrotPcbMaker/ 접속

# 3. 프로덕션 빌드 테스트
npm run build
```

---

*최종 업데이트: 2026-09-23 (v3.0)*
