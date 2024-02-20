import { useState } from "react";

import { useReducer } from "react";

const initialSta = {
  name: "",
  address: {
    street: "",
    cordinate: {
      xaxis: "",
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "NAME": {
      return {
        ...state,
        name: action.payload,
      };
    }

    case "STREET": {
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    }

    case "AXIS": {
      return {
        ...state,
        address: {
          ...state.address,
          cordinate: {
            ...state.address.cordinate,
            xaxis: action.payload,
          },
        },
      };
    }

    default: {
      throw new Error("Invalid action type");
    }
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialSta);
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setData([...data, count]);
  }

  console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            dispatch({ type: "NAME", payload: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="street"
          onChange={(e) => {
            dispatch({ type: "STREET", payload: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="xaxis"
          onChange={(e) => {
            dispatch({ type: "AXIS", payload: e.target.value });
          }}
        />
        <button>Click</button>
      </form>
    </>
  );
}

export default App;
