import React, { useState } from "react";
import { useForm } from "react-hook-form";

/*
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="to do 작성" />
        <button>Add</button>
      </form>
    </div>
  );
}
*/

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="to do 작성" />
        <input {...register("fn")} placeholder="to do 작성" />
        <input {...register("ln")} placeholder="to do 작성" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
