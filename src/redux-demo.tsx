// 액션 타입을 선언 
// 뒤에 as const를 선언함으로써 나중에 액션 객체를 만들 때 action.type의 값을 추론하는 과정에서 
// 액션 type이 string으로 추론되지 않고 counterReducer/INCREASE와 같이 실제 문자열 값으로 추론되도록
const INCREASE = 'redux-demo/INCREASE' as const;
const DECREASE = 'redux-demo/DECREASE' as const;

export const increase = () => ({
    type: INCREASE
  });
  
  export const decrease = () => ({
    type: DECREASE
  });

// 이 리덕스 모듈에서 관리할 상태의 타입을 선언
type CounterState = {
    count: number;
}
// 모든 액션 객체들에 대한 타입을 정의 
type CounterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>;

const initialState: CounterState = {
    count: 0
  };

//리듀서 작성
const counterReducer = (state: CounterState = initialState, action: CounterAction) => {
    switch (action.type) {
        case INCREASE: 
            return { count: state.count + 1 }
        case DECREASE: 
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export default counterReducer;
