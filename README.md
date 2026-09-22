# 🥕 당근 PCB 메이커스 (Carrot PCB Makers)

> 당근마켓 지역 기반의 **PCB 설계·하드웨어 메이커 모임**을 위한 올인원 커뮤니티 웹 플랫폼입니다.  
> 회원 관리, 개인 작업실 보관함, 커뮤니티 공유 갤러리, 정기 밋업 일정 관리, 5종 테마 게시판, 그리고 실시간 1:1 및 멀티 채널 채팅을 제공합니다.

### 🌐 [실시간 온라인 라이브 데모 바로가기](https://howlab2026.github.io/CarrotPcbMaker/)
**URL**: https://howlab2026.github.io/CarrotPcbMaker/  
*(GitHub Pages의 `gh-pages` 브랜치를 통해 정적 웹 호스팅 및 클라이언트 스토리지 백업 모드로 상시 서비스됩니다)*

---

## ✨ 주요 기능

- 🥕 **홈 대시보드**: 모임 소개, 주요 활동 통계(회원, 프로젝트, 밋업, 글), D-Day 임박 모임 배너, 최신 공개 PCB 작업물 피드
- ⚡ **PCB 작업실 & 갤러리 (Workspace)**:
  - **개인 작업 보관함**: 나만의 PCB 설계 노트, 층수/MCU/BOM 스펙, 회로도/기판 사진 업로드
  - **공개 공유 전환**: 스위치 클릭 한 번으로 커뮤니티 갤러리에 공개하여 피어 리뷰 및 좋아요, 댓글 토론 수집
- 📅 **일정 & 오프라인 밋업 (Calendar)**: 정기 오프라인 납땜 워크숍, 기판 품평회, 해외 묶음 발주 일정 등록 및 실시간 참석(RSVP) 신청
- 📋 **5종 테마 커뮤니티 게시판 (Board)**:
  1. 📢 **공지사항**: 운영진 공식 필독 안내 및 상단 고정(Pin)
  2. 💡 **정보게시판**: KiCad/Altium 팁, JLCPCB/PCBWay 발주 팁, 추천 소자
  3. 💬 **일반게시판**: 자유로운 하드웨어 잡담, 질의응답, 발주 후기
  4. 🔒 **비밀게시판**: 익명 닉네임(`익명의 납땜러`) 자동 부여로 비공개 고민 및 기술 질의
  5. 📮 **건의사항**: 모임 운영 건의, 처리 상태 배지(`접수` → `검토중` → `반영완료`), 운영진 공식 피드백 답변
- 💬 **실시간 채팅 (Messenger)**:
  - **멀티 채널**: `#자유수다방`, `⚡ 회로 & 아트웍 Q&A`, `📦 부품 공구 & 발주 나눔`, `☕ 오프라인 번개 모임`
  - **1:1 개인 DM**: 회원 간 실시간 귓속말 & 사진/회로도 첨부 전송
- ⚙️ **운영진 관리자 화면 (Admin)**: 회원 등급 관리(`정회원` ↔ `운영진` ↔ `활동정지`), 건의사항 일괄 검토 및 처리, 활동 지표 통계
- 👥 **사용자 등록 & 간편 계정 전환**: 신규 회원가입, 로그인 및 다양한 역할(운영진, 회로장인, 아트웍요정, 초보메이커)을 바로 체험할 수 있는 원클릭 데모 계정 전환

---

## 🏗️ 기술 스택

- **Frontend**: React 18, Vite, Lucide Icons, Modern Vanilla CSS Design System
- **Backend**: Node.js, Express, Socket.io (실시간 양방향 웹소켓 통신), Multer (파일/이미지 업로드)
- **Database**: JSON 기반 내장 영속 데이터 저장소 (`server/data/store.js`, 자동 시딩 지원)

---

## 🚀 로컬 실행 방법

### 1. 저장소 클론 및 패키지 설치
```bash
git clone https://github.com/howlab2026/CarrotPcbMaker.git
cd CarrotPcbMaker

# 백엔드 의존성 설치
cd server
npm install

# 프론트엔드 의존성 설치
cd ../client
npm install
```

### 2. 서버 실행
```bash
# 터미널 1: 백엔드 서버 구동 (포트 5000)
cd server
node index.js

# 터미널 2: 프론트엔드 개발 서버 구동 (포트 5173)
cd client
npm run dev
```

브라우저에서 **http://localhost:5173** 으로 접속하여 플랫폼을 이용하실 수 있습니다.

---

## 🌐 GitHub Pages 배포 안내

GitHub Pages에 배포할 때는 아래 한 줄 명령어로 자동 빌드 및 `gh-pages` 브랜치에 배포됩니다:

```bash
npm run deploy
```

### GitHub 저장소 Pages 설정 (최초 1회 확인)
1. GitHub 저장소 [Settings] -> [Pages] 메뉴로 이동합니다.
2. **Build and deployment** 항목의 **Source**를 **Deploy from a branch**로 선택합니다.
3. **Branch**를 `gh-pages` / `/ (root)` 로 지정하고 [Save]를 누릅니다.
4. 배포 완료 후 `https://howlab2026.github.io/CarrotPcbMaker/` 에서 즉시 확인 가능합니다.

---

## 👥 기본 데모 계정 (비밀번호: `123`)

| 계정명 (ID) | 닉네임 | 역할 | 주요 관심 분야 |
| :--- | :--- | :--- | :--- |
| `admin` | 당근마스터 | 운영진 👑 | 고속신호 PCB, KiCad |
| `circuit_pro` | 회로도장인 | 정회원 🌱 | SMPS, 아날로그 회로, 전원 |
| `artwork_fairy` | 아트웍요정 | 정회원 🌱 | 4층/6층 아트웍, RF 회로 |
| `rookie_maker` | 메이커꿈나무 | 정회원 🌱 | ESP32, IoT 스마트홈 센서 |

---

## 📄 라이선스
MIT License

