import { useDispatch } from "react-redux";
import { Memo } from "../../../store/memoList";

interface IProps {
    memo: Memo
}
const MemoItem = ({memo}: IProps) => {
    const {id, title, description, date, color} = memo;
    const dispatch = useDispatch;

    const onRemoveMemo = () => {
        dispatch(action.memoRemove({id}));
    }
    return(
        <div className="MemoItem">
            <div>{id}</div>
            <div>{title} {date}</div>
            <div>{description}</div>
            <button onClick={onRemoveMemo}>삭제</button>
        </div>
    )
}
export default MemoItem;