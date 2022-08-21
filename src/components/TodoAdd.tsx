import { ChangeEvent, FormEvent, useState } from "react";

type TodoAddProps = {
  onAdd: (todo: string) => void;
};

const TodoAdd = ({ onAdd }: TodoAddProps) => {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };
  return (
    <div className="TodoAdd">
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};
export default TodoAdd;
