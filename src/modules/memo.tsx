// 액션 타입 선언
const MEMOINIT = 'memo/MEMOINIT' as const;
const MEMOCREATE = 'memo/MEMOCREATE' as const;
const MEMOREMOVE = 'memo/MEMOREMOVE' as const;
const MEMOEDIT = 'memo/MEMOEDIT' as const;
const MEMODETAIL = 'memo/MEMODETAIL' as const;

// 액션 생성 함수 선언
export const memoinit = () => {{type: MEMOINIT}};
export const memocreate = () => {{type: MEMOCREATE}};
export const memoremove = () => {{type: MEMOREMOVE}};
export const memoedit = () => {{type: MEMOEDIT}};
export const memodetail = () => {{type: MEMODETAIL}};

// 액션 객체들에 대한 타입 준비하기
type MemoActionTypes = 
  | ReturnType<typeof memoinit>
  | ReturnType<typeof memocreate>
  | ReturnType<typeof memoremove>
  | ReturnType<typeof memoedit>
  | ReturnType<typeof memodetail>

// 상태의 타입과 초기값 선언하기
type Memo = {
    id: number,
    title: string,
    date: string,
    description: string,
    color: number
}
export interface memoState {
    memos: Memo[]
}
const initialState: memoState = {
    memos: [
        {
            id: 1,
            title: "GO JEJU🌴",
            date: "JULY 12 ~ JULY 15",
            description: "제주 맛집 뿌시기 여행 :)",
            color: 1,
          },
          {
            id: 2,
            title: "JAPAN🍜",
            date: "MAY 25 ~ MAY 28",
            description: "셤끝나고 일본 여행",
            color: 2,
          },
          {
            id: 3,
            title: "NEWYORK🛫",
            date: "NOVEMBER 1 ~ NOVEMBER 28",
            description: "뉴욕 걸리버 여행기",
            color: 3,
          },
    ]
} 
const memoReducer = (
    state = initialState,
    action: MemoActionTypes
): memoState => {
    let newState = [];
    switch (action.type) {
        case MEMOINIT: 
            return {action.data}
            case "CREATE": {
                newState = [...state.memos, action.data];
                break;
              }
              case "REMOVE": {
                newState = state.memos.filter((it) => it.id !== action.targetId);
                break;
              }
              case "EDIT": {
                newState = state.memos.map((it) => {
                  return it.id === action.data.id ? { ...action.data } : it;
                });
                break;
              }
              case "DETAIL": {
                newState = state.memos.map((it) => it.id === action.targetId);
                break;
              }
              default:
                return state;    
    }
}

export default memoReducer;


