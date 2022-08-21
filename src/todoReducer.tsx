const CREATE = 'todoReducer/CREATE' as const;
const DONE = 'todoReducer/DONE' as const;
const REMOVE= 'todoReducer/REMOVE' as const;

let nextId = 1; // 새로운 항목을 추가할 때 사용할 고유 id 값

// 액션 생성 함수
export const create = (todo: string) => ({
    type: CREATE,
    payload: {
      id: nextId++,
      todo  
    }
});

export const done = (id: number) => ({
    type: DONE,
    payload: id
});

export const remove = (id: number) => ({
    type: REMOVE,
    payload: id
});

type TodosAction = 
    | ReturnType<typeof create>
    | ReturnType<typeof done>
    | ReturnType<typeof remove>

export type Todo = {
    id: number,
    todo: string,
    done: boolean
}

export type TodosState = Todo[];

const initialState: TodosState = [];

const TodoReducer = (state: TodosState = initialState, action: TodosAction) => {
    switch (action.type) {
        case CREATE:
            return state.concat({
                id: action.payload.id,
                todo: action.payload.todo,
                done: false
            });
        case REMOVE: 
            return state.filter(todo => todo.id !== action.payload);
        case DONE: 
            return state.map(todo => 
                todo.id === action.payload ? {...todo, done: !todo.done} : todo
            );
        default:
            return state;
    }
}
export default TodoReducer;