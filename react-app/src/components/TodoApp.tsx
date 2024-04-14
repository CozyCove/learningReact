import { useRef, useState } from "react";

function TodoApp() {
  const [todoInput, setTodoInput] = useState("");
  const [index, setIndex] = useState(0);
  const [todo, setTodo] = useState<{ task: string; isDone: boolean ; important: boolean}[]>([]);

  const title = "ToDoApp";
  const next = useRef(null);
  const todolist = todo.map((task, index) => (
    <li key={index} className="flex list-disc ">
      <button
        className={`${
          task.isDone ? "line-through text-blue-400" : "text-red-400"
        }`}
        onClick={() => handleDone(index)}
      >
        {task.task}
      </button>

      <button className="mx-4" onClick={() => handleDone(index)}>
        {task.isDone ? "Undo" : "Done"}
      </button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  ));

  
  function handleSubmit(event:SubmitEvent) {
    event.preventDefault();
    if (next.current !== "") {
      setTodo([{ task: next.current.value, isDone: false , important:false}, ...todo]);
      next.current.value=""
    }
  }
  function handleDone(indexToDone: number) {
    setTodo((todo) =>
      todo.map((item, idx) => //can also use {...item, isDone:!item.isDone} this returns with a condition if idx == indextodone
        idx === indexToDone ? { task:item.task, important:item.important, isDone: !item.isDone } : item
      )
    );
  }
  function handleDelete(indexToRemove: number) {
    setTodo((oldItems) =>
      oldItems.filter((item, index) => index !== indexToRemove)
    );
  }
  return (
    <div className="block w-1/2 ">
      <div>
        <div>{title}</div>
        <form onSubmit={handleSubmit}>
        <input
          placeholder="Put task here"
          className=" rounded-md border-gray-200 pe-10 shadow-sm sm:text-sm"
          
          ref={next}
        ></input>
        <button type="submit">
          add
        </button>
        </form>
       
      </div>
      <div>{todolist}</div>
    </div>
  );
}
export default TodoApp;
