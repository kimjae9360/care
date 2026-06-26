export type RiskLevel = "urgent" | "attention" | "stable"

export type DeviceState = "ok" | "warning" | "offline"

export interface Patient {
  id: string
  name: string
  age: number
  gender: string
  address: string
  riskLevel: RiskLevel
  riskScore: number
  alertSummary: string
  medications: { label: string; isNew?: boolean }[]
  devices: {
    pillbox: { state: DeviceState; label: string }
    wearable: { state: DeviceState; label: string }
  }
  sleep: number[] // last 7 days in hours
  medication: { label: string; time: string; done: boolean }[]
  voiceLog: string
  diagnosis: {
    symptom: string
    conclusion: string
    confidence: number
  }
  careGuide: string[]
  clinicalReport: string
}

export const patients: Patient[] = [
  {
    id: "kim-soonja",
    name: "김순자 어르신",
    age: 82,
    gender: "여성",
    address: "서울시 노원구 상계동 한빛아파트 101동 504호",
    riskLevel: "urgent",
    riskScore: 88,
    alertSummary:
      "관절염 약 변경 후 어지러움 호소 및 3일 연속 수면 부족 (다제약물 부작용 의심)",
    medications: [
      { label: "아스피린" },
      { label: "고혈압약" },
      { label: "신규 관절염약", isNew: true },
    ],
    devices: {
      pillbox: { state: "ok", label: "정상" },
      wearable: { state: "warning", label: "수면저하" },
    },
    sleep: [7.2, 6.8, 7.0, 6.5, 4.2, 3.8, 3.5],
    medication: [
      { label: "아침 복약", time: "08:00", done: true },
      { label: "점심 복약", time: "12:30", done: true },
      { label: "저녁 복약", time: "18:30", done: false },
    ],
    voiceLog:
      "오늘 아침 방문해서 약 챙겨드렸는데, 최근에 관절염 때문에 약 바꾸시고 나서 자꾸 주저앉으려고 하시고 어지럽다고 하심. 식사도 평소의 절반도 안 하셨음.",
    diagnosis: {
      symptom: "기립성 어지러움 및 식욕 부진",
      conclusion: "기존 고혈압약과 신규 소염진통제 간 다제약물 상호작용 부작용 의심",
      confidence: 88,
    },
    careGuide: [
      "내일 오전 방문 시 침대에서 일어설 때 반드시 부축 수행",
      "식후 속쓰림 여부 정밀 관찰 및 기록",
      "어지러움 발생 시간대와 빈도 별도 메모",
      "수분 섭취 권장 및 식사량 재확인",
    ],
    clinicalReport:
      "김순자 어르신(82세, 여성)은 신규 관절염 소염진통제 복용 시작 이후 기립성 어지러움과 식욕 부진을 보이고 있습니다. 최근 3일간 수면 시간이 평균 3.8시간으로 급격히 감소했으며, 기존 복용 중인 고혈압약과의 다제약물 상호작용에 따른 혈압 강하 가능성이 높습니다(AI 분석 신뢰도 88%). 낙상 위험이 우려되므로 담당의 재진 및 처방 재검토를 권고드립니다.",
  },
  {
    id: "lee-youngsoo",
    name: "이영수 어르신",
    age: 75,
    gender: "남성",
    address: "서울시 노원구 중계동 그린빌 203동 1102호",
    riskLevel: "attention",
    riskScore: 64,
    alertSummary: "오전 혈압약 복용 시간 3시간 지연 및 활동량 감소 감지",
    medications: [{ label: "고혈압약" }, { label: "당뇨약" }],
    devices: {
      pillbox: { state: "warning", label: "미개폐" },
      wearable: { state: "ok", label: "정상" },
    },
    sleep: [6.5, 6.8, 7.1, 6.9, 6.2, 6.4, 6.0],
    medication: [
      { label: "아침 복약", time: "08:00", done: false },
      { label: "저녁 복약", time: "19:00", done: false },
    ],
    voiceLog:
      "오늘 통화로 안부 여쭤봤는데 아침 약을 깜빡하셨다고 하심. 요즘 바깥 산책도 잘 안 나가신다고 함.",
    diagnosis: {
      symptom: "복약 시간 지연 및 활동량 감소",
      conclusion: "복약 순응도 저하 및 우울감 동반 가능성",
      confidence: 71,
    },
    careGuide: [
      "복약 알림 시간 재설정 및 보호자 알림 연동",
      "주 3회 이상 외출 및 가벼운 산책 독려",
      "다음 방문 시 우울감 선별 문진 진행",
    ],
    clinicalReport:
      "이영수 어르신(75세, 남성)은 오전 혈압약 복용이 평소 대비 3시간 지연되었으며 웨어러블 측정 활동량이 지난주 대비 약 30% 감소했습니다. 복약 순응도 저하와 함께 활동성 감소가 동반되어 경과 관찰이 필요합니다(AI 분석 신뢰도 71%).",
  },
  {
    id: "park-malsoon",
    name: "박말순 어르신",
    age: 79,
    gender: "여성",
    address: "서울시 노원구 공릉동 햇살빌라 302호",
    riskLevel: "stable",
    riskScore: 22,
    alertSummary: "전일 대비 특이사항 없음, 복약 및 수면 패턴 양호",
    medications: [{ label: "골다공증약" }],
    devices: {
      pillbox: { state: "ok", label: "정상" },
      wearable: { state: "ok", label: "정상" },
    },
    sleep: [7.4, 7.1, 7.6, 7.2, 7.5, 7.3, 7.4],
    medication: [{ label: "아침 복약", time: "09:00", done: true }],
    voiceLog: "오늘 컨디션 좋으시고 식사도 잘 하셨다고 함. 특이사항 없음.",
    diagnosis: {
      symptom: "특이사항 없음",
      conclusion: "안정 상태 유지 중",
      confidence: 96,
    },
    careGuide: ["기존 케어 플랜 유지", "정기 안부 확인 지속"],
    clinicalReport:
      "박말순 어르신(79세, 여성)은 복약 순응도, 수면 패턴, 활동량 모두 정상 범위를 유지하고 있어 현재 케어 플랜을 그대로 유지할 것을 권고합니다.",
  },
]

