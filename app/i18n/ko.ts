import { Translations } from "./en"

const ko: Translations = {
  common: {
    ok: "확인!",
    cancel: "취소",
    back: "뒤로",
  },
  errorScreen: {
    title: "뭔가 잘못되었습니다!",
    friendlySubtitle: "앱에서 예상하지 못한 오류가 났습니다. 초기화한 뒤 계속할 수 있습니다.",
    reset: "초기화",
  },
  emptyStateComponent: {
    generic: {
      heading: "너무 텅 비어서.. 너무 슬퍼요..",
      content: "데이터가 없습니다. 버튼을 눌러서 리프레쉬 하시거나 앱을 리로드하세요.",
      button: "다시 시도해봅시다",
    },
  },
  loginScreen: {
    hint: "전화번호와 비밀번호를 확인한 뒤 다시 시도하세요.",
  },
}

export default ko
