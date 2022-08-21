import { CSSProperties } from "react";
import { Todo } from "../todoReducer";

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}


const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
    const todoStyle: CSSProperties = {
        textDecoration: todo.done? 'line-through' : 'none'
    };

    const removeStyle: CSSProperties = {
        marginLeft: 8,
        color: 'red'
    };

    const handleToggle = () => {
        onToggle(todo.id);
    };

    const handleRemove = () => {
        onRemove(todo.id);
    };

    return(
        <div className="TodoItem">
            <li>
                <span onClick={handleToggle} style={todoStyle}>
                    {todo.todo}
                </span>
                <span onClick={handleRemove} style={removeStyle}>
                    (X)
                </span>
            </li>
        </div>
    )
}
export default TodoItem;