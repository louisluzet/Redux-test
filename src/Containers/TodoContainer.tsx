import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoAdd from "../components/TodoAdd";
import TodoList from "../components/TodoList";
import { RootState } from "../rootReducer";
import { create, done, remove } from "../todoReducer";

const TodoContainer = () => {
    const todos = useSelector((state: RootState) => state.todoReducer);
    const dispatch = useDispatch();

    const onCreate = (todo: string) => {
        dispatch(create(todo));
    };
    const onDone = (id: number) => {
        dispatch(done(id));
    }
    const onRemove = (id: number) => {
        dispatch(remove(id));
    }
    return(
        <div className="TodoContainer">
            <TodoAdd onAdd={onCreate} />
            <TodoList todos={todos} onToggle={onDone} onRemove={onRemove} />
        </div>
    )

}
export default TodoContainer;