export const summary = {
  total: 30,
  urgent: 3,
  attention: 5,
  stable: 22,
}

export interface AppNotification {
  id: string
  level: RiskLevel
  title: string
  time: string
  patientId: string
}

export const notifications: AppNotification[] = [
  {
    id: "n1",
    level: "urgent",
    title: "김순자 어르신 수면 3일 연속 급감 — 즉시 확인 필요",
    time: "방금 전",
    patientId: "kim-soonja",
  },
  {
    id: "n2",
    level: "attention",
    title: "이영수 어르신 오전 혈압약 미복용 (3시간 지연)",
    time: "32분 전",
    patientId: "lee-youngsoo",
  },
  {
    id: "n3",
    level: "stable",
    title: "박말순 어르신 오늘 복약·수면 모두 정상",
    time: "1시간 전",
    patientId: "park-malsoon",
  },
]

export const riskMeta: Record<
  RiskLevel,
  { label: string; badgeClass: string; dotClass: string }
> = {
  urgent: {
    label: "긴급",
    badgeClass: "bg-destructive/10 text-destructive ring-1 ring-destructive/20",
    dotClass: "bg-destructive",
  },
  attention: {
    label: "주의",
    badgeClass: "bg-warning/15 text-warning-foreground ring-1 ring-warning/30",
    dotClass: "bg-warning",
  },
  stable: {
    label: "안정",
    badgeClass: "bg-success/10 text-success-foreground ring-1 ring-success/20",
    dotClass: "bg-success",
  },
}
