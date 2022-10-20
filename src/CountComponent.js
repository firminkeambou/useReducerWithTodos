//import logo from './logo.svg';
//import './App.css'; //useState,
import React, { useReducer } from "react";

//the necessecity of ACTIONS help troubleshooting
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
function CountComponent() {
  //useReducer helps to manage state as well as useState, but it concepts is closest to react-redux, it takes away boilerplate of redux
  //useReducer take the reducer and the initial state
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // consider state = {count:0} and dispatch the function we call to update our state , the dispatch function is going to call the reducer which takes state and action

  // const [count, setCount] = useState(0);//
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT }); // dispatch the action
    //setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span> {state.count}</span>
      <button onClick={increment}>+</button>
      <br />
    </div>
  );
}

export default CountComponent;
