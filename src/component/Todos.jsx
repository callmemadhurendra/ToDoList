import React from "react";
import Todo from "./Todo";

function Todos({ todos, toogleCompleted, removeTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          toogleCompleted={toogleCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
export default Todos;
