import { useState } from "react";
import {v4 as uuid} from 'uuid';

function Todoform({ addTodo }) {
  const [title, setTitle] = useState("");

  // #WHY WE USE 'title' -> beacuse we pass value in input field as a title and we change only title and accept it also
  function handleSubmit(e) {
    e.preventDefault();
    if(title.trim().length===0){
      alert("Please ente a input");
      return ;
    }
   //  console.log("Submitted");
   //  addTodo(title);

   const newTodo={
      title:title,
      completed:false,
      id:uuid(),
   };
   addTodo(newTodo);
   setTitle("");

  }

  return (
    <form onSubmit={handleSubmit} className="todoForm" >
      <input
      className="todoForm__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button type="submit" className="todoForm__btn">Add</button>
    </form>
  );
}

export default Todoform;
