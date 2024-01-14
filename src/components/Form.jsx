import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, seteditTodo }) => {
  // updateTodo fonksiyonunda düzeltmeler
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    seteditTodo(null); // seteditTodo("") yerine seteditTodo(null)
  };

  useEffect(() => {
    // editTodo değiştiğinde setInput fonksiyonu güncelleniyor
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    // input değiştiğinde setInput fonksiyonu güncelleniyor
    setInput(event.target.value);
  };

  const FormonSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      // Yeni bir todo ekleniyor
      setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
      setInput("");
    } else {
      // Todo güncelleniyor
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={FormonSubmit}>
      <input
        type="text"
        placeholder="Enter todolist.."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
