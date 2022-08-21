import { Todo } from "../todoReducer";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};
const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
  return (
    <div className="TodoList">
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
