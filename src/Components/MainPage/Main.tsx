import { memoState } from "../../modules/memo"

type MemoProps = {
    memos: memoState,
    init: () => void;
    create: () => void;
    remove: () => void;
    edit: () => void;
    detail: () => void;
}

const MainPage = ({memos, init, create, detail, edit, remove}: MemoProps) => {
    return (
        <div className="MainPage"></div>
    )
}
export default MainPage