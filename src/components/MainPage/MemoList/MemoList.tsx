import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { MemoListState } from "../../../store/memoList";
import MemoItem from "./MemoItem";

const MemoList = () => {
    const memoList: MemoListState = useSelector((state: RootState) => state.memoList.memoList);
    return(
        <div className="MemoList">
            {memoList && memoList.map(memo => <MemoItem key={memo.id} memo={memo} />)}

        </div>
    )
}
export default MemoList;