export const BADGES_METADATA = {
  sprout_maker: { id: 'sprout_maker', name: '새싹 납땜러 🌱', desc: '당근 PCB 모임에 첫 발을 내딛은 메이커', color: '#10B981' },
  first_pcb: { id: 'first_pcb', name: '첫 기판 발주 🏆', desc: '직접 설계한 PCB 발주를 성공적으로 완료', color: '#3B82F6' },
  iron_master: { id: 'iron_master', name: '인두기 장인 🔥', desc: '오프라인 정기 밋업 및 납땜 워크숍 3회 이상 참석', color: '#EA580C' },
  layer4_master: { id: 'layer4_master', name: '4층 기판 정복자 🧩', desc: '고난도 4층 이상 다층 PCB 아트웍 제작 완료', color: '#8B5CF6' },
  group_buy_lead: { id: 'group_buy_lead', name: '공구 총대장 📦', desc: '모임원들을 위한 부품/기판 공동구매 주최', color: '#F59E0B' },
  sos_detective: { id: 'sos_detective', name: '회로 SOS 명탐정 💡', desc: '회원들의 난해한 하드웨어 버그를 해결 채택받음', color: '#EC4899' }
};

export const INITIAL_MOCK_DATA = {
  users: [
    {
      id: 'usr_admin',
      username: 'admin',
      password: '123',
      name: '당근마스터 (운영진)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'admin',
      bio: '당근 PCB 메이커스 모임지기 | 10년차 하드웨어 엔지니어 (KiCad, Altium)',
      tags: ['운영자', '고속신호PCB', 'KiCad'],
      solderingTemp: 48.5,
      badges: ['first_pcb', 'iron_master', 'layer4_master', 'group_buy_lead', 'sos_detective'],
      createdAt: '2026-08-01T10:00:00.000Z'
    },
    {
      id: 'usr_circuit',
      username: 'circuit_pro',
      password: '123',
      name: '회로도장인',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      role: 'member',
      bio: 'SMPS 전원 회로 & 오디오 DAC 자작 매니아',
      tags: ['정회원', '전원회로', '아날로그'],
      solderingTemp: 41.2,
      badges: ['first_pcb', 'iron_master', 'sos_detective'],
      createdAt: '2026-08-05T14:30:00.000Z'
    },
    {
      id: 'usr_artwork',
      username: 'artwork_fairy',
      password: '123',
      name: '아트웍요정',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      role: 'member',
      bio: '예쁜 4층/6층 아트웍과 BGA 패키지 팬아웃을 좋아합니다 ✨',
      tags: ['정회원', '아트웍', 'RF회로'],
      solderingTemp: 39.4,
      badges: ['first_pcb', 'layer4_master', 'group_buy_lead'],
      createdAt: '2026-08-10T09:15:00.000Z'
    },
    {
      id: 'usr_rookie',
      username: 'rookie_maker',
      password: '123',
      name: '메이커꿈나무',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      role: 'member',
      bio: 'ESP32 기반 스마트홈 IoT 기기를 직접 PCB 떠서 만들어보고 싶은 초보입니다!',
      tags: ['새싹회원', 'ESP32', '초보'],
      solderingTemp: 37.2,
      badges: ['sprout_maker', 'first_pcb'],
      createdAt: '2026-09-01T18:20:00.000Z'
    }
  ],

  projects: [
    {
      id: 'prj_1',
      userId: 'usr_artwork',
      userName: '아트웍요정',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      title: '🥕 당근 모양 미니 매크로 키패드 (RP2040 기반 4키)',
      description: '당근 잎사귀 모양의 RGB LED와 핫스왑 기계식 스위치가 탑재된 귀여운 당근 키패드 4층 PCB 설계입니다.',
      specs: '• MCU: RP2040\n• Layer: 4 Layers (SIG-GND-PWR-SIG)\n• Dimensions: 52mm x 98mm\n• Interface: USB Type-C\n• Firmware: QMK / KMK 지원',
      status: '조립완료',
      isPublic: true,
      tags: ['RP2040', '키보드', '4층기판', 'RGB'],
      images: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      ],
      likes: 15,
      likedUsers: ['usr_admin', 'usr_circuit', 'usr_rookie'],
      comments: [
        {
          id: 'cmt_p1_1',
          userId: 'usr_admin',
          userName: '당근마스터 (운영진)',
          userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
          text: '외곽선 커팅이 아주 매끄럽네요! 다음 오프라인 모임 때 실물 가져와서 보여주세요~',
          createdAt: '2026-09-15T11:20:00.000Z'
        }
      ],
      createdAt: '2026-09-14T10:00:00.000Z'
    },
    {
      id: 'prj_2',
      userId: 'usr_circuit',
      userName: '회로도장인',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      title: '초저노이즈 하이파이 헤드폰 앰프 (OPA1612 + TPA6120A2)',
      description: '왜곡율(THD+N) < 0.0001% 목표로 GND 면 분리와 스타 그라운드를 적용한 고성능 아날로그 헤드폰 앰프 보드입니다.',
      specs: '• OPAMP: Dual OPA1612\n• Buffer: TPA6120A2\n• Power: ±12V 초저노이즈 LDO\n• Layer: 2 Layer',
      status: '샘플발주',
      isPublic: true,
      tags: ['오디오', '아날로그', '저노이즈', '헤드폰앰프'],
      images: [
        'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
      ],
      likes: 11,
      likedUsers: ['usr_admin', 'usr_artwork'],
      comments: [],
      createdAt: '2026-09-18T16:40:00.000Z'
    },
    {
      id: 'prj_3',
      userId: 'usr_rookie',
      userName: '메이커꿈나무',
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      title: '베란다 식물 모니터링 센서 보드 (ESP32-C3)',
      description: '토양 수분, 온습도(SHT40), 조도(BH1750) 센서를 한 기판에 집적하고 리튬 폴리머 충전 IC를 내장한 첫 번째 개인 프로젝트입니다.',
      specs: '• MCU: ESP32-C3-WROOM-02\n• Sensors: SHT40, BH1750, Capacitive Soil Probe\n• Battery: TP4056 + 배터리 보호회로',
      status: '구상/스케치',
      isPublic: true,
      tags: ['ESP32', 'IoT', '스마트홈', '식물'],
      images: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      ],
      likes: 7,
      likedUsers: ['usr_admin'],
      comments: [],
      createdAt: '2026-09-20T09:15:00.000Z'
    }
  ],

  // 1번 기능: 부품 나눔 & 해외 기판 묶음 공구
  marketItems: [
    {
      id: 'mkt_1',
      title: '🥕 [무료나눔] RP2040 미니 키보드 기판 3장 나눔합니다',
      type: 'share', // 'share' | 'group_buy'
      category: 'pcb',
      authorId: 'usr_artwork',
      authorName: '아트웍요정',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      price: 0,
      targetCount: 3,
      currentCount: 2,
      deadline: '2026-09-30',
      status: 'recruiting', // 'recruiting' | 'completed'
      location: '역삼동 직거래 또는 반값택배',
      description: 'JLCPCB에서 최소 수량 5장 발주 후 2장만 사용하고 3장이 남았습니다. 외곽선 커팅 완벽하고 상태 좋습니다. 키보드 자작해보실 분 편하게 신청해주세요!',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      participants: ['usr_rookie', 'usr_circuit'],
      createdAt: '2026-09-21T10:00:00.000Z'
    },
    {
      id: 'mkt_2',
      title: '📦 [공구] LCSC 0603 F급 1% 칩저항 10종 릴(Reel) 묶음 소분 공구',
      type: 'group_buy',
      category: 'component',
      authorId: 'usr_admin',
      authorName: '당근마스터 (운영진)',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      price: 2500, // 1인당 2500원
      targetCount: 10,
      currentCount: 8,
      deadline: '2026-09-28',
      status: 'recruiting',
      location: '정기 밋업 당일 수령 또는 우편',
      description: '자주 쓰는 규격(100Ω, 1k, 4.7k, 10k, 100k 등 10종) 5,000개 릴을 통째로 구매해서 1인당 100개씩 지퍼백 소분합니다. 해외 배송비 무료 혜택!',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      participants: ['usr_circuit', 'usr_artwork', 'usr_rookie'],
      createdAt: '2026-09-19T14:30:00.000Z'
    },
    {
      id: 'mkt_3',
      title: '✈️ [공구] JLCPCB 4층 임피던스 기판 배송비 절약 묶음 발주',
      type: 'group_buy',
      category: 'pcb',
      authorId: 'usr_circuit',
      authorName: '회로도장인',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      price: 8500,
      targetCount: 5,
      currentCount: 5,
      deadline: '2026-09-23',
      status: 'completed',
      location: '역삼동 랩실 수령',
      description: 'DHL 익스프레스 배송비($24)를 5명이 분담하여 인당 8,500원에 고속 배송으로 수령하는 묶음 발주입니다.',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
      participants: ['usr_admin', 'usr_artwork'],
      createdAt: '2026-09-15T18:00:00.000Z'
    }
  ],

  // 6번 기능: 동네 공유 장비 & 공방
  sharedEquipment: [
    {
      id: 'eq_1',
      title: 'Rigol DS1054Z 4채널 디지털 오실로스코프 (100MHz)',
      category: 'scope',
      ownerId: 'usr_admin',
      ownerName: '당근마스터 (운영진)',
      ownerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      location: '역삼동 당근 하드웨어 랩',
      condition: '정기 밋업 시 지참 가능 / 랩실 예약 방문 사용',
      specs: '• 4채널 100MHz 대역폭\n• 1GSa/s 샘플링\n• SPI, I2C, UART 시리얼 버스 디코딩 지원\n• 패시브 프로브 4개 구비',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      status: 'available'
    },
    {
      id: 'eq_2',
      title: 'Quick 861DW 고출력 1000W SMD 열풍기 리워크 스테이션',
      category: 'soldering',
      ownerId: 'usr_circuit',
      ownerName: '회로도장인',
      ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      location: '판교 테크노밸리 인근 작업실',
      condition: '작업실 방문 사용 (사전 1:1 DM 필수)',
      specs: '• 1000W 급속 가열\n• 디지털 풍량/온도 3채널 메모리\n• QFN, BGA 패키지 디솔더링 및 리워크 전용',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      status: 'available'
    },
    {
      id: 'eq_3',
      title: 'Bambu Lab P1S 고속 3D 프린터 (PCB 기구 케이스 출력용)',
      category: '3dprinter',
      ownerId: 'usr_artwork',
      ownerName: '아트웍요정',
      ownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      location: '서초동 메이커 아지트',
      condition: 'STL 3D 모델 전달 시 밋업 당일 케이스 출력 나눔',
      specs: '• 256x256x256mm 출력 볼륨\n• PLA, PETG, ABS 기구물 출력\n• 0.4mm 경화강 노즐 장착',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
      status: 'available'
    },
    {
      id: 'eq_4',
      title: '광학 실체 현미경 (7X~45X 줌 & HDMI 1080p 모니터 출력)',
      category: 'microscope',
      ownerId: 'usr_admin',
      ownerName: '당근마스터 (운영진)',
      ownerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      location: '역삼동 당근 하드웨어 랩',
      condition: '0402/0201 미세 칩 납땜 시 랩실 방문 사용',
      specs: '• 7X-45X 연속 가변 배율\n• LED 링 라이트\n• FHD 실시간 외부 모니터 관찰 지원',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      status: 'available'
    }
  ],

  // 게시판 (회로 SOS 4번 기능 포함)
  posts: [
    {
      id: 'post_sos_1',
      boardType: 'sos',
      authorId: 'usr_rookie',
      authorName: '메이커꿈나무',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      title: '🚨 [SOS] ESP32 보드에 5V 인가 시 LDO에서 연기가 납니다! 도와주세요',
      content: '첫 PCB를 발주하고 부품을 실장했는데 전원을 꽂자마자 LDO(AMS1117)가 뜨거워지며 연기가 납니다 ㅠㅠ 회로도와 보드 사진 첨부합니다. 어떤 부분이 쇼트난 걸까요?',
      images: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      ],
      pinMarkers: [
        { id: 'pin_1', x: 44, y: 38, label: 'LDO 발열 및 탄 흔적 지점' },
        { id: 'pin_2', x: 62, y: 52, label: 'GND-VCC 의심 비아' }
      ],
      isResolved: true,
      acceptedCommentId: 'cmt_sos_101',
      isPinned: true,
      views: 148,
      likes: 9,
      likedUsers: ['usr_admin', 'usr_circuit'],
      comments: [
        {
          id: 'cmt_sos_101',
          userId: 'usr_circuit',
          userName: '회로도장인',
          userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
          text: '사진의 Pin 1 바로 옆 역전류 방지 다이오드(D1)를 확인해보세요! 캐소드(줄무늬 마킹)가 반대로 뒤집혀 납땜되어 있어서 5V 전원과 접지가 직결 쇼트되고 있습니다. 인두기로 떼어내어 180도 돌려 실장하시면 정상 동작할 겁니다!',
          isAccepted: true,
          createdAt: '2026-09-20T11:30:00.000Z'
        },
        {
          id: 'cmt_sos_102',
          userId: 'usr_rookie',
          userName: '메이커꿈나무',
          userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
          text: '와!! 장인님 말씀대로 다이오드를 돌려 붙이니까 3.3V 깨끗하게 나오고 ESP32 LED 켜졌습니다 ㅠㅠ 정말 감사합니다 채택 완료했습니다!!',
          createdAt: '2026-09-20T12:05:00.000Z'
        }
      ],
      createdAt: '2026-09-20T10:15:00.000Z'
    },
    {
      id: 'post_1',
      boardType: 'notice',
      authorId: 'usr_admin',
      authorName: '당근마스터 (운영진)',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      title: '📢 [필독] 9월 정기 오프라인 PCB 납땜 워크숍 안내 & 해외 묶음 발주 건',
      content: '안녕하세요, 당근 PCB 메이커스 회원 여러분! 이번 주말 정기 모임에서는 초보자 분들을 위한 0805/0603 SMD 납땜 기초 실습과 각자 작업 중인 회로 품평회를 진행합니다.',
      images: [
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
      ],
      isPinned: true,
      views: 240,
      likes: 18,
      likedUsers: ['usr_circuit', 'usr_artwork', 'usr_rookie'],
      comments: [],
      createdAt: '2026-09-18T09:00:00.000Z'
    },
    {
      id: 'post_2',
      boardType: 'info',
      authorId: 'usr_circuit',
      authorName: '회로도장인',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      title: '💡 초보자가 가장 많이 실수하는 노이즈 방지 디커플링 커패시터 배치 팁',
      content: 'MCU 전원 핀 바로 옆 1~2mm 이내에 0.1uF MLCC를 반드시 배치해야 하는 이유와 비아 인 패드(Via-in-pad) 기법을 정리해 공유합니다.',
      images: [],
      isPinned: false,
      views: 185,
      likes: 14,
      likedUsers: ['usr_admin', 'usr_rookie'],
      comments: [],
      createdAt: '2026-09-19T14:20:00.000Z'
    }
  ],

  events: [
    {
      id: 'evt_1',
      title: '🥕 [정기밋업] 9월 강남/역삼 오프라인 SMD 납땜 & 기판 품평회',
      type: '정기밋업',
      date: '2026-09-26',
      time: '14:00 ~ 18:00',
      location: '역삼동 당근 하드웨어 랩 (역삼역 3번 출구 도보 5분)',
      description: '각자 설계한 기판 실물을 가져와서 현미경으로 함께 검토하고, QFN/0603 납땜을 실습하는 정기 모임입니다.',
      maxAttendees: 15,
      attendees: ['usr_admin', 'usr_circuit', 'usr_artwork', 'usr_rookie'],
      status: '모집중'
    },
    {
      id: 'evt_2',
      title: '📦 [공구/발주] JLCPCB 4층 기판 & SMT 묶음 발주 마감 데이',
      type: '공동발주',
      date: '2026-09-28',
      time: '23:59 마감',
      location: '온라인 (디스코드 & 당근 채팅방)',
      description: '배송비 절약을 위한 해외 묶음 발주 취합일입니다.',
      maxAttendees: 30,
      attendees: ['usr_admin', 'usr_circuit'],
      status: '모집중'
    }
  ],

  chatChannels: [
    {
      id: 'ch_general',
      name: '🥕 자유수다방',
      description: 'PCB 잡담, 작업실 일상, 장비 지름 신고 등 편안한 대화 공간',
      messages: [
        {
          id: 'msg_1',
          senderId: 'usr_admin',
          senderName: '당근마스터 (운영진)',
          senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
          text: '당근 PCB 메이커스에 오신 여러분을 환영합니다! 자유롭게 인사 나눠주세요 🥕',
          createdAt: '2026-09-22T06:00:00.000Z'
        },
        {
          id: 'msg_2',
          senderId: 'usr_artwork',
          senderName: '아트웍요정',
          senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
          text: '다들 주말에 작업 많이 하셨나요? 전 4층 키보드 기판 오늘 조립 완료했습니다 ㅎㅎ',
          createdAt: '2026-09-22T07:15:00.000Z'
        },
        {
          id: 'msg_3',
          senderId: 'usr_rookie',
          senderName: '메이커꿈나무',
          senderAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
          text: '우와! 갤러리에 올라온 당근 키패드 맞죠? 실물 너무 기대됩니다',
          createdAt: '2026-09-22T07:20:00.000Z'
        }
      ]
    },
    {
      id: 'ch_qna',
      name: '⚡ 회로 & 아트웍 Q&A',
      description: 'KiCad, Altium 실계, DRC/ERC, 부품 풋프린트 질문방',
      messages: []
    },
    {
      id: 'ch_groupbuy',
      name: '📦 부품 공구 & 발주 나눔',
      description: 'JLCPCB/PCBWay 해외배송비 절약 묶음 발주 및 릴 단위 소자 나눔',
      messages: []
    },
    {
      id: 'ch_offline',
      name: '☕ 오프라인 번개 모임',
      description: '동네 카페나 랩실에서 함께 설계하고 모각코(모여서 각자 코딩/아트웍)해요',
      messages: []
    }
  ],

  directMessages: []
};
