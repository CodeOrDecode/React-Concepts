import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  let check = 6

  return (
    <>
      {new Array(count).fill(0).map((ele, index) => {
        return <button disabled={check == index+1} key={index}>{index + 1}</button>;
      })}
    </>
  );
}

export default App;
