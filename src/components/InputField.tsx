import React from 'react';

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  console.log(todo);

  return (
    <div>
      Input Field
      <form className='input' onSubmit={handleAdd}>
        <input
          type='input'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit'>
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
