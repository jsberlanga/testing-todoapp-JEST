import React from "react";
import axios from "axios";

export const dataReducer = (state, action) => {
  if (action.type === "SET_ERROR") {
    return { ...state, list: [], error: true };
  }

  if (action.type === "SET_LIST") {
    return { ...state, list: action.list, error: null };
  }

  throw new Error();
};

const initialData = {
  list: [],
  error: null
};

const Hooks = () => {
  const [counter, setCounter] = React.useState(0);
  const [data, dispatch] = React.useReducer(dataReducer, initialData);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "http://hn.algolia.com/api/v1/search?query=react"
        );
        console.log(res);
        dispatch({ type: "SET_LIST", list: res.data.hits });
      } catch (error) {
        console.log(error);
        dispatch({ type: "SET_ERROR" });
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>My Counter</h1>
      <Counter counter={counter} />

      <button
        style={{ padding: "0.7rem" }}
        type="button"
        onClick={() => setCounter(counter + 1)}
        data-testid="increment"
      >
        +
      </button>

      <button
        style={{ padding: "0.7rem" }}
        type="button"
        onClick={() => setCounter(counter - 1)}
        data-testid="decrement"
      >
        -
      </button>

      <h2>My Async Data</h2>

      {data.error && <div className="error">Error</div>}

      <ul data-testid="list">
        {data.list.map(item => (
          <li key={item.objectID}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const Counter = ({ counter }) => (
  <div>
    <p data-testid="counter">{counter}</p>
  </div>
);

export default Hooks;
