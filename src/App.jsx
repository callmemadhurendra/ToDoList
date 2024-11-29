import { useState } from "react";
import TodoForm from "./component/TodoForm";
import Todos from "./component/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
  ]);

  const addTodo = (newTodo) => {
    // console.log(newTodo);
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id) => {
    //using callback function arrow function
    // setTodos(prevState=>prevState.filter(todo=>todo.id !==id));

    // using loop
    const newTodos = [];
    for (let todo of todos) {
      if (todo.id !== id) {
        newTodos.push(todo);
      }
    }
    setTodos(newTodos);
  };

  // # toogle using loop
  // const toogleCompleted=(id)=>{
  // console.log(id,"toggle Completed");

  ///using loop
  // const newTodos=[];
  //   for(let todo of todos){
  //   if(todos.id===id){
  //     newTodos.push({...todo,completed: !todo.completed})
  //   }else{
  //     newTodos.push(todo);
  //   }
  // }setTodos(newTodos);

  // };

  // # toogle using map
  const toogleCompleted = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">TodoList</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toogleCompleted={toogleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
