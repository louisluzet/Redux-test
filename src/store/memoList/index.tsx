import { createAction, createReducer } from "@reduxjs/toolkit";

export type Memo = {
    id: number;
    title: string;
    date: string;
    description: string;
    color: number;
}
export type MemoListState = Memo[] | [];

interface IMemoListState {
    memoList: MemoListState
}

// interface IAction {
//     type?: string;
// }

export type IRemoveMemoPayload = {
    id: number;
}

export type IRemoveMemoAction = {
    payload: IRemoveMemoPayload;
}

export const action = {
    removeMemo: createAction<IRemoveMemoPayload>("memo/memoRemove"),
};

const initialState: IMemoListState = {
    memoList: [
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
    ],
};

export const reducer = {
    removeMemo: (state: IMemoListState, action: IRemoveMemoAction) => {
        state.memoList = state.memoList.filter((memo: Memo) => memo.id !== action.payload.id);
    },
}

const memoListReducer = createReducer(initialState, builder => {
    builder
      .addCase(action.removeMemo, reducer.removeMemo);
});

export default memoListReducer;