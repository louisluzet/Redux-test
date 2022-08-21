import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../counterReducer";
import { RootState } from "../rootReducer";

// 리덕스의 값을 불러와서 사용하고 액션을 디스패치하는 컴포넌트
const CounterContainer = () => {
    // 상태를 조회. 상태를 조회할 때는 state의 타입을 RootState로 지정해야 한다.
    const count = useSelector((state: RootState) => state.counterReducer.count);
    const dispatch = useDispatch(); //디스패치 함수를 가져온다.

    // 각 액션들을 디스패치하는 함수를 만든다.
    const onIncrease = () => {
        dispatch(increase());
    };
    const onDecrease = () => {
        if(count > 0) {
            dispatch(decrease());
        }
    };

    return(
        <Counter count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease} />
    )
}
export default CounterContainer;