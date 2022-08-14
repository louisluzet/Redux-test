import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { RootState } from "."
import Main from "../Components/MainPage/Main";
import { memocreate, memodetail, memoedit, memoinit, memoremove } from "./memo";

const memoContainer = () => {
    const memos = useSelector((state: RootState) => state.Memo.memos);
    const dispatch = useDispatch<any>();

    const init = () => {
        dispatch(memoinit());
    }
    const create = () => {
        dispatch(memocreate());
    }
    const remove = () => {
        dispatch(memoremove());
    }
    const edit = () => {
        dispatch(memoedit());
    }
    const detail = () => {
        dispatch(memodetail());
    }
    return (
        <Main
            memos={memos}
            init={init}
            create={create}
            edit={edit}
            detail={detail}
            remove={remove}    
        />
    )
}
export default memoContainer

