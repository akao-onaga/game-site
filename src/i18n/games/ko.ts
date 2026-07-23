import type { GameTranslation } from "../game";

export const koGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "리버스 타이핑",
    catch: "A는 Z, B는 Y. 뒤집힌 알파벳 세계에서 타이핑하세요.",
    genre: "타이핑",
    dialogue: [
      { speaker: "onaga", text: "보통 타이핑 게임과 뭐가 달라?" },
      {
        speaker: "akao",
        text: "모든 키가 알파벳 순서의 반대로 입력돼. A는 Z, B는 Y가 되는 식이야.",
      },
      { speaker: "onaga", text: "A를 눌렀는데 Z가 나온다고? 머리가 꼬이겠네." },
      {
        speaker: "akao",
        text: "그게 바로 도전이지. 제한 시간 안에 단어를 최대한 많이 입력하고 랭킹에 도전해 봐. 100개 게임 프로젝트의 첫 작품이기도 해.",
      },
    ],
    features: [
      "A는 Z, B는 Y로 판정되는 두뇌 훈련 타이핑",
      "온라인 랭킹 지원",
    ],
    controls: [
      { label: "시작", text: "타이틀 화면에서 이름을 입력하고 START 선택" },
      { label: "입력", text: "화면에 표시된 글자를 키보드로 입력" },
    ],
    notes: ["모든 알파벳은 A↔Z, B↔Y처럼 반대 순서로 판정됩니다."],
  },
  "giri-strike": {
    title: "아슬아슬 스트라이크",
    catch: "스트라이크 존의 가장자리를 노려라.",
    genre: "스포츠",
    dialogue: [
      { speaker: "onaga", text: "야구 게임이네! 어떻게 플레이해?" },
      {
        speaker: "akao",
        text: "스트라이크 존 끝에 공을 던지는 게임이야. 경계에 가까울수록 점수가 높아.",
      },
      { speaker: "onaga", text: "그럼 계속 같은 곳으로 던지면 되잖아?" },
      {
        speaker: "akao",
        text: "같은 위치나 구종을 반복하면 타자가 더 쉽게 쳐. 여섯 가지 구종을 섞어 쓰는 게 중요해.",
      },
    ],
    features: [
      "여섯 가지 구종 선택",
      "같은 위치나 구종을 반복할수록 피격 확률 증가",
      "시작 전에 제구 유형 선택",
    ],
    controls: [
      { label: "구종 선택", text: "화면 버튼 또는 숫자 키 1~6" },
      { label: "코스 결정", text: "스트라이크 존 주변을 마우스로 드래그" },
      { label: "투구", text: "게이지가 흰 영역에 왔을 때 PITCH, Space 또는 Enter" },
      { label: "타이틀로", text: "R" },
    ],
  },
  "osyaberi-oekaki": {
    title: "야유하는 AI 그림",
    catch: "AI의 야유를 견디며 그림을 맞히게 하세요.",
    genre: "그림",
    dialogue: [
      { speaker: "onaga", text: "AI랑 같이 그림을 그리는 거야?" },
      {
        speaker: "akao",
        text: "AI가 네 그림을 맞히면 클리어야. 다만 그리는 내내 AI가 계속 야유를 보내.",
      },
      { speaker: "onaga", text: "성격이 정말 나쁜 AI네." },
      {
        speaker: "akao",
        text: "멘탈 훈련이라고 생각해. 그림만 그리면 되고 화면 아래에서 색도 고를 수 있어.",
      },
    ],
    features: ["AI가 그림을 알아맞히면 클리어", "계속되는 AI의 야유 속에서 그림 완성"],
    controls: [
      { label: "그리기", text: "캔버스에 직접 드래그하고 화면 아래에서 색 선택" },
    ],
  },
  muon: {
    title: "MUON",
    catch: "배경음악 없이 효과음만 들리는 리듬 게임.",
    genre: "리듬",
    dialogue: [
      { speaker: "onaga", text: "리듬 게임인데 음악이 없다고?" },
      {
        speaker: "akao",
        text: "맞아, 효과음만 들려. 노트 사이 간격과 화면의 리듬만 보고 타이밍을 맞춰야 해.",
      },
      { speaker: "onaga", text: "정말 새롭네. 어렵지는 않아?" },
      {
        speaker: "akao",
        text: "난이도는 세 단계야. 점수와 최대 콤보는 로컬 랭킹에 저장돼.",
      },
    ],
    features: [
      "배경음악 없이 효과음만 사용하는 독특한 리듬 게임",
      "세 단계 난이도",
      "점수와 최대 콤보 로컬 랭킹",
    ],
  },
  "pittari-hitofudegaki": {
    title: "완벽한 한붓그리기!",
    catch: "한 번의 선으로 예시와 얼마나 비슷하게 그릴 수 있을까요?",
    genre: "그림",
    dialogue: [
      { speaker: "onaga", text: "그림 게임이네? 난 그림에 자신 있어." },
      {
        speaker: "akao",
        text: "문제를 고르고 한 번에 따라 그리면 돼. 별이나 물고기 같은 예시 선에 가까울수록 점수가 높아.",
      },
      { speaker: "onaga", text: "다 그리면 바로 점수가 나와?" },
      {
        speaker: "akao",
        text: "손가락이나 마우스를 놓는 순간 채점돼. 문제마다 별도의 온라인 랭킹도 있어.",
      },
    ],
    features: ["수십 초 안에 끝나는 간단한 스코어 어택", "문제별 온라인 랭킹"],
    controls: [
      { label: "한붓그리기", text: "마우스나 손가락으로 한 번에 드래그하고 놓으면 채점" },
    ],
  },
  "kenpin-15puzzle": {
    title: "검품! 15 퍼즐",
    catch: "풀지 말고, 풀 수 있는 퍼즐인지 판별하세요.",
    genre: "퍼즐",
    dialogue: [
      { speaker: "onaga", text: "15 퍼즐을 푸는 게임이야?" },
      {
        speaker: "akao",
        text: "풀 필요는 없어. 각 판이 풀 수 있는 상태인지 검사하는 타임어택이야.",
      },
      { speaker: "onaga", text: "보기만 해서는 모르겠으면?" },
      {
        speaker: "akao",
        text: "타일을 직접 움직여 확인해도 돼. 열 판을 연속으로 맞히면 클리어야.",
      },
      { speaker: "onaga", text: "EASY와 CRAZY 모드가 있네..." },
      {
        speaker: "akao",
        text: "EASY는 완성에서 몇 수만 떨어져 있고, CRAZY는 완전히 무작위라 나도 움직여 봐야 알 수 있어.",
      },
    ],
    features: [
      "퍼즐을 풀지 않고 해결 가능 여부를 판별",
      "완성에서 몇 수만 떨어진 EASY",
      "완전히 무작위인 CRAZY",
      "온라인 타임어택 랭킹",
    ],
    controls: [
      { label: "선택/이동", text: "마우스 또는 터치" },
      { label: "출하 OK", text: "풀 수 있다고 생각할 때 선택" },
      { label: "불량품", text: "풀 수 없다고 생각할 때 선택" },
    ],
    notes: ["열 판을 연속으로 맞히면 클리어되며 결과에 시간과 실수 횟수가 표시됩니다."],
  },
  "mitomano-1mm": {
    title: "미토마의 1mm",
    catch: "공이 골라인을 넘기 직전에 슬라이딩으로 살려내세요.",
    genre: "스포츠",
    dialogue: [
      { speaker: "onaga", text: "미토마의 1mm는 어떤 게임이야?" },
      {
        speaker: "akao",
        text: "패스를 쫓아가 공이 골라인을 넘기 직전에 슬라이딩으로 되돌리는 게임이야. 한 번의 플레이는 몇 초면 끝나.",
      },
      { speaker: "onaga", text: "라인에 가까울수록 점수가 높구나. 넘으면 어떻게 돼?" },
      {
        speaker: "akao",
        text: "당연히 OUT이야. 최대한 아슬아슬하게 멈춰 그 유명한 기적을 재현해 봐.",
      },
    ],
    features: [
      "VAR 판정 포함",
      "공을 멈춘 거리에 따른 온라인 랭킹",
      "라인까지 남은 거리가 짧을수록 높은 점수",
    ],
    controls: [
      { label: "대시", text: "Space 길게 누르기" },
      { label: "슬라이딩", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "계산 리버시",
    catch: "계산을 맞혀야 돌을 놓을 수 있는 실시간 리버시.",
    genre: "보드",
    dialogue: [
      { speaker: "onaga", text: "계산 리버시는 보통 리버시와 뭐가 달라?" },
      {
        speaker: "akao",
        text: "놓을 수 있는 칸을 고르고 계산 문제를 맞히면 돌을 놓을 수 있어. 대국은 실시간으로 진행돼.",
      },
      { speaker: "onaga", text: "상대가 내가 계산할 때까지 기다려 줘?" },
      {
        speaker: "akao",
        text: "CPU는 기다리지 않아. 빨리 풀수록 CPU의 다음 수 전에 여러 개를 놓을 수 있지.",
      },
      { speaker: "onaga", text: "계산 중에 고른 칸을 빼앗기면?" },
      {
        speaker: "akao",
        text: "상대가 둔 뒤에도 그 칸이 합법이면 계속 풀 수 있어. CPU와 계산 난이도는 각각 세 단계고, 모바일에서는 2인 대전도 가능해.",
      },
    ],
    features: [
      "정답을 맞힐 때마다 돌을 놓는 실시간 리버시",
      "빠르게 계산하면 CPU가 움직이기 전에 연속 배치 가능",
      "CPU와 계산 난이도 각각 세 단계",
      "모바일 전용 2인 대전 화면",
    ],
    controls: [
      { label: "마우스/터치", text: "합법 칸 선택, 화면 숫자판 입력, 확인 및 삭제" },
      { label: "키보드", text: "숫자 키 입력, Backspace 삭제, Enter 확인" },
      { label: "1인", text: "칸을 선택하고 표시된 계산을 맞히면 배치" },
      { label: "2인", text: "두 플레이어가 좌우 보드와 숫자판으로 동시에 풀이" },
    ],
    notes: ["64칸이 모두 차거나 양쪽 모두 둘 수 없으면 돌이 많은 쪽이 승리합니다."],
  },
  "nitro-tray-delivery": {
    title: "니트로 쟁반 배달",
    catch: "흔들지 말고 서두르세요. 위험한 화물을 나르는 3D 타임어택.",
    genre: "액션",
    dialogue: [
      { speaker: "onaga", text: "대체 뭘 배달하는 거야?" },
      {
        speaker: "akao",
        text: "니트로글리세린이 든 쟁반을 들고 위험한 공장을 지나 골인하는 3D 타임어택이야.",
      },
      { speaker: "onaga", text: "이름부터 불안한데. 뛰면 어떻게 돼?" },
      {
        speaker: "akao",
        text: "급가속, 충돌, 바람, 회전 막대가 흔들림 게이지를 올리고 가득 차면 병이 넘어져 폭발해.",
      },
      { speaker: "onaga", text: "서둘러야 하지만 흔들면 안 되는구나." },
      {
        speaker: "akao",
        text: "조심 걷기로 쟁반을 안정시키고 장애물 타이밍과 경로를 골라. 초록 게이트를 지나면 5초가 줄어들어.",
      },
    ],
    features: [
      "니트로글리세린 쟁반을 운반하는 3D 타임어택",
      "속도를 낮추고 흔들림을 줄이는 조심 걷기",
      "송풍기, 회전 막대, 이동 카트, 미끄러운 바닥 등 다양한 장애물",
      "5초 단축 게이트와 온라인 타임 랭킹",
    ],
    controls: [
      { label: "이동", text: "WASD 또는 방향 키" },
      { label: "조심 걷기", text: "이동 중 Space 또는 Shift 길게 누르기" },
      { label: "처음부터 재시작", text: "R" },
      { label: "타이틀로", text: "Esc" },
    ],
    notes: ["흔들림 게이지가 가득 차면 폭발합니다. 초록 게이트는 처음 통과할 때 5초를 줄입니다."],
  },
  "pittari-tetromino": {
    title: "딱 맞는 테트로미노",
    catch: "열 문제 타임어택에서 목표와 똑같은 모양을 만드세요.",
    genre: "퍼즐",
    dialogue: [
      { speaker: "onaga", text: "보통 낙하 블록 퍼즐이야?" },
      {
        speaker: "akao",
        text: "테트로미노를 떨어뜨려 제시된 모양을 정확히 만드는 열 문제 타임어택이야.",
      },
      { speaker: "onaga", text: "블록을 지우기만 하는 게 아니네. 뒤쪽 문제는?" },
      {
        speaker: "akao",
        text: "후반에는 필요한 줄을 먼저 지우면서 완성 모양을 만들어야 해. 조립 순서가 중요하지.",
      },
      { speaker: "onaga", text: "어려워 보이는데 연습할 수 있어?" },
      {
        speaker: "akao",
        text: "EASY와 HARD 두 모드가 있어. R로 현재 문제를 다시 시작하고 모드별 온라인 랭킹에 기록할 수 있어.",
      },
    ],
    features: [
      "목표 모양을 정확히 만드는 열 문제 타임어택",
      "후반에는 줄 삭제를 계획해 최종 모양 완성",
      "EASY와 HARD 모드",
      "모드별 온라인 타임 랭킹",
    ],
    controls: [
      { label: "이동", text: "좌우 방향 키 또는 A" },
      { label: "소프트 드롭", text: "아래 방향 키 또는 S" },
      { label: "회전", text: "Z, X 또는 위 방향 키" },
      { label: "하드 드롭", text: "Space" },
      { label: "홀드", text: "C" },
      { label: "현재 문제 재시작", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "자극 노트를 치고 120초 리듬 게임에서 DOPA TIME에 진입하세요.",
    genre: "리듬",
    dialogue: [
      { speaker: "onaga", text: "DOPARHYTHM은 어떤 리듬 게임이야?" },
      {
        speaker: "akao",
        text: "A, S, D, F로 색깔 자극 노트를 치며 120초를 버티는 게임이야.",
      },
      { speaker: "onaga", text: "검은 X가 그려진 노트도 쳐야 해?" },
      {
        speaker: "akao",
        text: "일반 모드에서는 피해야 해. DOPA 모드에서는 J, K, L, ;로 레인마다 다운 노트를 물리쳐.",
      },
      { speaker: "onaga", text: "DOPA TIME에는 무슨 일이 생겨?" },
      {
        speaker: "akao",
        text: "FEVER 게이지를 채우면 모든 레인에 긴 노트가 나와. 사용하는 키를 전부 연타해 큰 점수를 노려. DOPA가 0이면 게임 오버야.",
      },
    ],
    features: [
      "120초 동안 최고 점수 도전",
      "일반 모드 4키, DOPA 모드 8키",
      "FEVER 게이지를 채워 전 레인을 연타하는 DOPA TIME 진입",
      "EASY와 HARD 온라인 랭킹",
    ],
    controls: [
      { label: "일반 모드 색깔 노트", text: "왼쪽부터 A, S, D, F" },
      { label: "일반 모드 다운 노트", text: "키를 누르지 않고 피하기" },
      { label: "DOPA 모드 색깔 노트", text: "왼쪽부터 A, S, D, F" },
      { label: "DOPA 모드 다운 노트", text: "왼쪽부터 J, K, L, ;로 거절" },
    ],
    notes: ["성공하면 콤보와 FEVER가 오르고 색깔 노트는 DOPA도 회복합니다. MISS, 헛누름, 오입력은 DOPA를 줄입니다."],
  },
  "nazotoki-10s": {
    title: "10s 퍼즐",
    catch: "10을 열 개 만들어 클리어하는 수학 퍼즐 모험.",
    genre: "퍼즐",
    dialogue: [
      { speaker: "onaga", text: "제목의 10s는 무슨 뜻이야?" },
      {
        speaker: "akao",
        text: "10을 열 개 만들면 클리어야. 제한된 숫자와 사칙연산으로 각각의 10을 만들어.",
      },
      { speaker: "onaga", text: "숫자만 조합하면 쉬울 것 같은데..." },
      {
        speaker: "akao",
        text: "그대로는 10을 만들 수 없는 문제도 있어. 화면에 숨은 연산 기호를 찾아 사용해야 해.",
      },
      { speaker: "onaga", text: "목표 시간도 있어?" },
      {
        speaker: "akao",
        text: "목표는 20분이야. 시간 안에 모든 퍼즐을 풀 수 있을까?",
      },
    ],
    features: [
      "수수께끼와 계산을 결합한 독특한 규칙",
      "간단한 터치 조작",
      "힌트와 전체 해설 제공",
      "목표 클리어 시간 20분",
    ],
  },
  "time-reversi": {
    title: "타임 리버시",
    catch: "3초마다 움직일 수 있는 실시간 리버시.",
    genre: "보드",
    dialogue: [
      { speaker: "onaga", text: "리버시는 서로 번갈아 두는 게임 아니야?" },
      {
        speaker: "akao",
        text: "여기에는 턴이 없어. 3초 쿨다운이 끝나면 언제든 둘 수 있어.",
      },
      { speaker: "onaga", text: "그럼 무조건 빨리 두는 게 좋아?" },
      {
        speaker: "akao",
        text: "그게 고민이야. 바로 둘지 상대를 기다릴지, 보드 읽기에 타이밍 싸움이 더해져.",
      },
      { speaker: "onaga", text: "혼자서도 할 수 있어?" },
      {
        speaker: "akao",
        text: "CPU와 연습하고 방 ID로 친구와 대전할 수 있어. 서바이벌에서는 점점 강해지는 CPU에 연승 도전도 가능해.",
      },
    ],
    features: [
      "수마다 3초 쿨다운이 있는 실시간 리버시",
      "CPU 연습과 방 ID 친구 대전",
      "승리할수록 강해지는 CPU를 상대하는 서바이벌",
      "쿨다운을 무시하는 프리 스톤 등의 스킬",
      "대국을 다시 보는 리플레이",
    ],
    notes: ["짧게 즐길 수 있는 새로운 리버시입니다. 무료 다운로드, 앱 내 구매 포함, 여러 언어 지원."],
  },
};
