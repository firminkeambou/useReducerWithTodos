import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};
//...action.todos, newTodo(action.payload.nam)

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, newTodo(action.payload.nam)],
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        }),
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
}

function newTodo(nam) {
  return { id: Date.now(), name: nam, complete: false };
}

function TodosComponent() {
  const [state, dispatch] = useReducer(reducer, { todos: [], free: {} });
  const [name, setName] = useState("");

  const allTodos = state.todos;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { nam: name } });
    setName("");
  };
  //console.log(name);
  console.log(state);

  return (
    <>
      <h3>
        {" "}
        display of the component "Todo Components" that handle complex state
        using useReducer()
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add todo list"
        />
      </form>

      <h3> Display added or remains to do list ({allTodos.length} items) </h3>
      {allTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

export default TodosComponent;
