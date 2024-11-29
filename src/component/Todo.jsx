function todo({ completed, id, title, toogleCompleted, removeTodo }) {
  return (
    <div className="display">
      <p>id: {id}</p>
      {/* <p>Status: {completed?"completed":"not completed"}</p> */}
      <input
        type="checkbox"
        onChange={() => {
          toogleCompleted(id);
        }}
      ></input>
      <p>Title: {title}</p>

      <button onClick={() => removeTodo(id)}>Remove</button>
    </div>
  );
}

export default todo;
